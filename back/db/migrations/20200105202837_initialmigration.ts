export async function up(knex: any): Promise<any> {
  return knex.schema.hasTable("songs").then((exists: boolean) => {
    if (!exists) {
      return knex.schema.createTable("songs", (tbl: any) => {
        tbl.increments();
        tbl.string("title");
        tbl.integer("user_id");
        tbl.string("artist");
        tbl.string("text");
      });
    }
  });
}

export async function down(knex: any): Promise<any> {
  return knex.schema.dropTableIfExists("songs");
}
