const { usersModel } = require('../models');
const { matchedData } = require('express-validator');
const { handleHttpError } = require('../utils/handleError');

/**
     * Obtener lista de clientes desde la base de datos
     * @param {*} req Petición HTTP
     * @param {*} res Respuesta HTTP
     */
    const getUsers = async (req, res) => {

        try {
            const user = req.user;
            const page = Math.max(parseInt(req.query.page) || 1, 1);
            const limit = Math.max(parseInt(req.query.limit) || 10, 1);
            const skip = (page - 1) * limit;

            const [data, total] = await Promise.all([
            usersModel.find({}).skip(skip).limit(limit).lean(),
            usersModel.countDocuments({})
            ]);

            res.send({ data , user});
        } catch (e) {
            handleHttpError(res, e);
        }
        
    }

    /**
     * Obtener un usuario por su ID
     * @param {*} req Petición HTTP (req.params.id = ID del usuario)
     * @param {*} res Respuesta HTTP
     */

    const getUserById = async (req, res) => {

        try {
            const { id } = req.params;
            const data = await usersModel.findById(id).lean();
            if (!data) return handleHttpError(res, "ERROR_USER_NOT_FOUND");
            res.send({ data });
        } catch (error) {
            handleHttpError(res, "ERROR_GET_USER_BY_ID");
        }
        
    }

    /**
     * Crear un nuevo usuario
     * @param {*} req Petición HTTP (req.body = datos del usuario)
     * @param {*} res Respuesta HTTP
     */
    const createUser = async (req, res) => {

        try {
            const body = matchedData(req);

            const data = await usersModel.create(body);
            

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_CREATE_USER");
        }
        
    }

    /**
     * Actualizar un usuario existente
     * @param {*} req Petición HTTP (req.params.id = ID, req.body = datos a actualizar)
     * @param {*} res Respuesta HTTP
     */

    const updateUser = async (req, res) => {

        try {
            const { id } = req.params;
            const body = matchedData(req);
            const data = await usersModel.findByIdAndUpdate(id, body, { new: true, runValidators: true }).lean();
            if (!data) return handleHttpError(res, "ERROR_USER_NOT_FOUND");
            res.send({ data });
        } catch (error) {
            handleHttpError(res, "ERROR_UPDATE_USER");
        }
        
    }


    /**
     * Eliminar un usuario por su ID
     * @param {*} req Petición HTTP (req.params.id = ID del usuario)
     * @param {*} res Respuesta HTTP
     */
    const deleteUser = async (req, res) => {

        try {
            const { id } = req.params;
            const data = await usersModel.findByIdAndDelete(id).lean();
            if (!data) return handleHttpError(res, "ERROR_USER_NOT_FOUND");
            res.status(204).send();
        } catch (error) {
            handleHttpError(res, "ERROR_DELETE_USER");
        }
        
    }
        


module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };