
exports.seed = function(knex, Promise) {
return knex.raw('TRUNCATE tower RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('tower').insert([
        {name: 'Baby Tower', difficulty_rating: 1, health: 100, min_damage: 5, max_damage: 9},
        {name: 'Pointy End Goes That Way', difficulty_rating: 2, health: 200, min_damage: 7, max_damage: 15}
      ]);
    });
};
