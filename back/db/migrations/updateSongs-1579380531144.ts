import { Cxn } from "../../types/dbtypes";
import db from "../DB"
import { addColumn } from "../Client"

async function up(cxn: Cxn) {
    await addColumn(cxn, "songs", "bookID", "int");

}
async function down(cxn: Cxn) {
    const q = "ALTER TABLE DROP COLUMN bookID;"
    await cxn.any(q).catch(e => console.log(e));
}
module.exports = { up: up, down: down }; 