import express from 'express';
import { Request, Response, NextFunction } from 'express';

const app = express()

app.use(express.json());

app.use('/users', (req, res) => {
  res.status(200).json({message: 'ta dando!'})
})
export default app;

