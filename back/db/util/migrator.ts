import db from "../dbConfig";
import fs from "fs";
import { MigrateAllUnmigrated } from "./sqlScripts";
import { MigrationLog, Migration } from "../../types/dbtypes";
import { Resource } from "../../types/modelTypes";

const path = process.cwd() + "/db/migrations/"

async function migrate() {
  const unmigrated = await identifyUnmigrated();

  if (unmigrated) {
    debugger;
    var success = await activateMigrations(unmigrated);
    if (success) {
      await updateMigrations();
      console.log("Migration Complete");
    }
  } else console.log("No Inactive Migrations")

}

async function updateMigrations() {
  const q = MigrateAllUnmigrated;
  await db.do(async cxn => {
    await cxn.any(q).catch(e => console.error(e));
  });
}

async function identifyUnmigrated() {
  const q = "SELECT * FROM migrations where status = false";
  return await db.do(async cxn => {
    let unmigrated = await cxn.any<MigrationLog>(q).catch(e => console.error("ERROR in identifyUnmigrated(): ", e)) || [];
    if (unmigrated.length && !validateMigrations(unmigrated)) {
      console.error("Couldn't validate results");
      return null
    }
    return unmigrated;
  })

}

async function activateMigrations(unmigrated: MigrationLog[]) {
  const migrations: Migration[] = unmigrated.map(m => {
    return require(path + m.name + ".js")
  });

  migrations.forEach(m => runMigration(m).then(r => r))
  return true;
}

async function runMigration(migration: Migration) {
  await db.do(async cxn => {
    await migration.up(cxn);
  });
}

function validateMigrations(mgs: MigrationLog[]) {
  let valid = mgs.length > 0;
  if (valid) {
    mgs.forEach(m => {
      let path = process.cwd() + "/db/migrations/" + m.name + ".js";
      if (!fs.existsSync(path)) {
        valid = false;
      }
      else {

        let migration = require(path);
        if (!migration.up) valid = false;
      }

    });

  }
  return valid;
}
migrate().then(s => process.exit());

