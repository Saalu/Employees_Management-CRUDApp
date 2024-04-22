require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRouter = require('./routes/userRouter')
const employeeRouter = require('./routes/employeeRouter')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())

app.use('/users', userRouter)
app.use('/api/employees', employeeRouter)


const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log('Server started on port: ', port);
});

// Connect to MongoDB

const URI = process.env.MONGO_URL
mongoose.connect(URI,)
  .then(() => console.log('Connected to MongoDB'))
