const client = require("./db/knex");

const Model = {
  all: async resource => {
    const ret = await client.select().from(resource);
    return ret;
  },
  get: async (resource, id, params = {}) => {
    const ret = await client
      .select()
      .from(resource)
      .where("id", id);

    return ret[0];
  },
  create: async (resource, params) => {
    const post = await client(resource)
      .insert(params)
      .returning("*");

    return post[0];
  },
  delete: async (resource, id) => {
    const deletion = await client(resource)
      .where("id", id)
      .del()
      .returning("*");
    return deletion[0];
  },
  update: async (resource, id, params) => {
    const patch = await client(resource)
      .where("id", id)
      .update(params)
      .returning("*");

    return patch[0];
  }
};

module.exports = Model;
