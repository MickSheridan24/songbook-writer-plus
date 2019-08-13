const client = require("../db/knex");
const Chord = require("../Chords/model");

const Song = {
  get: async (id, params = {}) => {
    const res = await client
      .select()
      .from("songs")
      .where("id", id);
    const song = { ...res[0] };
    if (params.getChords) {
      song.chords = await Chord.all(id);
    }
    return song;
  }
};

module.exports = Song;
