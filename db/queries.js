const knex = require('./knex')

module.exports = {
  getAllTowers: ()=>{
    return knex('tower');
  },
  getOneTower: (id) => {
    return knex('tower').where('id', id).first();
  }
}
