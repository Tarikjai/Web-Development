require('dotenv').config()

const express = require('express')
const app = express()

const  PORT = process.env.PORT


app.get('/', (req, res) =>{
  res.send('<h1>Home page</h1>') 
})

app.get('/contact', (req,res)=>{
  res.send('<h1>Contact Me </h1>')
})

app.get('/about', (req, res)=>{
  res.send('<h1>About me </h1>')
})

app.listen(PORT , ()=> {
  console.log(`Connected on port ${PORT} `)
})