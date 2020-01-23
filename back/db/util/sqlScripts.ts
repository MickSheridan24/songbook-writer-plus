const QueryFile = require('pg-promise').QueryFile
const path = process.cwd() + "/db/sql/";

const config = { minify: true };


function addScript(name: string) {
    return new QueryFile(path + name + ".sql", config)
}
export const MigrateAllUnmigrated = addScript("MigrateAllUnmigrated");
export const IdentifyMigrationsToBeRollbacked = addScript("IdentifyMigrationsToBeRollbacked");
export const RollbackMostRecent = addScript("RollbackMostRecent");
export const CreateTable = addScript("CreateTable")
export const GetResource = addScript("GetResource")
export const Seed = addScript("Seed")
export const CreateResource = addScript("CreateResource");
export const AddColumn = addScript("AddColumn")
export const UpdateResource = addScript("UpdateResource")


