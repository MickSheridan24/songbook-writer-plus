const QueryFile = require('pg-promise').QueryFile
const path = "../sql/";

const config = { minify: true };

module.exports = {
    MigrateAllUnmigrated: new QueryFile(path + "/MigrateAllUnmigrated.sql", config),
    IdentifyMigrationsToBeRollbacked: new QueryFile(path + "/IdentifyToBeRollbacked.sql", config)
}
