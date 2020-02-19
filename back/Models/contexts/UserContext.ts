import DBContext from "./DBContext";
import User from "../User";
import { tIndex } from "../../types/modelTypes";
import bcrypt from "bcrypt";
import { Create } from "../interfaces/mutators";

class UserContext extends DBContext {
  _t: string;

  constructor() {
    super();
    this._t = "users";
  }

  async login(body: tIndex): Promise<User | null> {
    var foundUser = await this.where({ username: body.username })
      .then(u => u[0])
      .then(u => u.getFields());
    if (foundUser) {
      var success = await bcrypt.compare(
        body.password,
        foundUser.passworddigest
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

  async create(params: tIndex): Promise<User | null> {
    let passwordDigest = await bcrypt.hash(params.password, 10)
    if (passwordDigest) {
      const fields = await Create("users", {
        username: params.username,
        passworddigest: passwordDigest
      });
      return this.returnModel(fields);
    } else return null;
  }
}

export default UserContext;
