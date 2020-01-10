import db from "../dbConfig";
import { RollbackMostRecent, IdentifyMigrationsToBeRollbacked } from "./sqlScripts";
import { Cxn, MigrationLog } from "../../types/dbtypes"
import { logDBError as log } from "./shared"


async function start() {
  const migrated = await fetchMigrations();

  const rb = performRollback(migrated);
  const update = updateMigrationsTable();

  await rb;
  await update
  console.log("Rollback Complete.")
}

async function updateMigrationsTable() {
  const q = RollbackMostRecent;
  await db.do(async (cxn: Cxn) => {
    await cxn.any(q).catch(e => log(e, "updateMigrationsTable()"))
  })
}

async function fetchMigrations() {
  const q = IdentifyMigrationsToBeRollbacked;
  return await db.do(async (cxn: Cxn) => {
    const migrations = await cxn.any<MigrationLog>(q).catch(error => log(error, "rollbacker.fetchMigrations")) || []
    if (migrations.length) {
      return migrations;
    } else {
      console.error("ERROR: No migrations to rollback");
      return null;
    }
  })
}

import { performRollback } from "./shared";


start().then(s => process.exit());

