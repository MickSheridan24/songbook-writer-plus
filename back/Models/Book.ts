import Base from "./BaseModel"
import { Get, All, Where } from "./interfaces/accessors"

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

}

export default Book;
