import { CreateResource, UpdateResource } from "../../db/Client";
import { iResource, tIndex } from "../../types/modelTypes";

const Create = async (tableName: string, params: tIndex): Promise<tIndex> => {
  console.log("INTERFACE");
  return await CreateResource(tableName, params);
};

const Update = async (tableName: string, id: number, params: tIndex) => {
  console.log(params);
  return await UpdateResource(tableName, id, params);
};
const Delete = <T>(table: string, id: number) => {};

export { Create, Update, Delete };
