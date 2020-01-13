import Base from "./BaseModel"

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
