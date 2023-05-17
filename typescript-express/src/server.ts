import app from './app';

const PORT = process.env.HOST_PORT;

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`));
