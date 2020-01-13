const initOptions = {};
const pgp = require("pg-promise")(initOptions);
import { Cxn } from "../types/dbtypes"

const configuration = {
  host: "localhost",
  database: "songbook_writer_dev",
  user: "micksheridan",
  password: "123"
};

const DB = pgp(configuration);

// async function buildClient(): Promise<Cxn> {
//   const cxn = DB.connect();
//   const client = {
//     done: () => cxn.done(),
//     remains: () => cxn ? true : false,
//     any<T>: () => 

//   }
//   return client;
// }

const client = {
  do: async function (cb: (_: Cxn) => any) {
    console.log("Database Transaction");
    let cxn: Cxn = await DB.connect();
    let ret = await cb(cxn);
    if (cxn) cxn.done();
    return ret;
  }
};

export default client;
