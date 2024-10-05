//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


require('dotenv').config()
const express = require("express")
const path =require('path')
const PORT = process.env.PORT
 
const app = express()
 
app.use(express.static("public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})

app.post('/check', (req,res)=>{
    const data = req.body.password
    try {
        if (data === "ILoveProgramming")
            res.sendFile(path.join(__dirname,"public","secret.html"))
    } catch (error) {
        console.error(error)
    }
 //   
})

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
    })

