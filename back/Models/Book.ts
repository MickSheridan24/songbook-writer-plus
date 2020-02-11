import Base from "./BaseModel"
import { tIndex } from "../types/modelTypes"
import Song from "./Song"
import container from "../container"

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
  async getSongs() {
    const id = (<_book>this._fields).id
    if (id) {
      return await container.songs.All(id);
    }

  }
  async serialized() {
    const songs = await this.getSongs();

    return { ...this._fields, songs: songs }
  }
}

export default Book;
