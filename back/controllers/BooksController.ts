import BookDB from "../Models/contexts/BookContext"
import { tIndex, Book } from "../types/modelTypes";


class BooksController {

  static async All() {
    const books = await BookDB.all();
    console.log("Controller:", books)
    return books
  }

  static async Where(query: tIndex) {
    const books = await BookDB.where(query);
    return books
  }

  static async Get(id: string) {
    const book = await BookDB.get(id)
    return await book.serialized()
  }

  static async Create(params: tIndex) {
    let book = new Book(params)
    return await BookDB.create(book)
  }
}

export default BooksController