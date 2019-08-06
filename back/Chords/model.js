// Serializer
const client = require("../db/knex");

const Chord = {
  all: async songId => {
    const chords = await client
      .select()
      .from("chords")
      .where("song_id", songId);
    return chords;
  }
};

module.exports = Chord;
