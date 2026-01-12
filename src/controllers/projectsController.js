const { projectsModel } = require('../models/');
const { matchedData } = require('express-validator');
const { handleHttpError } = require('../utils/handleError');

/**
     * Obtener lista de proyectos desde la base de datos
     * @param {*} req Petición HTTP
     * @param {*} res Respuesta HTTP
     */
    const getProjects = async (req, res) => {

        try {
            const data = await projectsModel.findAll({});

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_GET_PROJECTS");
        }

        
    }

    /**
     * Obtener un proyecto por su ID
     * @param {*} req Petición HTTP (req.params.id = ID del proyecto)
     * @param {*} res Respuesta HTTP
     */
    const getProjectById = async (req, res) => {
        try {
            const { id } = req.params;

            const data = await projectsModel.findOne({
                where: { id: id }
            });
        
            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_GET_PROJECT_BY_ID");
        }
    }

    /**
     * Crear un nuevo proyecto
     * @param {*} req Petición HTTP (req.body = datos del proyecto)
     * @param {*} res Respuesta HTTP
     */

    const createProject = async (req, res) => {

        try {
            const body = matchedData(req);

            const data = await projectsModel.create(body);
            

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_CREATE_PROJECT");
        }
        
    }

    /**
     * Actualizar un proyecto existente
     * @param {*} req Petición HTTP (req.params.id = ID, req.body = datos a actualizar)
     * @param {*} res Respuesta HTTP
     */

    const updateProject = async (req, res) => {

        try {
            const { id } = req.params;
            const body = matchedData(req);
            
            const data = await projectsModel.update(body, {
                where: { id: id }
            });

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_UPDATE_PROJECT");
        }
    }

    /**
     * Eliminar un proyecto por su ID
     * @param {*} req Petición HTTP (req.params.id = ID del proyecto)
     * @param {*} res Respuesta HTTP
     */
    const deleteProject = async (req, res) => {

        try {
            const { id } = req.params;

            const data = await projectsModel.destroy({
                where: { id: id }
            });

            res.send({data});
        } catch (error) {
            handleHttpError(res, "ERROR_DELETE_PROJECT");
        }
        
    }

module.exports = { getProjects, getProjectById, createProject, updateProject, deleteProject };