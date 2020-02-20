import DBContext from "./DBContext";
import User from "../User";
import { tIndex } from "../../types/modelTypes";
import bcrypt from "bcrypt";
import { Create } from "../interfaces/mutators";
import { validateSongParams } from "../validators/SongValidator";
import e from "express";

class UserContext extends DBContext {
  _t: string;

  constructor() {
    super();
    this._t = "users";
  }

  async login(body: tIndex): Promise<User | null> {
    var foundUser = await this.findUser(<string>body.username).then(u => u ? u.getFields() : null)
    if (foundUser) {
      var success = await bcrypt.compare(
        body.password,
        <string>foundUser.passworddigest
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

  async findUser(name: string): Promise<User | null> {
    return await this.where({ username: name }).then(u => {
      return u.length ? u[0] : null
    })
  }


  async create(params: tIndex) {
    return await this.validateUserParams(params, async (success: boolean, error: string[]) => {
      return success ? await this.createValid(params) : error
    });
  }

  async createValid(params: tIndex) {
    let passwordDigest = await bcrypt.hash(params.password, 10)
    if (passwordDigest) {
      const fields = await Create("users", {
        username: params.username,
        passworddigest: passwordDigest
      });
      return this.returnModel(fields);
    } else return ["Error creating user"]
  }

  async validateUserParams(params: tIndex, cb: (_s: boolean, _e: string[]) => Promise<User | string[]>) {
    let message = []
    if (await this.findUser(<string>params.username)) {
      message.push("Username Exists")
    } else if (params.username && params.username.toString().length <= 5) {
      message.push("Username Too Short")
    }
    if (!this.passwordIsValid(<string>params.password)) {
      message.push("Password is not valid")
    }
    if (message.length > 0) {
      return await cb(false, message)
    } else {
      return await cb(true, message)
    }

  }

  passwordIsValid(password: string) {
    return password.length > 8
  }
}




export default UserContext;
