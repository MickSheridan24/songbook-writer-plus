async function up(cxn) {
  const script =
    "CREATE TABLE IF NOT EXISTS books (title varchar, userId int, year int, id int not null, Primary Key(id));";

  await cxn.any(script).catch(e => console.log(e));
}

async function down(cxn) {
  const script = "DROP TABLE books";

  await cxn.any(script).catch(e => console.log(e));
}

module.exports = { up: up, down: down };
