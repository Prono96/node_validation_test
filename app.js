var express = require("express");
var app = express();
const Joi = require('joi');
const { validateSchema } = require("./validator")
var bodyParser = require('body-parser');
const { object } = require("joi");

app.use(bodyParser.json({extended: false}));


// Get endpoint data
const example = {
  "message": "My Rule-Validation API",
  "status": "success",
  "data": {
    "name": "Promise Prince",
    "github": "@prono96",
    "email": "pro96.com",
    "mobile": "08069920011",
    "twitter": "@prono_96"
  }
}

// Get routers
app.get('/', (req, res) => {
  res.status(200).json(example);
})

// Post routers
app.post('/validate-rule', (req, res) => {
  const payload = req.body;
//  Validating the payload and returning error
  const { error, value } = validateSchema(req.body);
  if(error) {
    return res.status(400).send({
      message : (error.message),
      status : 'error',
      data: {
        validation: {
          error: true,
          field: payload.rule.field,
          field_value: payload.data,
          condition: payload.rule.condition,
          condition_value: payload.rule.condition_value
        }
      }
    });
  } 
  
  
  // If the payload is correct it will return this 
  res.status(200).send(
    {
      message: "field missions successfully validated.",
      status: "success",
      data: {
        validation: {
          error: false,
          field: payload.rule.field,
          field_value: payload.data.missions,
          condition: payload.rule.condition,
          condition_value: payload.rule.condition_value
        }
      }
    }

  );
  
})


// App Listening
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})