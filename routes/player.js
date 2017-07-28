const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/player/:id', (req, res, next)=>{
  queries.getOnePlayer(req.params.id)
    .then(player=>{
      if(player){
        res.send(player)
      }
      else{
        res.status(400)
        next(new Error('Doest not exist.'))
      }
    })
})

module.exports = router;
