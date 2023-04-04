const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');

const addResult = async (req, res) => {
    const { user_number, user_category, choice, others, question_order, part } = req.body;
  
    const query = "INSERT INTO results (`user_number`, `user_category`, `choice`, `others`, `question_order`, `part`) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [user_number, user_category, choice, others, question_order, part];

    try {
      const pool = await mysql2.createPool({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud',
        connectionLimit: 10 // or any number you prefer
      });
  
      const result = await pool.execute(query, values);
  
      res.status(200).json(result[0]);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to insert data' });
    }
  };
  

const getResults = async (req,res) =>{
    const query = "SELECT * FROM results"

    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });  
        const [rows, field] = await conn.execute(query)
        res.status(200).json(rows)
        conn.end();

    } catch (error) {
        res.status(402).json(error);
        console.log(error);
       }
}

module.exports = {addResult, getResults}