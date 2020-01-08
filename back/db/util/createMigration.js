const fs = require("fs");
const db = require("../dbConfig");

let stub = "async function up(cxn){}\n async function down(cxn){} \n module.exports = { up: up, down: down };";


if (process.argv[3]) {
  const custom = fetchStub(arg[3]);
  stub = custom ? custom : stub;
}

createMigration(stub).then(s => process.exit());

async function createMigration(stub) {
  console.log("Creating Migration...")
  const name = process.argv[2] ? process.argv[2] : "Migration";
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

function fetchStub(name) { }


