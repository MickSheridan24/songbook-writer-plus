exports.up = function(knex, Promise) {
  return knex.schema.table("chords", function(t) {
    t.integer("song_id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("chords", function(t) {
    t.dropColumn("song_id");
  });
};
