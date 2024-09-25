const express = require('express')
const path = require('path')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

 


app.get("/", (req, res) => {
  res.render(path.join(__dirname,"views","index.ejs"))
});

app.post("/submit", (req, res) => {
  const fullNameLength = (req.body.fName +req.body.lName).length
 res.render(path.join(__dirname,"views","index.ejs"), 
   {
     fullNameLength : fullNameLength
   }
 )

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
