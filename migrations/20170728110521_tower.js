
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tower', table=>{
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('difficulty_rating');
    table.integer('health').notNullable();
    table.integer('min_damage').notNullable();
    table.integer('max_damage').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tower');
};
