const { clientsModel } = require('../models');
const { matchedData } = require('express-validator');
const { handleHttpError } = require('../utils/handleError');

/**
     * Obtener lista de clientes desde la base de datos
     * @param {*} req Petición HTTP
     * @param {*} res Respuesta HTTP
     */
    const getClients = async (req, res) => {

        try {
            const data = await clientsModel.findAll({});

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_GET_CLIENTS");
        }

        
    }

    /**
     * Obtener un cliente por su ID
     * @param {*} req Petición HTTP (req.params.id = ID del cliente)
     * @param {*} res Respuesta HTTP
     */

    const getClientById = async (req, res) => {

        try {
            
            const { id } = req.params;

            const data = await clientsModel.findOne({
                where: { id: id }
            });
            
            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_GET_CLIENT_BY_ID");
        }
        
    }

    /**
     * Crear un nuevo cliente
     * @param {*} req Petición HTTP (req.body = datos del cliente)
     * @param {*} res Respuesta HTTP
     */
    const createClient = async (req, res) => {

        try {
            const body = matchedData(req);

            const data = await clientsModel.create(body);
            

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_CREATE_CLIENT");
        }
        
    }

    /**
     * Actualizar un cliente existente
     * @param {*} req Petición HTTP (req.params.id = ID, req.body = datos a actualizar)
     * @param {*} res Respuesta HTTP
     */

    const updateClient = async (req, res) => {

        try {
            const { id } = req.params;
            const body = matchedData(req);
            
            const data = await clientsModel.update(body, {
                where: { id: id }
            });

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_UPDATE_CLIENT");
        }
        
    }


    /**
     * Eliminar un cliente por su ID
     * @param {*} req Petición HTTP (req.params.id = ID del cliente)
     * @param {*} res Respuesta HTTP
     */
    const deleteClient = async (req, res) => {

        try {
            const { id } = req.params;

            const data = await clientsModel.destroy({
                where: { id: id }
            });

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_DELETE_CLIENT");
        }
        
    }
        


module.exports = { getClients, getClientById, createClient, updateClient, deleteClient };