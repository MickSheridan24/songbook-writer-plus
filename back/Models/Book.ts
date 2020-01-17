import Base from "./BaseModel"
import { tIndex } from "../types/modelTypes"





class Book extends Base {
  public tableName: string = "books"
  constructor(params: tIndex) {
    super(params)
  }
}

export default Book;
