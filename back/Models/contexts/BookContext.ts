import Book from "../Book"
import { Get, All, Where } from "../interfaces/accessors"
import { Create, Update, Delete } from "../interfaces/mutators"

class BookContext {
    static async get(id: string) {
        return await Get("books", id)
    }
    static async all() {
        return await All(Book.tableName)
    }
    static async where(query: { [key: string]: string }) {
        return await Where(Book.tableName, query);
    }
    static async create(params: Book) {
        return await Create(Book.tableName, params.getFields())

    }
    static async update(id: number, params: Book) {
        return await Update<Book>(Book.tableName, id, params)
    }
    static async delete(id: number) {
        return await Delete<Book>(Book.tableName, id)
    }
}

export default BookContext