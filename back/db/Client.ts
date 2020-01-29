import { Cxn } from "../types/dbtypes";

import { CreateTable, GetResource, Seed, CreateResource as _create, UpdateResource as _update, AddColumn } from "./util/sqlScripts";
import db from "./DB";

import { columnOps as parserOps } from "./schema"
import { tIndex } from "../types/modelTypes";




async function seed() {
    await db.do(async cxn => {
        console.log("SEEDING")
        await cxn.none(Seed).catch(e => log("getResource", e))
    })
}


async function createTable(cxn: Cxn, name: string, columnCB: (_: ColumnParser) => void) {
    let cp = new ColumnParser();
    columnCB(cp);
    let columns = cp.parse();
    await cxn.any(CreateTable, [name, columns]).catch(e => log("createTable", e))
}
async function addColumn(cxn: Cxn, table: string, name: string, type: string) {
    console.log("ADD COLUMN");
    return await cxn.any(AddColumn, [table, name, type])

}

async function getResource(table: string, id: string) {
    return await db.do(async cxn => {
        console.log("GET RESOURCE")
        const r = await cxn.one(GetResource, ["*", table, `id=${id}`]).catch(e => log("getResource", e))
        console.log("CLIENT", r)
        return r;
    })
}

async function getAll(table: string) {
    return await db.do(async cxn => {
        console.log("GET RESOURCE " + table)
        const q = "SELECT * FROM $1:raw;"
        return await cxn.any(q, table).catch(e => log("getAll", e))
    })
}

async function getWhere(table: string, query: string) {
    return await db.do(async cxn => {
        console.log("GET WHERE " + query)
        return await cxn.any(GetResource, ["*", table, query]).catch(e => log("getWhere", e))
    })
}

async function CreateResource(table: string, params: tIndex) {
    console.log("DBLAYER")
    return await db.do(async cxn => {
        console.log("INSERT INTO ", table);
        const parsed = parseObjectForInsert(params);
        return await cxn.one(_create, [table, parsed.columns, parsed.values]).catch(e => log("Create Resource", e))
    })
}

async function UpdateResource(table: string, id: number, params: tIndex) {
    return await db.do(async cxn => {
        console.log("UPDATE ", table)
        const parsed = parseObjectForUpdate(params);
        return await cxn.any(_update, [table, parsed, " id = " + id]).catch(e => log("Update Resource", e))
    })
}

function parseObjectForUpdate(params: tIndex) {
    let ret = ""
    const keys = Object.keys(params)
    for (let x = 0; x < keys.length; x++) {
        if (x !== 0) ret += ","
        ret += keys[x] + " = "
        if (typeof params[keys[x]] === "string") ret += "'";
        ret += params[keys[x]]
        if (typeof params[keys[x]] === "string") ret += "'";
    }
    console.log(ret)
    return ret;
}

function parseObjectForInsert(params: tIndex) {
    const ret: { columns: string, values: string } = { columns: "", values: "" };
    const keys = Object.keys(params)
    for (let x = 0; x < keys.length; x++) {
        if (x != 0) {
            ret.columns += ", ";
            ret.values += ", "
        }
        ret.columns += keys[x];
        if (typeof params[keys[x]] === "string") ret.values += "'";
        ret.values += params[keys[x]]
        if (typeof params[keys[x]] === "string") ret.values += "'";

    }
    return ret;
}

class ColumnParser {
    _parsed: string;
    _columns: string[];
    _postConfigs: string[];


    constructor() {
        this._parsed = "";
        this._columns = [];
        this._postConfigs = [];
    }


    addColumn(type: string, name: string, options: parserOps = {}) {
        let psh = name + " " + type;
        if (options.notNull) psh += " NOT NULL"
        this._columns.push(psh)
    }

    int(name: string, options: parserOps = {}) {
        this.addColumn("int", name, options);
    }

    string(name: string, options: parserOps = {}) {
        this.addColumn("varchar", name, options);
    }

    timestamp(name: string, options: parserOps = {}) {
        this.addColumn("timestamp", name, options);
    }

    id() {
        this.addColumn("serial", "id", { notNull: true });
        this._postConfigs.push("Primary Key(id)")
    }

    parse() {
        for (let x = 0; x < this._columns.length; x++) {
            if (x != 0) this._parsed += ", ";
            this._parsed += this._columns[x];
        }
        if (this._postConfigs.length) {
            for (let x = 0; x < this._postConfigs.length; x++) {
                this._parsed += ", ";
                this._parsed += this._postConfigs[x];
            }
        }
        return this._parsed;
    }

}


function log(name: string, e: string) {
    console.error(`DATABASE ERROR in Client.ts -- ${name}: ${e}`)
}




export { ColumnParser, createTable, getAll, getWhere, getResource, parserOps, seed, CreateResource, UpdateResource, addColumn }