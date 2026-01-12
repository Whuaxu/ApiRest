const { matchedData } = require('express-validator');
const { usersModel } = require('../models');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const { handleHttpError } = require('../utils/handleError');
/**
 * Controller para registrar usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerControl = async (req, res) => {

    try {
        req = matchedData(req);
        const passwordHash = await encrypt(req.password);
        const body = { ...req, password: passwordHash };
        const dataUser = await usersModel.create(body);
        dataUser.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        };

        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_REGISTER_USER");
    }

};

/**
 * Controller para login de usuario
 */
const loginControl = async (req, res) => {

    try {
        req = matchedData(req);

        const user = await usersModel.findOne({ email: req.email }).select('password nombre email edad');
        
        if (!user) {
            handleHttpError(res, "USER_NOT_FOUND", 404);
            return;
        }

        const hashPassword = user.password;

        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError(res, "PASSWORD_INVALID", 401);
            return;
        }

        user.set('password', undefined, { strict: false });

        const data = {
            token: await tokenSign(user),
            user
        };
        
        res.send({data});
    } catch (e) {
        handleHttpError(res, "ERROR_LOGIN_USER");
    }
}

module.exports = { registerControl, loginControl} ;