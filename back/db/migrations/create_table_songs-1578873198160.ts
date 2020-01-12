import {createTable, ColumnParser as cp} from "../util/crudMaster";
        import { Cxn } from "../../types/dbtypes";
        
        async function up(cxn: Cxn) {
            await createTable(cxn, "songs", (b: cp) => {
                b.string("title",{"notNull":true});
b.int("userId",{"notNull":true});
b.string("text",{"notNull":true});
b.string("artist",{"notNull":true});

                b.id();
         
            })
        }
        async function down(cxn: Cxn) {
            const script = "DROP TABLE if exists songs;";
            await cxn.any(script).catch(e => console.log(e));
        }
        
        module.exports = { up: up, down: down };