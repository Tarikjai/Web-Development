import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get("/", (req, res) => {
  res.render("index.ejs")   
});

app.post("/submit", (req, res) => {
  var total =  req.body["fName"].length + req.body["lName"].length ;
  res.render("index.ejs",{count : total });
});
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
