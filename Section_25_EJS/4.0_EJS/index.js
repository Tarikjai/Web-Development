require('dotenv').config()
const express = require('express')
const path = require('path')
const PORT = process.env.PORT
const app = express()
 
const dayNumber = new Date().getDay();
    let day, advice;
    if (dayNumber === 0 ||  dayNumber == 6   ){
        day =  "WeekEnd";
        advice =  "have fun"
    }else if (dayNumber >= 1 && dayNumber <= 5 ){
        day = "Weekday";
        advice = "Stay productive!";
    }
 

app.get('/', (req, res) => {
    
  res.render(path.join(__dirname,'views','index.ejs'),
  {
    day: day,
    advice : advice
  }
 )
 
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
