const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');
 
const validatorRegister = [
    check('nombre').exists().notEmpty().isLength({ min: 3, max: 99 }).withMessage('Name is required'),
    check('edad').exists().notEmpty().isNumeric({ min: 18, max: 120}).withMessage('Age is required'),
    check('email').exists().notEmpty().isEmail().withMessage('Email is required'),
    check('password').exists().notEmpty().isLength({ min: 10, max: 20 }).withMessage('Password is required'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

const validatorLogin = [

    check('email').exists().notEmpty().isEmail().withMessage('Email is required'),
    check('password').exists().notEmpty().isLength({ min: 10, max: 20 }).withMessage('Password is required'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    validatorRegister,
    validatorLogin
};