const client = require("../db/knex");
const Chord = require("../Chords/model");

const Song = {
  all: async () => {
    const routines = await client.select().from("songs");
    return routines;
  },
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
  },
  create: async params => {
    const post = await client("songs")
      .insert(params)
      .returning("*");

    return post[0];
  },
  delete: async id => {
    const deletion = await client("songs")
      .where("id", id)
      .del()
      .returning("*");
    return deletion[0];
  },
  update: async (id, params) => {
    const patch = await client("songs")
      .where("id", id)
      .update(params)
      .returning("*");

    return patch[0];
  }
};

module.exports = Song;
