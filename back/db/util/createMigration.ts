import db from "../DB";
import stubs from "./stubMaster";
import { logDBError as log } from "./shared"
import { Cxn } from "../../types/dbtypes"
import { schema, validType, column } from "../schema"
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
    case "update":

    default: return new Promise<string>((res, rj) => res("async function up(cxn) { }\n async function down(cxn) { } \n module.exports = { up: up, down: down }; "));
  }
}



async function checkTableTypes(tableName: string) {
  debugger
  const found = schema.find(t => t.name === tableName)
  if (found) {
    return buildTableFields(found.columns);
  }
  return ""
}


function buildTableFields(fields: column[]) {
  let ret = ""
  // {name: "title", type: "string", options{notNull: true}}
  //  b.string("title", { notNull: true })
  fields.forEach(f => {
    ret += `b.${f.type}("${f.name}"`
    if (f.options) {
      ret += "," + JSON.stringify(f.options)
    }
    ret += ");\n"
  })
  return ret;
}


fetchStub(migrationType, itemName)
  .then((stub) => createMigration(stub))
  .then(s => process.exit());