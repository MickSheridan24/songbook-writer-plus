const fs = require("fs");
const db = require("../dbConfig");

let stub = "function up(){}\n function down(){}";
console.log("ARGS: " + process.argv);

if (process.argv[3]) {
  const custom = fetchStub(arg[3]);
  stub = custom ? custom : stub;
}

createMigration(stub);

function createMigration(stub) {
  const name = process.argv[2] ? process.argv[2] : "Migration";
  const datetime = Date.now();
  const migrationName = name + "-" + datetime
  const path = "./db/migrations/" + migrationName + ".js";


  if (process.argv[2])
    fs.writeFile(path, stub, err => {
      if (err) throw err;
      else {
        console.log("Migration Made");
        updateMigrationsTable(migrationName).then(s => s);
      }
    });
}

async function updateMigrationsTable(name) {
  const q = "INSERT INTO migrations (name, migrationDate, status) VALUES ('" + name + "', NULL, false);"

  await db.do(async cxn => {
    await cxn.any(q).catch(e => console.error("ERROR inserting migration", e)).then(s => console.log("Updated Migrations Table"))
  })
}

function fetchStub(name) { }

process.exit();
