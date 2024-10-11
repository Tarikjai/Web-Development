import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "6598430",
  port: 5432,
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM items",);
   // console.log(result.rows)
    items = result.rows
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
      console.log(err);
  }
  
});

app.post("/add", async (req, res) => {
  const item = await db.query("INSERT INTO items (title) values ($1)",[req.body.newItem]);
   
  items.push({ title: item });
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  await db.query("UPDATE items SET title = $1  WHERE  id =  ($2)",[req.body.updatedItemTitle, req.body.updatedItemId ]);

  res.redirect("/");
});
app.post("/delete", async (req, res) => { 
  await db.query("DELETE FROM  items  title  WHERE  id =  ($1)",[req.body.deleteItemId ]);
 
  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
