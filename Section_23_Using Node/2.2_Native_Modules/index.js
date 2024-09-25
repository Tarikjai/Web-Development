const fs = require('fs')
const path = require('path')
 


 fs.writeFile(path.join(__dirname,'message.txt') ,'Hello my name is Tarik and I am a web developper', err => {
    if(err){
      console.log(err)
    } else {
      console.log("message created")
    }
 })


/*
fs.readFile(path.join(__dirname,'message.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
*/