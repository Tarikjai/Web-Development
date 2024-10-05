const express = require("express")
const app = express()
const path = require("path")
const PORT = 3000
const today = new Date().getDay()

 
app.use(express.static("views"))

let day;
let mood 
 

app.get('/',(req,res)=>{
     if( today === 0 || today  === 6 ) {

         day = "weekend";
         mood = "have fun!"
        
     } else {
         day = "weekday";
         mood = "work hard!" 
     }
     res.render(path.join(__dirname,"views","index.ejs"),{day , mood})

    
})

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`)
    })
