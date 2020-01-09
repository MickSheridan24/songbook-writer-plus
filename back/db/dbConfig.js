const initOptions = {};
const pgp = require("pg-promise")(initOptions);

const configuration = {
  host: "localhost",
  database: "songbook_writer_dev",
  user: "micksheridan",
  password: "123"
};

const DB = pgp(configuration);

const client = {
  connect: async function () {
    const cxn = await DB.connect();
    return cxn;
  },
  close: async function (cxn) {
    if (cxn) {
      cxn.done();
    }
  },
  do: async function (cb) {
    // console.log("Database Transaction");

    let cxn = await DB.connect();
    let ret = await cb(cxn);
    if (cxn) cxn.done();
    return ret;
  }
};

module.exports = client;
