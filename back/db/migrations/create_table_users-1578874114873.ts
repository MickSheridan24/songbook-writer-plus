import { createTable, ColumnParser as cp } from "../Client";
import { Cxn } from "../../types/dbtypes";

async function up(cxn: Cxn) {
    await createTable(cxn, "users", (b: cp) => {
        b.string("username", { "notNull": true });
        b.string("passwordDigest", { "notNull": true });

        b.id();

    })
}
async function down(cxn: Cxn) {
    const script = "DROP TABLE if exists users;";
    await cxn.any(script).catch(e => console.log(e));
}

module.exports = { up: up, down: down };