const client = require("../db/knex");

const Book = {
  all: async () => {
    const books = await client.select().from("books");
    return books;
  },
  get: async id => {
    const book = await client
      .select()
      .from("books")
      .where("id", id);
    return book[0];
  },
  create: async params => {
    const book = await client("books")
      .insert(params)
      .returning("*");
    return book;
  },
  delete: async id => {
    const book = await client("books")
      .where("id", id)
      .del()
      .returning("*");
    return book;
  }
};

module.exports = Book;
