import Base from "./BaseModel"
import { Get, All, Where } from "./interfaces/accessors"
import { Create, Update, Destroy } from "./interfaces/mutators"

type _book = {
  title: string;
  userId: number;
  year: number;
}

class Book extends Base<_book>{
  static tableName = "books"
  constructor(params: _book) {
    super(params)
  }

  static async get(id: string) {
    return Get(this.tableName, id)
  }
  static async all() {
    return All(this.tableName)
  }
  static async where(query: { [key: string]: string }) {
    return Where(this.tableName, query);
  }

  static async create(params: _book) {
    return Create<_book>(this.tableName, params)
  }
  static async update(id: number, params: _book) {
    return Update<_book>(this.tableName, id, params)
  }
  static async destroy(id: number) {
    return Update<_book>(this.tableName, id)
  }

}

export default Book;
