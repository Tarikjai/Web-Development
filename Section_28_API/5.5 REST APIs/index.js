import express from "express";
import axios from "axios";
 
import 'dotenv/config'

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const yourBearerToken = process.env.yourBearerToken
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {
  // TODO 2: Use axios to POST the data from req.body to the secrets api servers.
  const { secret, score } = req.body;
  try {
    const result = await axios.post('https://secrets-api.appbrewery.com/secrets' , 
      {
        secret  ,
        score  
       }
       , config)
    console.log(secret,score)  
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error) {
    console.error(error);  // Ajout d'une gestion d'erreur
    res.status(500).send('Error while posting secret');
  }
  
  
});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 3: Use axios to PUT the data from req.body to the secrets api servers.
  const { secret, score } = req.body;
  try {
    const result = await axios.put(`https://secrets-api.appbrewery.com/secrets/${searchId}` , 
      {
        searchId ,
        secret  ,
        score  
       }
       , config)
    console.log(secret,score)  
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error) {
    console.error(error);  // Ajout d'une gestion d'erreur
    res.status(500).send('Error while posting secret');
  }


});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 4: Use axios to PATCH the data from req.body to the secrets api servers.
  const { secret, score } = req.body;
  try {
    const result = await axios.patch(`https://secrets-api.appbrewery.com/secrets/${searchId}`  , 
      {
         
        secret  ,
        score  
       }
       , config)
    
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error) {
    console.error(error);  // Ajout d'une gestion d'erreur
    res.status(500).send('Error while posting secret');
  }


});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  // TODO 5: Use axios to DELETE the item with searchId from the secrets api servers.
  const { secret, score } = req.body;
  try {
    const result = await axios.delete(`https://secrets-api.appbrewery.com/secrets/${searchId}` , config)
    
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error) {
    console.error(error);  // Ajout d'une gestion d'erreur
    res.status(500).send('Error while posting secret');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
