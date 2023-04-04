const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');


const login = async (req,res) =>{
    const {user_number, user_password, user_category} = req.body;
    if(!user_number || !user_password || !user_category) return res.status(400).json({error: "Please Enter User Number and Password"});

    
    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });           const [rows,fields] = await conn.execute('SELECT * FROM users WHERE user_number = ? AND user_password = ? AND user_category = ?', [user_number, user_password, user_category])
        
        if(rows.length === 0)
            return res.status(401).json({error: 'Invalid username or password'})
        
            const user = {...rows[0]}
            delete user.user_password;
            res.status(200).json(user);

    } catch (error) {
    
          res.status(402).json(error);
          console.log(error);
          if (conn){
            conn.end();
          }   
    }
}

module.exports = {login}