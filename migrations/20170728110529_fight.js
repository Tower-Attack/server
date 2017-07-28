
exports.up = function(knex, Promise) {
  return knex.schema.createTable('fight', table => {
    table.increments('id').primary();
    table.integer('player_id').references('player.id').unsigned().onDelete('cascade').notNullable();
    table.integer('player_health').notNullable();
    table.integer('tower_id').references('tower.id').unsigned().onDelete('cascade').notNullable();
    table.integer('tower_health').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fight');
};
