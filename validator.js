const Joi = require('joi');

const validator = (schema) => (payload) => 
schema.validate(payload, { abortEarly: false});

// Defining the Schema 
const schema = Joi.object({
  rule: {
    field: Joi.string()
    .required()
    .messages({
      'string.base': `field should be an object.'`,
      'string.empty': `field is required.`,
      'any.required': `"a" is a required field`
    }),

    condition: Joi.string()
    .required()
    .messages({
      'string.base': `condition should be an object.'`,
      'string.empty': `condition is required.`,
      'string.min': `"a" should have a minimum length of {#limit}`,
      'any.required': `"a" is a required field`
    }),
    condition_value: Joi.number()
    .required()
    .messages({
      'string.base': `condition_value should be a number.'`,
      'string.empty': `condition_value is required.'`,
      'string.min': `"a" should have a minimum length of {#limit}`,
      'any.required': `"a" is a required field`
    }),
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