const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const { validatorCreateUser } = require('../validators/usersValidator');
const {
  getUserById,
  getUsers,
  updateUser,
  createUser,
  deleteUser,
} = require("../controllers/usersController");



//TODO http://localhost:3000/api/usersRoutes/ GET. POST. PUT. DELETE

router.get('/', authMiddleware, getUsers);

router.get('/:id', getUserById);

router.post('/', validatorCreateUser, createUser);

router.put('/:id', validatorCreateUser, updateUser);

router.delete('/:id', deleteUser);

module.exports = router;