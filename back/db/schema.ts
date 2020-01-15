
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
    },
    {
        name: "chords",
        columns: <column[]>[
            column("note", "string", { notNull: true }),
            column("aspect", "string"),
        ]

    },
    {
        name: "chords_songs",
        columns: <column[]>[
            column("chordId", "int", { notNull: true }),
            column("songId", "int", { notNull: true }),
            column('line', 'int', { notNull: true }),
            column('character', 'int', { notNull: true }),

        ]
    },
    {
        name: "books",
        columns: <column[]>[
            column("title", "string", { notNull: true }),
            column('userId', "int", { notNull: true }),
            column('year', 'int'),
        ]
    },
    {
        name: "users",
        columns: <column[]>[
            column("username", "string", { notNull: true }),
            column('passwordDigest', "string", { notNull: true }),
        ]
    },
]

export { validType, schema, column, columnOps }