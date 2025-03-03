const express = require('express')

const bodyParser = require("body-parser");
const cors = require("cors");


const app = express()
const apiRoute = require('./router')

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json()); // read json body

app.use(cors({
  origin:['*'],
    // origin: ["http://localhost:3000" ,"http://localhost:5173","https://test-font-end.vercel.app"],
    credentials: true, // necessary for cookies, authorization headers, etc.
  }))

  app.get('/',(req,res)=>{
    res.json({message:'Sever is running at port 3000'})
})

app.use('/api',apiRoute)

app.use('*',(req, res)=>{
    res.status(404).json({message: 'Routing not found '})  
  })

app.listen(3000, () => console.log('Server is running at port 3000'))