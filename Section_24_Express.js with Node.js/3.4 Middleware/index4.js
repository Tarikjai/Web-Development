require('dotenv').config()
const express = require("express");
const path = require("path");

const PORT = process.env.PORT
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,"public","index.html"))
})


app.post('/submit', (req,res)=> {
  res.send(`<h1>Your Brand name is:</h1><br><h3>${req.body.street} ${req.body.pet} 🫣 </h3> `)
  console.log(req.body)
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
;