require('dotenv').config()
const { error } = require('console')
const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/public","index.html"))
}) 

app.post('/check', (req ,res) =>{
    var enteredPass = req.body.password
    if (enteredPass === "ILoveProgramming"){
        res.sendFile(path.join(__dirname,"/public","secret.html"))
        console.log(req.body.password)
    }else  {
        console.log("wrong password")
    }
    

} )

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})