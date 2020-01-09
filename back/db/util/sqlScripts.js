const QueryFile = require('pg-promise').QueryFile
const path = "../sql/";

const config = { minify: true };
const exp = {}

function addScript(name) {
    exp[name] = new QueryFile(path + name + ".sql", config);
}

addScript("MigrateAllUnmigrated");
addScript("IdentifyMigrationsToBeRollbacked");
addScript("RollbackMostRecent");
addScript("CreateTable");


module.exports = exp;

