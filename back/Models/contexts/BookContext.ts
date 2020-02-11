import DBContext from "./DBContext"
import { tIndex, Book } from "../../types/modelTypes"
import { Get } from "../interfaces/accessors"
class BookContext extends DBContext {
    _t: string;
    constructor() {
        super();
        this._t = "books"
    }

    async get(id: string) {
        const r = await Get(this._t, id)
        return this.returnModel(r)
    }

    returnModel(fields: tIndex): Book {
        return new Book(fields);
    }
}

export default BookContext