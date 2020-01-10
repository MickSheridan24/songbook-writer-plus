import db from "../dbConfig";
import stubs from "./stubMaster";
import { logDBError as log } from "./shared"
import { Cxn } from "../../types/dbtypes"
const fs = require("fs");


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

async function createMigration(stub: string) {
  console.log("Creating Migration...")
  const datetime = Date.now();
  const migrationName = name + "-" + datetime
  const path = "./db/migrations/" + migrationName + ".ts";

  fs.writeFileSync(path, stub, (err: string) => log(err, "createMigration.writeFileSync"))
  await updateMigrationsTable(migrationName).then(s => s);

}

async function updateMigrationsTable(name: string) {
  const q = "INSERT INTO migrations (name, migrationDate, status) VALUES ('" + name + "', NULL, false);"
  await db.do(async (cxn: Cxn) => {
    await cxn.any(q).catch(e => console.error("ERROR inserting migration", e))
    return true;
  })
}

function fetchStub(stubName: string, insert = "TABLE_NAME") {
  switch (stubName) {
    case "table": return stubs.createTable(insert);
    default: return null;
  }
}


