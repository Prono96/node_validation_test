var express = require("express");
var app = express();
const Joi = require('joi');
const { validateSchema } = require("./validator")
var bodyParser = require('body-parser')

app.use(bodyParser.json({extended: false}));



const example = {
  "message": "My Rule-Validation API",
  "status": "success",
  "data": {
    "name": "Amos Burton",
    "github": "@amosburton",
    "email": "amosburton@rocinantecrew.com",
    "mobile": "08069920011",
    "twitter": "@amosb"
  }
}

// Get routers
app.get('/', (req, res) => {
 res.status(200).json(example);
})

// Post routers
app.post('/validate-rule', (req, res) => {

  let result = {
    message : "message",
    status : "error",
    data : null
  }
  const { error, value } = validateSchema(req.body);
  const payload = req.body;
  if(error) {
    res.status(200).json(result);
  }
  
})

// App Listening
const port = 5000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})