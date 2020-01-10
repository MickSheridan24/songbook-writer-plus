import { Cxn, Migration, MigrationLog } from "../../types/dbtypes";

const db = require("../dbConfig");
const rollback = require("./shared").performRollback
const fs = require("fs")

const migrationName = process.argv[2]

async function kill(name: string) {
    const migration = await find(name)
    const rb = rollback([migration]);
    const rmv = remove(migration)
    await rb;
    await rmv;
    fs.unlinkSync(process.cwd() + "/db/migrations/" + migration.name + ".js")

}

async function find(name: string): Promise<MigrationLog> {
    return await db.do(async (cxn: Cxn) => {
        const target = await cxn.one<MigrationLog>("Select * from migrations where name = $1", name).catch(e => console.error("DBERROR in killMigration.find(): ", e))
        if (!target) {
            console.error("Could not find name in database");
            process.exit();
        } else return target;
    })
}

async function remove(migration: MigrationLog) {
    return await db.do(async (cxn: Cxn) => {
        return await cxn.any("DELETE from migrations where name = $1", migration.name).catch(e => console.error("DBERROR in killMigration.remove(): ", e))
    })
}

kill(migrationName).then(r => console.log("Migration Killed"))