import UserDB from "../Models/contexts/UserContext";
import User from "../Models/User";
import { tIndex, Book } from "../types/modelTypes";
import bcrypt from "bcrypt";

class UsersController {
  db: UserDB;
  constructor(db: UserDB) {
    this.db = db;
  }
  async Update(id: number, params: tIndex) {
    console.log(id, params);
    const user = await this.db.update(id, params);
    return user.getFields();
  }
  async Get(id: string) {
    const user = await this.db.get(id);
    return user.getFields();
  }

  async Login(body: tIndex) {
    return await this.db.login(body)
  }

  async Create(params: tIndex) {
    let user = new User(params);
    return await this.db.create(user);
  }
}

export default UsersController;
