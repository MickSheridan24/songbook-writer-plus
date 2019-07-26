exports.up = function(knex) {
  return knex.schema.hasTable("songs").then(exists => {
    if (!exists) {
      return knex.schema.createTable("songs", tbl => {
        tbl.increments();
        tbl.string("title");
        tbl.integer("userId");
        tbl.string("artist");
        tbl.string("text");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("songs");
};
