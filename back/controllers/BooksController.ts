import BookDB from "../Models/contexts/BookContext"
import DBContext from "../Models/contexts/DBContext"
import { tIndex, Book } from "../types/modelTypes";


class BooksController {
  db: BookDB;
  constructor(db: BookDB) {
    this.db = db;
  }
  async All() {
    const books = await this.db.all();
    return books.map((b: Book) => b.getFields())
  }

  async Where(query: tIndex) {
    const books = await this.db.where(query);
    return books.map((b: Book) => b.getFields())
  }

  async Get(id: string) {
    const book = await this.db.get(id)
    return await book.serialized()
  }

  async Create(params: tIndex) {
    let book = new Book(params)
    return await this.db.create(book)
  }
}

export default BooksController