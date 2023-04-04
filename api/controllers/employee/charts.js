const mysql2 = require('mysql2/promise');


const getAgeData = async (req,res) =>{
    const age = req.query.age;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[age]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch age", error);
    }
  }
const getGender = async (req,res) =>{
    const gender = req.query.gender;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[gender]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch gender", error);
    }
  }

  const getCivil = async (req,res) =>{
    const civil = req.query.civil;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[civil]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch civil", error);
    }
  }

  const getEthnicity = async (req,res) =>{
    const ethnicity = req.query.ethnicity;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[ethnicity]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch ethnicity", error);
    }
  }

  const getNumofchildren = async (req,res) =>{
    const numofchildren = req.query.numofchildren;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[numofchildren]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch numbofchilren", error);
    }
  }

  const getAgerangeofchildren = async (req,res) =>{
    const agerangeofchildren = req.query.agerangeofchildren;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[agerangeofchildren]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch numbofchilren", error);
    }
  }

  const getHighesteduc = async (req,res) =>{
    const highesteduc = req.query.highesteduc;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[highesteduc]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch highesteduc", error);
    }
  }

  const getSpousestatus = async (req,res) =>{
    const spousestatus = req.query.spousestatus;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[spousestatus]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch spousestatus", error);
    }
  }

  const getPosition = async (req,res) =>{
    const position = req.query.position;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[position]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch position", error);
    }
  }

  const getSalary = async (req,res) =>{
    const salary = req.query.salary;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[salary]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch salary", error);
    }
  }

  const getPlace = async (req,res) =>{
    const place = req.query.place;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[place]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch place", error);
    }
  }

  const getYears = async (req,res) =>{
    const years = req.query.years;
    const q = `SELECT * from results WHERE question_order = ? AND part = "idemployeesquestionpart1"`;
    const counts = {};
    
    try {
      const conn = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'sdd_crud'
      });
      
      const [rows, fields] = await conn.execute(q ,[years]);
  
      for (const row of rows) {
        const choice = JSON.parse(row.choice)[0];
        if (counts[choice]) {
          counts[choice]++;
        } else {
          counts[choice] = 1;
        }
      }
      const resultArray = [];
      for (const [choice, count] of Object.entries(counts)) {
        resultArray.push({ choice, count });
      }
  
      res.status(200).json(resultArray);
      conn.end(); // close the connection after the query has been executed
    } catch (error) {
      res.status(404).json("Error, Can't fetch years", error);
    }
  }



 module.exports = {getAgeData, getGender, getCivil, getEthnicity, getNumofchildren, getAgerangeofchildren, getHighesteduc, getSpousestatus, getPosition, getSalary, getPlace, getYears}