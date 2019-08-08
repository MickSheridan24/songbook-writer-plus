// Serializer
const client = require("../db/knex");

const Chord = {
  all: async songId => {
    const chords = await client
      .select()
      .from("chords")
      .where("song_id", songId);
    return chords;
  },
  create: async params => {
    const chord = await client("chords")
      .insert(params)
      .returning("*");
    return chord[0];
  }
};

module.exports = Chord;
