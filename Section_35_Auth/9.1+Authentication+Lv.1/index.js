import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "6598430",
  port: 5432,
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
  try {
    const foundEmail  = await  db.query("select email from users  where email =$1 ", [email]);
     
    if (foundEmail.rows.length > 0 ){
      return res.send({"message":" This email already exists"})
    } 
      await db.query("INSERT INTO users (email, password) VALUES ($1 ,$2 )", [email,password]);
      res.render("secrets.ejs");
    } catch (err) {
      console.log(err);
    }
});


app.post("/login", async (req, res) => {
  const email = req.body.username
  const password = req.body.password
  try {

    const result  = await  db.query("select password from users  where email =$1 ", [email]);

    if (result.rows[0].password  ===password) {
      console.log(password,  result.rows[0].password)
      return res.status(200).render("secrets.ejs");
      
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
