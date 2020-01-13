import { Cxn } from "../types/dbtypes";

import { CreateTable, GetResource, Seed } from "./util/sqlScripts";
import db from "./DB";

import { columnOps as parserOps } from "./schema"

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

async function getResource(table: string, id: string) {
    return await db.do(async cxn => {
        console.log("GET RESOURCE")
        return await cxn.one(GetResource, ["*", table, `id=${id}`]).catch(e => log("getResource", e))
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
        return await cxn.one(GetResource, ["*", table, query]).catch(e => log("getWhere", e))
    })
}

export { ColumnParser, createTable, getResource, parserOps, seed }