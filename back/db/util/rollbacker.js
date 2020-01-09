const db = require("../dbConfig");
const scripts = require("./sqlScripts")


async function start() {
  const migrated = await fetchMigrations();

  await performRollback(migrated);
}


async function fetchMigrations() {
  const q = scripts.IdentifyMigrationsToBeRollbacked;
  return await db.do(async cxn => {
    const migrations = await cxn.any(q).catch(error => console.error("ERROR in rollbacker.fetchMigrations(): ", error))
    if (migrations.length) {
      return migrations;
    } else {
      console.error("ERROR: No migrations to rollback");
      return null;
    }
  })
}

async function performRollback(migrations) {
  for (m of migrations) {
    console.log("Rolling back ", m.name)
    migration = require(process.cwd() + "/db/migrations/" + m.name + ".js");
    await rollback(migration);
  }
  console.log("Rollback Complete.")
}

async function rollback(migration) {
  await db.do(async cxn => {
    await migration.down(cxn);
  })
}

start().then(s => process.exit()); 