const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET || 'JWT_SECRET'

const userMe = async (req, res) => {
  const { authorization: token } = req.headers;

  if(!token) {
    const err = { error: { message: "Token not found" } }
    return res.status(401).json(err)
  }

  try {
    const payload = jwt.verify(token, secret); 
    const { username, admin } = payload;
    return res.status(200).json({ username, admin })
  } catch (err) {
    return res.status(401).json({ error: { message: err.name } })
  }

}

module.exports = {
  userMe,
}