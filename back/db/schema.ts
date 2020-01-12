
type columnOps = {
    notNull?: boolean;
}
type validType = "int" | "string" | "timestamp" | "boolean"
type column = { name: string, type: validType, options?: columnOps }
const column = (name: string, type: validType, options?: columnOps): column => {
    return { name, type, options }
}



const schema = [
    {
        name: "songs",
        columns: <column[]>[
            column("title", "string", { notNull: true }),
            column('userId', "int", { notNull: true }),
            column('text', "string", { notNull: true }),
            column('artist', 'string', { notNull: true })
        ]
    }

]
export { validType, schema, column, columnOps }