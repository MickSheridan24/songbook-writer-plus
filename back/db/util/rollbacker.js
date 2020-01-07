const db = require("../dbConfig");

async function rollback(path) {
  const migration = require(path);
  let cxn = await db.connect();
  await migration.down(cxn);
  db.close(cxn);

  console.log("Rollback Complete");
}

rollback("../migrations/first");
