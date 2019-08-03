const environment = "development";
const configuration = require("../knexfile")[environment];
module.exports = require("knex")(configuration);
