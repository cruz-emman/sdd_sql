const express = require('express');
const cors = require('cors');


const studentQuestion = require('./routes/students/part_1_question.js');
const employeeQuestion = require('./routes/employee/part_1_question.js');
const facultyQuestion = require('./routes/faculty/part_1_question.js');
const result = require('./routes/results/results.js')

const fakeData = require('./routes/fake.js');


const authRoutes = require('./routes/users/auth.js');
const userRoutes = require('./routes/users/users.js');
const adminRoutes = require('./routes/users/admin.js');

const app = express()


app.use(cors());
app.use(express.json());

app.get('/', (req,res) =>{
    res.send("Hello World")
})



//ung /employees galing sa front end, pero magging dynamic depende sa category, student, faculity
app.use('/api/students', studentQuestion)
app.use('/api/employees', employeeQuestion)
app.use('/api/faculty', facultyQuestion)

app.use('/try', fakeData)

//Users

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/results', result)


app.use('/api/admin', adminRoutes)


app.listen(4000, () =>{
    console.log(`Website is running at port http://localhost:${4000}`)
})