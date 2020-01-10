import cm from "../util/crudMaster";
import { Cxn } from "../../types/dbtypes";

async function up(cxn: Cxn) {
    console.log("running");
    await cm.createTable(cxn, "books", (b) => {
        b.string("title", { notNull: true })
        b.int("year");
        b.int("userId", { notNull: true })
        b.id();
    })
}
async function down(cxn: Cxn) {
    const script = "DROP TABLE if exists books;";
    await cxn.any(script).catch(e => console.log(e));
}

module.exports = { up: up, down: down };