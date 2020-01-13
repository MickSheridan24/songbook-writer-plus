import { getResource } from "../db/Client"


class BaseResource<T> {
    static tableName: string
    fields: T
    constructor(params: T) {
        this.fields = params;
    }

    static async get(id: string) {
        console.log("GET", id)
        return await getResource(this.tableName, id)
    }


}


export default BaseResource;