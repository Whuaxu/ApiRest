const express = require('express');
const router = express.Router();
const { validatorRegister, validatorLogin } = require('../validators/authValidator');
const { registerControl, loginControl } = require('../controllers/authController');

//TODO http://localhost:3000/api/auth/login
//TODO http://localhost:3000/api/auth/register

router.post('/register', validatorRegister, registerControl);

router.post('/login', validatorLogin, loginControl);

module.exports = router;