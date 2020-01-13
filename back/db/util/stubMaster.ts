const stubs = {
    createTable: (name: string, fields: string = "") => {
        return `import {createTable, ColumnParser as cp} from "../Client";
        import { Cxn } from "../../types/dbtypes";
        
        async function up(cxn: Cxn) {
            await createTable(cxn, "${name}", (b: cp) => {
                ${fields}
                b.id();
         
            })
        }
        async function down(cxn: Cxn) {
            const script = "DROP TABLE if exists ${name};";
            await cxn.any(script).catch(e => console.log(e));
        }
        
        module.exports = { up: up, down: down };`
    }
};


export default stubs;