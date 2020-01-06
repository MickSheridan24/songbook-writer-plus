const environment = "development";
const configuration = require("../knexfile")[environment];

export default require("knex")(configuration);
