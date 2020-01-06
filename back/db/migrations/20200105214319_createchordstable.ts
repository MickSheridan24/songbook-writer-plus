export async function up(knex: any): Promise<any> {
  return knex.schema.hasTable("chords").then((exists: boolean) => {
    if (!exists) {
      return knex.schema.createTable("chords", (tbl: any) => {
        tbl.increments();
        tbl.string("note");
        tbl.integer("noteNum");
        tbl.string("aspect");
        tbl.integer("offset");
        tbl.integer("line");
      });
    }
  });
}

export async function down(knex: any): Promise<any> {
  return knex.schema.dropTableIfExists("chords");
}
