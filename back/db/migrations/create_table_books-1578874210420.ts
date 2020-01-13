import { createTable, ColumnParser as cp } from "../Client";
import { Cxn } from "../../types/dbtypes";

async function up(cxn: Cxn) {
    await createTable(cxn, "books", (b: cp) => {
        b.string("title", { "notNull": true });
        b.int("userId", { "notNull": true });
        b.int("year");

        b.id();

    })
}
async function down(cxn: Cxn) {
    const script = "DROP TABLE if exists books;";
    await cxn.any(script).catch(e => console.log(e));
}

module.exports = { up: up, down: down };