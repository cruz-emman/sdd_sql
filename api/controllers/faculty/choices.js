const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');


 const addChoice = async (req,res) =>{
  const {question_id, question_choices, toggle, part, question_name} = req.body
  const q = "INSERT INTO facultychoices (`question_id`, `question_choices`, `toggle`, `part`, `question_name`) VALUES (?,?,?,?,?)"
  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });      const [rows, fields] = await conn.execute(q,[
      question_id, question_choices, toggle, part,question_name
  ] )
  

      res.status(200).json(rows)
      conn.end(); // close the connection after the query has been executed

  } catch (error) {
    
    res.status(402).json(error);
    console.log(error);


  }
}

 const getChoices = async (req,res) =>{
    const id = req.params.id;
    const part = req.query.part;
    
    const q = "SELECT * FROM facultychoices WHERE question_id = ? && part = ?";
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });        const [rows, fields] = await conn.execute(q, [id,part]);
      

      res.status(200).json(rows);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      
      res.status(402).json(error);
      console.log(error);
     
    }
    
}

const getAllChoices = async (req,res) =>{
  const q = "SELECT * FROM facultychoices"
  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });      const [rows, fields] = await conn.execute(q);
    

    res.status(200).json(rows);
    conn.end(); // close the connection after the query has been executed
  } catch (error) {
    
    res.status(402).json(error);
    console.log(error);

  }

}


 const deleteChoices = async (req,res) =>{
    const id = req.params.id;
    const q = "DELETE FROM facultychoices WHERE `idfacultychoices` = ?  " 
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });        const [rows, field] = await conn.execute(q, [id])
      

      res.status(200).json(rows)
      conn.end(); // close the connection after the query has been executed
      
  
    } catch (error) {
      
      res.status(402).json(error);
      console.log(error);
     
    }
  }

  const getChoicesForUI = async(req,res) =>{
    const name = req.query.name;
    const part = req.query.part;
    

    const q = "SELECT * FROM facultychoices WHERE `question_name` = ? AND `part` = ?";
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });      
      const [rows, fields] = await conn.execute(q, [name,part]);

      res.status(200).json(rows);
      conn.end(); // close the connection after the query has been executed

    } catch (error) {
      
      res.status(402).json(error);
      console.log(error);    

    }
  }

  
  
  module.exports = {deleteChoices, getChoices, addChoice, getAllChoices, getChoicesForUI}


