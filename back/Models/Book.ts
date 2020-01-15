import Base from "./BaseModel"
import { Get, All, Where } from "./interfaces/accessors"
import { Create, Update, Delete } from "./interfaces/mutators"

type _book = {
  title: string;
  userId: number;
  year: number;
}

function isBook(params: unknown): params is _book {
  return !!(params as _book)
}

class Book extends Base<_book> {
  static tableName = "books"
  constructor(params: _book) {
    super(params)
  }

  static async get(id: string) {
    return await Get(this.tableName, id)
  }
  static async all() {
    return await All(this.tableName)
  }
  static async where(query: { [key: string]: string }) {
    return await Where(this.tableName, query);
  }

  static async create(params: unknown) {
    console.log("MODEL", params)
    if (isBook(params)) {
      return await Create<_book>(this.tableName, params)
    }
  }
  static async update(id: number, params: _book) {
    return await Update<_book>(this.tableName, id, params)
  }
  static async delete(id: number) {
    return await Delete<_book>(this.tableName, id)
  }

}

export default Book;
