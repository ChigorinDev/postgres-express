const Joi = require('@hapi/joi');

//register validation
const registerValidation = data => {
  const schema = {
    userName: Joi.string()
      .min(6)
      .max(30)
      .required(),
    email: Joi.string()
      .min(6)
      .max(30)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .max(30)
      .required()
  };
  return Joi.validate(data, schema);
};

//login validation
const loginValidation = data => {
  const schema = {
    email: Joi.string()
      .min(6)
      .max(30)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .max(30)
      .required()
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
