const stubs = {
    createTable: (name: string) => {
        return `const cm = require("../util/crudMaster");  
    async function up(cxn) {
    await cm.createTable(cxn, "${name}", (b) => {
        b.id();
    })
    }   
    async function down(cxn) {
        const script = "DROP TABLE if exists ${name};";
        await cxn.any(script).catch(e => console.log(e));
    }

    module.exports = { up: up, down: down };`
    }
};


export default stubs;