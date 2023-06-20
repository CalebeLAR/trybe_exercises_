const jwt = require('jsonwebtoken');
const joi = require('joi')

function validLogin({username, password}) {
  const requestSchema = joi.object({
    username: joi.string().alphanum().min(5).required(),
    password: joi.string().min(6).required()
  });
  
  return requestSchema.validate({username, password});
}

function gerPayload({username, password}) {
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    return {username, password, admin: true};
  } else {
    return {username, password, admin: false};
  }
}

function gerToken(payload) {
  const secret = process.env.JWT_SECRET || 'JWT_SECRET'

  return jwt.sign(payload, secret, {algorithm: 'HS256', expiresIn: '1h'});
}

const login = async (req, res) => {
  const { username, password } = req.body;
  const { error } = validLogin({ username, password });

  if(error) {
    return res.status(401).json({message: error.message})
  }

  const payload = gerPayload({username, password});
    
  const token = gerToken(payload);

  return res.status(200).json({token})
};

module.exports = {
  login,
}