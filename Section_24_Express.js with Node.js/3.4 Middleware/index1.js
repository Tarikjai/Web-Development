import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get('/submit', (req,res)=>{
  const  data = req.body
  console.log(data)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
