const stubs = {
    createTable: (name: string) => {
        return `import cm from "../util/crudMaster";
        import { Cxn } from "../../types/dbtypes";
        
        async function up(cxn: Cxn) {
            await cm.createTable(cxn, "${name}", (b) => {
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