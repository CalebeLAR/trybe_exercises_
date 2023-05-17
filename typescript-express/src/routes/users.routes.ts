import express from 'express'

const usersRouter = express.Router();

usersRouter.route('/users')
  .get((req, res) => res.status(200).json('readAll'))
  .post((req, res) => res.status(200).json('create'));

usersRouter.route('/users/:id')
  .get((req, res) => res.status(200).json('readById'))
  .put((req, res) => res.status(200).json('update'))
  .delete((req, res) => res.status(200).json('delete'));

export default usersRouter;