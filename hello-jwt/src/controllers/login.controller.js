const jwt = require('')

const createLogin = async (req, res) => {
  const { username, password } = req.body;

  if(!username || !password) return res.staus(400).json({message: 'senha ou usuário inválido'}) 

  // const user = await loginService.createLogin();
  const user = { name: 'pedroCadastrado', pass: 'senhaPedro'};

  const 

  const response = await loginService.postLogin();

  return res.status(200).json(response)
}

module.exports = {

}