const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');
 
const validatorCreateUser = [
    check('nombre').exists().notEmpty().withMessage('Name is required'),
    check('edad').exists().notEmpty().withMessage('Age is required'),
    check('email').exists().notEmpty().withMessage('Email is required'),
    check('password').exists().notEmpty().withMessage('Password is required'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    validatorCreateUser,
};