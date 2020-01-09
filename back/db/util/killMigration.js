
const db = require("../dbConfig");
const rollback = require("./shared").performRollback
const fs = require("fs")

const migrationName = process.argv[2]

async function kill(name) {
    const migration = await find(name)
    const rb = rollback([migration]);
    const rmv = remove(migration)
    await rb;
    await rmv;
    fs.unlinkSync(process.cwd() + "/db/migrations/" + m.name + ".js")

}

async function find(name) {
    return await db.do(async cxn => {
        return await cxn.one("Select * from migrations where name = $1", name).catch(e => console.error("DBERROR in killMigration.find(): ", e))
    })
}

async function remove(migration) {
    return await db.do(async cxn => {
        return await cxn.any("DELETE from migrations where name = $1", migration.name).catch(e => console.error("DBERROR in killMigration.remove(): ", e))
    })
}

kill(migrationName).then(r => console.log("Migration Killed"))