const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');

 const addQuestion2 = async (req, res) => {
    const { question, question_order, type, toggle, tableName } = req.body;
    const query = `INSERT INTO facultyquestionpart2 (question, question_order, type,toggle) VALUES (?,?,?,?)`;
    
    try {
      const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });
      const [rows, field] = await conn.execute(query, [
        question,
        question_order,
        type,
        toggle
      ]);
      
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



 const getQuestion2 = async (req,res) =>{
    const query = "SELECT * FROM facultyquestionpart2"

    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });        const [rows, fields] = await conn.execute(query);
      
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


 const getSingleQuestion2 = async (req,res ) =>{

  const query = "SELECT * FROM facultyquestionpart2 WHERE idfacultyquestionpart2 = ?"
  const id = req.params.id
  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });      const [rows, field] = await conn.execute(query, [id])
   
    res.status(200).json(rows[0])
    conn.end(); // close the connection after the query has been executed

  } catch (error) {
    
    res.status(402).json(error);
    console.log(error);
    if (conn){
      conn.end();
    }
  }
  
}


 const updateQuestion2 = async (req,res) =>{
  const id = req.params.id;
  const q = "UPDATE facultyquestionpart2 SET `question`=?, `question_order` = ?, `type` = ?, `toggle`=? WHERE `idfacultyquestionpart2` = ?"

  const values = [req.body.question, req.body.question_order, req.body.type, req.body.toggle]

  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });  
    await conn.execute(q, [...values, id  ], (err, data) => {
      if (err) return res.status(500).json("err", err.message);
     

      res.status(200).json(data)
      conn.end(); // close the connection after the query has been executed
    });
  } catch (error) {
    
    res.status(402).json(error);
    console.log(error);
    if (conn){
      conn.end();
    }
  }
}

 const deleteQuestion2 = async (req,res) =>{
  const id = req.params.id;
  const q = "DELETE FROM facultyquestionpart2 WHERE `idfacultyquestionpart2` = ? "

  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });      const [rows, field] = await conn.execute(q, [id])
    
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

const getQuestionType2 = async (req,res ) =>{

  const query = "SELECT * FROM facultyquestionpart2 WHERE question_order = ?"
  const id = req.params.id
  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });      const [rows, field] = await conn.execute(query, [id])
    res.status(200).json(rows[0])
    conn.end()
  } catch (error) {
    
    res.status(402).json(error);
    console.log(error);
    
  }
  
}

module.exports = {addQuestion2, getQuestion2, getSingleQuestion2 , updateQuestion2 ,deleteQuestion2,getQuestionType2}