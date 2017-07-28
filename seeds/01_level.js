
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE level RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('level').insert([
        {health: 100, min_damage: 3, max_damage: 10}
      ]);
    });
};
