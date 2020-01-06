import client from "../db/client";

type Book = {
  title: string;
  userId: number;
  year: number;
};

class Books {
  static async all(): Promise<Book[]> {
    const books = await client.select().from("books");
    return books;
  }

  static async get(id: string): Promise<Book> {
    const book = await client
      .select()
      .from("books")
      .where("id", id);
    return book[0];
  }
  static async create(params: Book): Promise<Book> {
    const book = await client("books")
      .insert(params)
      .returning("*");
    return book;
  }
  static async delete(id: string): Promise<Book> {
    const book = await client("books")
      .where("id", id)
      .del()
      .returning("*");
    return book;
  }
}

export default Books;
