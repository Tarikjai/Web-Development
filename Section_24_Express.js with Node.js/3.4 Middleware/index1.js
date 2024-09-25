import 'dotenv/config'
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import bodyParser from 'body-parser'
const PORT = process.env.PORT
const __dirname = dirname(fileURLToPath(import.meta.url));

//app.use(express.urlencoded({ extended: false }));

const app = express();

 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log("homepage")
});

app.post("/submit" ,(req,res)=>{

  //res.send([req.body.street , req.body.pet])
  console.log(req.body)
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
