const client = require("../db/knex");

const song = {
  all: async () => {
    const routines = await client.select().from("songs");
    return routines;
  },
  get: async id => {
    const res = await client
      .select()
      .from("songs")
      .where("id", id);
    return res[0];
  },
  create: async params => {
    console.log("POST", params);
    const post = await client("songs")
      .insert({ title: params.title, artist: params.artist, text: params.text })
      .returning("*");

    return post[0];
  },
  delete: function(id) {},
  update: function(id, params) {}
};

module.exports = song;
