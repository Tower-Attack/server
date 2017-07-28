
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', table =>{
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.integer('level_id').references('level.id').unsigned().default(1).onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player');
};
