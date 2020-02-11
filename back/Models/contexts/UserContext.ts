import DBContext from "./DBContext";
import User from "../User";
import { tIndex } from "../../types/modelTypes";
import bcrypt from "bcrypt";

class UserContext extends DBContext {
  _t: string;

  constructor() {
    super();
    this._t = "users"
  }


  async login(body: tIndex): Promise<User | null> {
    var foundUser = await this.where({ userName: body.userName });
    if (foundUser.passwordDigest) {
      var success = await bcrypt.compare(
        body.password,
        foundUser.passwordDigest
      );

      if (success) {
        return new User(foundUser);
      }
    }
    return null;
  }
  returnModel(fields: tIndex): User {
    return new User(fields);
  }
}

export default UserContext;
