const db = require("../dbConfig");
const fs = require("fs");

async function migrate() {
  const unmigrated = await identifyUnmigrated();
  debugger;
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
  const q = "UPDATE migrations set status = true";

  db.do(async cxn => {
    await cxn.any(q).catch(e => console.error(e));
  });
}

async function identifyUnmigrated() {
  const q = "SELECT * FROM migrations where status = false";
  return await db.do(async cxn => {
    let unmigrated = await cxn.any(q).catch(e => console.error("ERROR in identifyUnmigrated(): ", e));
    if (!validateMigrations(unmigrated)) {
      console.error("Couldn't validate results");
      unmigrated = null;
    }
    return unmigrated;
  })

}

async function activateMigrations(unmigrated) {
  const migrations = unmigrated.map(m => {
    let path = process.cwd() + "/back/db/migrations/" + m.name + ".js";
    return require(path)
  });

  migrations.forEach(m => runMigration(m).then(r => r))
  return true;
}

async function runMigration(migration) {
  debugger;
  db.do(async cxn => {
    await migration.up(cxn);
  });
}

function validateMigrations(mgs) {
  console.log("Inactive Migrations: ", mgs);
  let valid = mgs.length > 0;
  if (valid) {
    mgs.forEach(m => {
      let path = process.cwd() + "/back/db/migrations/" + m.name + ".js";
      if (!fs.existsSync(path)) {
        valid = false;
      }
      else {
        let migration = require(path);
        if (!migration.up) valid = false;
      }
    });
  }
  debugger;
  return valid;
}
debugger;
migrate();
