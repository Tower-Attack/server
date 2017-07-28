const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.get('/', (req, res)=>{
  queries.getAllTowers()
    .then(towers =>{
      res.send(towers)
    })
})

module.exports = router;
