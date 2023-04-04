const express = require('express');
const connection = require('../DB/db.js')

const router = express.Router();

router.get('/', async (req,res) =>{
   const q = "SELECT * FROM fake"

   try {
    const [rows,fields] = await connection.execute(q)
    res.status(200).json(rows)
   } catch (error) {
    console.log(error)
   }
})

module.exports = router