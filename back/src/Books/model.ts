import client from "../dbBench";



class Book {
  title: string;
  userId: number;
  year: number;

  constructor(params: { title: string, userId: number, year: number, id: number }) {
    this.title = params.title;
    this.userId = params.userId;
    this.year = params.year;
  }


}

export default Book;
