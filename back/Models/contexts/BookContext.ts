import Book from "../Book"
import DBContext from "./DBContext"
import { Get, All, Where } from "../interfaces/accessors"
import { Create, Update, Delete } from "../interfaces/mutators"

class BookContext extends DBContext {
    static _t: string = "books"

    static async update(id: number, params: Book) {
        return await Update<Book>(this._t, id, params)
    }
    static async delete(id: number) {
        return await Delete<Book>(this._t, id)
    }
}

export default BookContext