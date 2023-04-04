const connection = require('../../DB/db.js');
const mysql2 = require('mysql2/promise');


const login = async (req,res) =>{
    const {admin_user, admin_password} = req.body;

    
    try {
        const conn = await mysql2.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'sdd_crud'
          });           
          const [rows,fields] = await conn.execute('SELECT * FROM admin WHERE admin_user = ? AND admin_password = ?', [admin_user, admin_password])
        
        if(rows.length === 0)
            return res.status(401).json({error: 'Invalid username or password'})
        
            const user = {...rows[0]}
            delete user.admin_password;
            res.status(200).json(user);

    } catch (error) {
    
          res.status(402).json(error);
          console.log(error);
       
    }
}

module.exports = {login}