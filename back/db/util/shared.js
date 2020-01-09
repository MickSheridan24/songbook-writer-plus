const db = require("../dbConfig");

async function performRollback(migrations) {
    for (m of migrations) {
        console.log("Rolling back ", m.name)
        migration = require(process.cwd() + "/db/migrations/" + m.name + ".js");
        await rollback(migration);
    }

}


async function rollback(migration) {
    await db.do(async cxn => {
        await migration.down(cxn);
    })
}

module.exports = {
    performRollback
}