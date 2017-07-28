const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/', (req, res)=>{
  queries.getAllTowers()
    .then(towers =>{
      res.send(towers)
    })
})

router.get('/:id', (req, res, next)=>{
  queries.getOneTower(req.params.id)
    .then(tower=>{
      if(tower){
        console.log(tower)
        res.send(tower)
      }
      else{
        res.status(400)
        next(new Error('Does not exist.'))
      }
    })
})

module.exports = router;
