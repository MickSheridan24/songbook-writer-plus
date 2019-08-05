exports.up = function(knex, Promise) {
  return knex.schema.table("chords", function(t) {
    t.integer("songId").notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("chords", function(t) {
    t.dropColumn("songId");
  });
};
