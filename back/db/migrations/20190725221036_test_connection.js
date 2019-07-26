exports.up = function(knex, Promise) {
  return knex.schema.hasTable("routines").then(exists => {
    if (!exists) {
      return knex.schema.createTableIfNotExists("tests", tbl => {
        tbl.increments();
        tbl.string("what");
        tbl.string("why");
        tbl.string("how");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tests");
};
