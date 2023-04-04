const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');


const addUser = async (req,res) =>{
    const {user_number, user_category, user_password} = req.body;
    const query = `INSERT INTO users (user_number, user_category, user_password) VALUES (?,?,?)`

    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });              const [rows,field] =await conn.execute(query, [
            user_number, user_category, user_password
        ]);
        res.status(200).json("User Successfully Created!")
    } catch (error) {
          console.log(error)
          console.error(error.message);
          res.status(500).json({ error: error.message });
        
      }
}

const getAllUsers = async (req,res) =>{
    const query = "SELECT * FROM users"

    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });      
        
          const [rows, field] = await conn.execute(query)
        res.status(200).json(rows)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: error.message })
      
    }
}


const getSingleUser = async (req,res) =>{

    const query = "SELECT * FROM users WHERE user_id = ?"
    const id = req.params.id
    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });              const [rows, field] = await conn.execute(query, [id])
        res.status(200).json(rows)
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: error.message })
      
    }
}

const updateUser = async (req,res) =>{
    const {user_number, user_category, user_password} = req.body;

    const id = req.params.id
    const q = "UPDATE users SET user_number = ?, user_category = ?, user_password = ? WHERE user_id = ?"

    const values = [user_number, user_category, user_password]

    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });      
        await conn.execute(q, [...values, id  ], (err, data) => {
          if (err) return res.status(500).json("err", err.message);
        });
        res.status(200).json("Updated Successfully")

    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: err.message })
      
    }
}

const deleteUser = async (req,res) =>{

    const id = req.params.id;
    const q = "DELETE FROM users WHERE `user_id` = ? "

    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });              const [rows, field] = await conn.execute(q, [id])
        res.status(200).json("Deleted Successfully",)

    } catch (error) {
        console.error(error.message)
        res.status(500).json({ error: error.message })
      
    }
}

module.exports = {addUser, getAllUsers, getSingleUser, deleteUser, updateUser}