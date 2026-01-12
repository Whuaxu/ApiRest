const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');
 
const validatorCreateClient = [
    check('nombre').exists().notEmpty().withMessage('Name is required'),
    check('cif').exists().notEmpty().withMessage('CIF is required'),
    check('direccion').exists().notEmpty().withMessage('Address is required'),
    check('poblacion').exists().notEmpty().withMessage('Poblation is required'),
    check('logo').exists().notEmpty().withMessage('Logo is required'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    validatorCreateClient,
};