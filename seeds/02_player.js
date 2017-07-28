const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE player RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('player').insert([
        {name: 'CJ', email: 'cj@cj.cj', password: bcrypt.hashSync('g51rocks', salt), level_id: 1}
      ]);
    });
};
