const fs = require("fs")

fs.writeFile('text.txt', "Hello my friend" , (err)=>{
    if (err) throw err;
    console.log("The file has been  saved")
})

 
fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});