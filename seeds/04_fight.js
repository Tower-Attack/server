
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE fight RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('fight').insert([
        {player_id: 1, player_health: 100, tower_id: 1, tower_health: 100}
      ]);
    });
};
