import express from "express";
import bodyParser from "body-parser";
import pg from 'pg'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let result
let total 
const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: '6598430',
  port: 5432,
})

db.connect()

db.query("select * from visited_countries",(err,res)=>{
  if (err) {
    console.error("Error executing query ", err.stack)
  } else {
    result = res.rows
  }
  db.end()
  console.log(result.map(obj =>   obj.country_code) )
})

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = result.map(obj =>   obj.country_code)
  const total = countries.length
  res.render('index.ejs', { countries ,total })
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
