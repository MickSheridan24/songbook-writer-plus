import { createTable, ColumnParser as cp } from "../Client";
import { Cxn } from "../../types/dbtypes";

async function up(cxn: Cxn) {
    await createTable(cxn, "chords_songs", (b: cp) => {
        b.int("chordId", { "notNull": true });
        b.int("songId", { "notNull": true });
        b.int("line", { "notNull": true });
        b.int("character", { "notNull": true });

        b.id();

    })
}
async function down(cxn: Cxn) {
    const script = "DROP TABLE if exists chords_songs;";
    await cxn.any(script).catch(e => console.log(e));
}

module.exports = { up: up, down: down };