const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');

 const addQuestion4 = async (req, res) => {
    const { question, question_order, type, toggle, tableName } = req.body;
    const query = `INSERT INTO studentsquestionpart4 (question, question_order, type,toggle) VALUES (?,?,?,?)`;
    
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



 const getQuestion4 = async (req,res) =>{
    const query = "SELECT * FROM studentsquestionpart4"

    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });         const [rows, field] = await conn.execute(query, [id])
      
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


 const getSingleQuestion4 = async (req,res ) =>{

  const query = "SELECT * FROM studentsquestionpart4 WHERE idstudentsquestionpart4 = ?"
  const id = req.params.id
  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });   
    await conn.execute(query, [...values, id  ], (err, data) => {
      if (err) return res.status(500).json("err", err.message);
     

      res.status(200).json(data)
    });
  } catch (error) {
    
    res.status(402).json(error);
    console.log(error);
    if (conn){
      conn.end();
    }
  }
  
}


 const updateQuestion4 = async (req,res) =>{
  const id = req.params.id;
  const q = "UPDATE studentsquestionpart4 SET `question`=?, `question_order` = ?, `type` = ?, `toggle`=? WHERE `idstudentsquestionpart4` = ?"

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

 const deleteQuestion4 = async (req,res) =>{
  const id = req.params.id;
  const q = "DELETE FROM studentsquestionpart4 WHERE `idstudentsquestionpart4` = ? "

  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });       const [rows, field] = await conn.execute(q, [id])
    
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



const getQuestionType4 = async (req,res ) =>{

  const query = "SELECT * FROM studentsquestionpart4 WHERE question_order = ?"
  const id = req.params.id
  try {
    const conn = await mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'sdd_crud'
    });       const [rows, field] = await conn.execute(query, [id])
   
    res.status(200).json(rows[0])
    conn.end(); // close the connection after the query has been executed
  } catch (error) {
    res.status(400).json(error)
    if (conn){
      conn.end();
    }
  }
  
}


module.exports = {addQuestion4, getQuestion4, getSingleQuestion4 , updateQuestion4 ,deleteQuestion4,getQuestionType4}