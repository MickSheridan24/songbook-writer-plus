const fs = require("fs");

let stub = "function up(){}\n function down(){}";
console.log("ARGS: " + process.argv);

if (arg[3]) {
  const custom = fetchStub(arg[3]);
  stub = custom ? custom : stub;
}

createMigration(stub);

function createMigration(stub) {
  const name = process.argv[2] ? process.argv[2] : "Migration";
  const path = "./db/migrations/" + name + "-" + datetime + ".ts";

  const datetime = Date.now();
  if (process.argv[2])
    fs.writeFile(path, stub, err => {
      if (err) throw err;
      else console.log("Migration Made");
    });
}

function fetchStub(name) {}
