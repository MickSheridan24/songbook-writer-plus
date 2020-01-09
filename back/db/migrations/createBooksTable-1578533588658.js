const cm = require("../util/crudMaster");

async function up(cxn) {


    await cm.createTable(cxn, "books", (b) => {
        b.string("title", { notNull: true });
        b.int("year");
        b.int("userId", { notNull: true })
        b.id();
    })
}

async function down(cxn) {
    const script = "DROP TABLE if exists books;";

    await cxn.any(script).catch(e => console.log(e));
}

module.exports = { up: up, down: down };
