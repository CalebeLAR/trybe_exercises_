const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'JWT_SECRET';

const topSecret = async (req, res) => {
  const { authorization: token } = req.headers;

  if(!token) {
    const err = { error: { message: "Token not found" } }
    return res.status(401).json(err)
  }

  try {
    const payload = jwt.verify(token, secret); 
    const { admin } = payload;

    if(!admin) {
      return res.status(403).json({ error: { message: "Restricted access" } })
    }

    return res.status(200).json({secretInfo: 'Peter Parker é o Homem-Aranha'});
  } catch (err) {
    return res.status(401).json({ error: { message: err.message } })
  }
  
}

module.exports = {
  topSecret,
}