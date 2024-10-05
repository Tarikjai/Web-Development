import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({ extended: true }))

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})

app.post('/submit',(req,res)=>{
  const  data = req.body
  res.send(`<h1>Your band name is</h1><br><h2>${data.street} ${data.pet}</h2>`)
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
