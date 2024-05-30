import express from "express";
const app = express();
const port = 3000;

 
var date = new Date("June 24, 2023 11:15:00");
var day = date.getDay();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.get("/", (req,res) => {

    let type = "a Weekday"
    let advice = " it's time to work hard"

    if (day === 0 || day ===6) {
        type = "the weekend",
        advice = " it's time to have fun"
    }
    
 res.render("index.ejs",{
    dayType: type ,
    adv: advice
});
});

app.listen(port,() =>{
    console.log("server started")
});