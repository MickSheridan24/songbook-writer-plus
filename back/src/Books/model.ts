import client from "../dbBench";
import Base from "../Model/BaseModel"

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
}

export default Book;
