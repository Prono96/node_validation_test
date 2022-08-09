const Joi = require('joi');

const validator = (schema) => (payload) => 
schema.validate(payload, { abortEarly: false});

// Defining the Schema 
const schema = Joi.object({
  rule: {
    field: Joi.string().required().label("field is required"),
    condition: Joi.string().required().label("condition is required"),
    condition_value: Joi.number().required()
  },
  data: {
    name: Joi.string().required(),
    crew: Joi.string().required(),
    age: Joi.number().required(),
    position: Joi.string().required(),
    missions: Joi.number().required()
  }
});


exports.validateSchema = validator(schema);