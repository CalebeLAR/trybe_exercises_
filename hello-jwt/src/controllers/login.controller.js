const createLogin = async (req, res) => {
  const user = req.body;

  const response = await loginService.createLogin(user);
  
  return res.status(200).json(response)
}

module.exports = {
  createLogin,
}