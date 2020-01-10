const QueryFile = require('pg-promise').QueryFile
const path = "../sql/";

const config = { minify: true };


function addScript(name: string) {
    return QueryFile(path + name + ".sql", config)
}
export const MigrateAllUnmigrated = addScript("MigrateAllUnmigrated");
export const IdentifyMigrationsToBeRollbacked = addScript("IdentifyMigrationsToBeRollbacked");
export const RollbackMostRecent = addScript("RollbackMostRecent");
export const CreateTabe = addScript("CreateTable")



