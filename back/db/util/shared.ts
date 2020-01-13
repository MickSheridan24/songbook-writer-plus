import db from "../DB";
import { MigrationLog, Migration } from "../../types/dbtypes"
const path = process.cwd() + "/db/migrations/"


async function performRollback(migrations: MigrationLog[]) {
    for (const m of migrations) {
        console.log("Rolling back ", m.name)
        const migration: Migration = require(path + m.name + ".ts");
        await rollback(migration);
    }

}


async function rollback(migration: Migration) {
    await db.do(async cxn => {
        await migration.down(cxn);
    })
}


function logDBError(e: string, name: string) {
    console.error("DBERROR in " + (name || "unnamed process") + ": " + e)
}
export {
    performRollback,
    logDBError
}