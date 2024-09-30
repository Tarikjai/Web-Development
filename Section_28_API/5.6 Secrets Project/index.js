const express = require('express')
const axios = require('axios')
const path = require('path')
require('dotenv').config()

app = express()
app.use(express.static('public'))


const PORT = process.env.PORT
const yourBearerToken = process.env.yourBearerToken

const config = {
    headers: { Authorization: `Bearer ${yourBearerToken}` },
  };

// render public file
app.use('/', express.static(path.join(__dirname, 'public')))



app.use('/', async(req,res)=>{
try {
    const result = await axios.get('https://secrets-api.appbrewery.com/random')
    const secret =result.data.secret
    const username =result.data.username
  
    res.render(path.join(__dirname,'views','index.ejs'), {
    secret: secret,
    user : username
    })
} catch (error) {
    console.log(error.response.data);
    res.status(500);
}
   
})




 
app.listen(PORT, (req,res)=>{
    console.log(`server running on ${PORT}`)
})