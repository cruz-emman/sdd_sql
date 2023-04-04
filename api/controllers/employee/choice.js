const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');

 const addChoice = async (req,res) =>{
  const {question_id, question_choices, toggle, part, question_name} = req.body
  const q = "INSERT INTO employeeschoices (`question_id`, `question_choices`, `toggle`, `part`, `question_name`) VALUES (?,?,?,?,?)"
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
    if (conn){
      conn.end();
    }

  }
}

 const getChoices = async (req,res) =>{
    const id = req.params.id;
    const part = req.query.part;
    
    const q = "SELECT * FROM employeeschoices WHERE question_id = ? && part = ?";
    
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
      if (conn){
        conn.end();
      }
    }
    
}

const getAllChoices = async (req,res) =>{
  const q = "SELECT * FROM employeeschoices"
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
    if (conn){
      conn.end();
    }
  }

}


 const deleteChoices = async (req,res) =>{
    const id = req.params.id;
    const q = "DELETE FROM employeeschoices WHERE `idemployeeschoices` = ?  " 
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
      if (conn){
        conn.end();
      }
    }
  }

  const getChoicesForUI = async(req,res) =>{
    const name = req.query.name;
    const part = req.query.part;
    

    const q = "SELECT * FROM employeeschoices WHERE `question_name` = ? AND `part` = ?";
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });        const [rows, fields] = await conn.execute(q, [name,part]);
      

      res.status(200).json(rows);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      
      res.status(402).json(error);
      console.log(error); 
      if (conn){
        conn.end();
      } 
    }
  }

  
  
  module.exports = {deleteChoices, getChoices, addChoice, getAllChoices, getChoicesForUI}


