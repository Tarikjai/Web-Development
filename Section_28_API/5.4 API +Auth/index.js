import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Tarik";
const yourPassword = "123456";
const yourAPIKey = "b86f595d-3e5d-472f-8426-4f210181df17";
const yourBearerToken = "65b1573a-d6a2-461c-8cfa-60c7f444b60c";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  let response;
  let data
  response = await axios.get(`${API_URL}random`)
  data = JSON.stringify(response.data)
  res.render('index.ejs/', {content :  data})
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  let response;
  let data
  response = await axios.get(`${API_URL}all?page=2`, {
  auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    data = JSON.stringify(response.data)
    console.log(response)
    res.render('index.ejs/', {content :  data})
});




app.get("/apiKey", async(req, res) => {

  let response;
  let data
  response = await axios.get(`${API_URL}filter?`, {
  params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    data = JSON.stringify(response.data)
    console.log(response)
    res.render('index.ejs/', {content :  data})
});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  let response;
  let data
  response = await axios.get(`${API_URL}secrets/42`, {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}`,
      
     },
    });
    data = JSON.stringify(response.data)
    console.log(response)
    res.render('index.ejs/', {content :  data})
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
