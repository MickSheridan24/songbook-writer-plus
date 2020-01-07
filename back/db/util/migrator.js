const db = require("../dbConfig");

async function migrate(path) {
  const migration = require(path);

  let cxn = await db.connect();
  await migration.up(cxn);
  db.close(cxn);

  console.log("Migration Complete");
}

migrate("../migrations/first");
