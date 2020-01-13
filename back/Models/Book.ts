import Base from "./BaseModel"
import { Get } from "./interfaces/accessors"

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

}

export default Book;
