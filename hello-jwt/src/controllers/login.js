const jwt = require('jsonwebtoken');
const joi = require('joi')

function validLogin({username, password}) {
  const requestSchema = joi.object({
    username: joi.string().alphanum().min(5).required(),
    password: joi.string().min(6).required()
  });
  
  return requestSchema.validate({username, password});
}

const login = async (req, res) => {
  const { username, password } = req.body;
  const { error } = validLogin({ username, password });

  if(error) {
    return res.status(401).json({message: error.message})
  }
    

  const token = jwt.sign(
    {password, admin:false},
    process.env.JWT_SECRET || 'JWT_SECRET',
    {algorithm: 'HS256', expiresIn: '1h'},
    )

  return res.status(200).json({token})
};

module.exports = {
  login,
}