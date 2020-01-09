const fs = require("fs");
const db = require("../dbConfig");
const stubs = require("./stubMaster")
let stub = "async function up(cxn){}\n async function down(cxn){} \n module.exports = { up: up, down: down };";
const args = process.argv;

let name = args[2] ? args[2] : "Migration";
if (args[3]) {
  const insert = args[2];
  const custom = fetchStub(args[3], insert);
  if (custom) {
    stub = custom;
    name = "create_" + args[3] + "_" + insert;
  }
}

createMigration(stub).then(s => process.exit());

async function createMigration(stub) {
  console.log("Creating Migration...")
  const datetime = Date.now();
  const migrationName = name + "-" + datetime
  const path = "./db/migrations/" + migrationName + ".js";

  fs.writeFileSync(path, stub, err => console.error(err))
  await updateMigrationsTable(migrationName).then(s => s);

}

async function updateMigrationsTable(name) {
  const q = "INSERT INTO migrations (name, migrationDate, status) VALUES ('" + name + "', NULL, false);"
  await db.do(async cxn => {
    await cxn.any(q).catch(e => console.error("ERROR inserting migration", e))
    return true;
  })
}

function fetchStub(stubName, insert = "TABLE_NAME") {
  switch (stubName) {
    case "table": return stubs.createTable(insert);
    default: return null;
  }
}


