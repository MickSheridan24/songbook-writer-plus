import DBContext from "./DBContext"

class BookContext extends DBContext {
    static _t: string = "books"

    // static async update(id: number, params: Book) {
    //     return await Update<Book>(this._t, id, params)
    // }
    // static async delete(id: number) {
    //     return await Delete<Book>(this._t, id)
    // }

}

export default BookContext