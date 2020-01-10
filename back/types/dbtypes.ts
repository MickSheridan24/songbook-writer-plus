import { Resource } from "./modelTypes"

type Cxn = {
    done(): void,
    any(_: string, __?: string | string[]): Promise<Resource[]>,
    any<Resource>(_: string, __?: string | string[]): Promise<Resource[]>,
    one<Resource>(_: string, __?: string | string[]): Promise<Resource>
}

type StubFac = (_: string) => string

type MigrationLog = {
    name: string,
    status: boolean,
    migrationDate: string
}

type Migration = {
    up(_: Cxn): Promise<void>,
    down(_: Cxn): Promise<void>
}

export { Cxn, StubFac, Migration, MigrationLog }