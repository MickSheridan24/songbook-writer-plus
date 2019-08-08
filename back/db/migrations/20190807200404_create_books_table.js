exports.up = function(knex) {
  return knex.schema.hasTable("books").then(exists => {
    if (!exists) {
      return knex.schema.createTable("books", tbl => {
        tbl.increments();
        tbl.string("title");
        tbl.integer("user_id");
        tbl.integer("year");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("books");
};
