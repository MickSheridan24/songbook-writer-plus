import Book from "../Book"
import { Get, All, Where } from "../interfaces/accessors"
import { Create, Update, Delete } from "../interfaces/mutators"

class BookContext {
    private static _t: string = "books"
    static async get(id: string) {
        return await Get(this._t, id)
    }
    static async all() {
        return await All(this._t)
    }
    static async where(query: { [key: string]: string }) {
        return await Where(this._t, query);
    }
    static async create(params: Book) {
        return await Create(this._t, params.getFields())

    }
    static async update(id: number, params: Book) {
        return await Update<Book>(this._t, id, params)
    }
    static async delete(id: number) {
        return await Delete<Book>(this._t, id)
    }
}

export default BookContext