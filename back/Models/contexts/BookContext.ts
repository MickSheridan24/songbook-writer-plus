import DBContext from "./DBContext"
import { tIndex, Book } from "../../types/modelTypes"
import { Get } from "../interfaces/accessors"
class BookContext extends DBContext {
    static _t: string = "books"

    static async get(id: string) {
        const r = await Get(this._t, id)
        return this.returnModel(r)
    }

    static returnModel(fields: tIndex): Book {
        return new Book(fields);
    }
}

export default BookContext