import db from "../dbConfig";
import stubs from "./stubMaster";
import { logDBError as log } from "./shared"
import { Cxn } from "../../types/dbtypes"
import TableMap from "../../src/Model/TableMap"
const fs = require("fs");



const args = process.argv;

let itemName = args[2] ? args[2] : "Migration";
debugger
const migrationType = args[3]
async function createMigration(stub: string) {
  console.log("Creating Migration...")
  const datetime = Date.now();


  const migrationName = itemName + "-" + datetime
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


async function fetchStub(stubName: string, insert = "invalid"): Promise<string> {
  switch (stubName) {
    case "table":
      const fields = await checkTableTypes(insert)
      itemName = "create_table_" + insert;
      return stubs.createTable(insert, fields);
    default: return new Promise<string>((res, rj) => res("async function up(cxn) { }\n async function down(cxn) { } \n module.exports = { up: up, down: down }; "));
  }
}



async function checkTableTypes(tableName: string) {
  debugger
  const found = TableMap.find(t => {

    return t.name === tableName;
  })
  if (found) {
    const model = found.model
    return buildTableFields(model.fields);
  }
  return ""
}

fetchStub(migrationType, itemName)
  .then((stub) => createMigration(stub))
  .then(s => process.exit());