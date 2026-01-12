const { check } = require('express-validator');
const validateResults = require('../utils/handleValidator');
 
const validatorCreateProject = [
    check('nombre').exists().notEmpty().withMessage('Name is required'),
    check('fec_ini').exists().notEmpty().withMessage('Start date is required'),
    check('fec_fin').exists().notEmpty().withMessage('End date is required'),
    check('numhours').exists().notEmpty().withMessage('Number of hours is required'),
    check('tags').exists().notEmpty().withMessage('Tags are required'),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

module.exports = {
    validatorCreateProject,
};