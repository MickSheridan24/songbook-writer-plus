import {createTable, ColumnParser as cp} from "../Client";
        import { Cxn } from "../../types/dbtypes";
        
        async function up(cxn: Cxn) {
            await createTable(cxn, "chords", (b: cp) => {
                b.string("note",{"notNull":true});
b.string("aspect");
b.int("line",{"notNull":true});
b.int("character",{"notNull":true});

                b.id();
         
            })
        }
        async function down(cxn: Cxn) {
            const script = "DROP TABLE if exists chords;";
            await cxn.any(script).catch(e => console.log(e));
        }
        
        module.exports = { up: up, down: down };