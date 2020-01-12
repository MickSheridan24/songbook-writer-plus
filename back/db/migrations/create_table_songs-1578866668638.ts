import cm from "../util/crudMaster";
        import { Cxn } from "../../types/dbtypes";
        
        async function up(cxn: Cxn) {
            await cm.createTable(cxn, "songs", (b) => {
                b.id();
            })
        }
        async function down(cxn: Cxn) {
            const script = "DROP TABLE if exists songs;";
            await cxn.any(script).catch(e => console.log(e));
        }
        
        module.exports = { up: up, down: down };