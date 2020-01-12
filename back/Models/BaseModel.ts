import { getResource } from "../../db/util/crudMaster"


class BaseResource<T> {
    static tableName: string
    fields: T
    constructor(params: T) {
        this.fields = params;
    }

    static async get(id: number) {
        return await getResource(this.tableName, id)
    }
}


export default BaseResource;