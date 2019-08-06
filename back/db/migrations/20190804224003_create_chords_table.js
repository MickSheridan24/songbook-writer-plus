exports.up = function(knex) {
  return knex.schema.hasTable("chords").then(exists => {
    if (!exists) {
      return knex.schema.createTable("chords", tbl => {
        tbl.increments();
        tbl.string("note");
        tbl.string("aspect");
        tbl.integer("note_num");
        tbl.integer("line");
        tbl.integer("offset");
      });
    }
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("chords");
};
