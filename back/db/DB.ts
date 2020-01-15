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
