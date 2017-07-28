const knex = require('./knex')

module.exports = {
  getAllTowers: ()=>{
    return knex('tower');
  }
}
