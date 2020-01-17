import Base from "./BaseModel"
import { tIndex } from "../types/modelTypes"

export interface _book {
  [_: string]: number | string | undefined
  id?: number,
  year: number,
  title: string,
  userId: number
}

export function _isBook(params: tIndex): params is _book {
  return (!!params.title && !!params.year && !!params.userId)
}


class Book extends Base {
  public tableName: string = "books"
  constructor(params: tIndex) {
    super(params)
  }
  getSongs() {
    if (_isBook(this._fields)) {
      const id = (<_book>this._fields).userId
    }
  }
}

export default Book;
