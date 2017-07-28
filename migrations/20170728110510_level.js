
exports.up = function(knex, Promise) {
    return knex.schema.createTable('level', table => {
      table.increments('id').primary();
      table.integer('health').notNullable();
      table.integer('min_damage').notNullable();
      table.integer('max_damage').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('level');
};
