import DBContext from "./DBContext";
import User from "../User";
import { tIndex } from "../../types/modelTypes";
import bcrypt from "bcrypt";

class UserContext extends DBContext {
  static _t: string = "users";

  static async create(body: tIndex): Promise<User> {}

  static async login(body: tIndex): Promise<User | null> {
    var foundUser = await UserContext.where({ userName: body.userName });
    if (foundUser?.passwordDigest) {
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
  static returnModel(fields: tIndex): User {
    return new User(fields);
  }
}

export default UserContext;
