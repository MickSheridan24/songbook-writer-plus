import client from "../db/client";
class Books {
    static async all() {
        const books = await client.select().from("books");
        return books;
    }
    static async get(id) {
        const book = await client
            .select()
            .from("books")
            .where("id", id);
        return book[0];
    }
    static async create(params) {
        const book = await client("books")
            .insert(params)
            .returning("*");
        return book;
    }
    static async delete(id) {
        const book = await client("books")
            .where("id", id)
            .del()
            .returning("*");
        return book;
    }
}
export default Books;
