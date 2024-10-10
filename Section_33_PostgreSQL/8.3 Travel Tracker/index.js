import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "6598430",
  port: 5432,
});
db.connect();

const checkVisisted = async()=>{
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisisted()
  res.render("index.ejs", { countries: countries, total: countries.length });
});


app.post('/add', async (req,res)=>{
  const input = req.body.country

  const result = await db.query(`SELECT country_code FROM countries where country_name = $1`,[input]);
  const countryCode = result.rows[0].country_code 
 
  if (countryCode){
   // const result = await db.query(`SELECT country_name FROM countries where country_code = $1`,[countryCode]);
   // const countryName = result.rows[0].country_name
    await db.query(`INSERT INTO visited_countries (country_code) VALUES ($1)`,[countryCode])
    /*const countries = await checkVisisted()
    res.render("index.ejs", { countries: countries, total: countries.length });*/
    res.redirect("/")
  }
  
})


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});