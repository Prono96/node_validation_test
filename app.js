var express = require("express");
var app = express();
const Joi = require('joi');
const { validateSchema } = require("./validator")
var bodyParser = require('body-parser');
const { object } = require("joi");

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
    
  }
  const { error, value } = validateSchema(req.body);
  if(error) {
    return res.status(400).send({
      message : 'field is required',
      status : 'error',
      data : null
    });
  } 

  res.status(200).send('You are logged in');
  
})


// App Listening
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})