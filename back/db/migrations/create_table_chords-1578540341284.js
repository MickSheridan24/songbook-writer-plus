const cm = require("../util/crudMaster");
async function up(cxn) {
    await cm.createTable(cxn, "chords", (b) => {
        b.id();
    })
}
async function down(cxn) {
    const script = "DROP TABLE if exists chords;";
    await cxn.any(script).catch(e => console.log(e));
}

module.exports = { up: up, down: down };