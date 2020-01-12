import client from "../dbBench";

class User {
  id: number;
  username: string;
  passwordDigest: string;


  constructor(params: { id: number, username: string, passwordDigest: string }) {
    this.id = params.id;
    this.username = params.username;
    this.passwordDigest = params.passwordDigest
  }
};


export default User