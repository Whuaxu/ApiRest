const express = require('express');
const router = express.Router();
const { validatorCreateProject } = require('../validators/projectsValidator');
const {
  getProjectById,
  getProjects,
  updateProject,
  createProject,
  deleteProject,
} = require("../controllers/projectsController");


//TODO http://localhost:3000/api/projectsRoutes/ GET. POST. PUT. DELETE
router.get('/', getProjects);

router.get('/:id', getProjectById);

router.post('/', validatorCreateProject, createProject);

router.put('/:id', validatorCreateProject, updateProject);

router.delete('/:id', deleteProject);


module.exports = router;