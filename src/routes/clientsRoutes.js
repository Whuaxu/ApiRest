const express = require('express');
const router = express.Router();
const { validatorCreateClient } = require('../validators/clientsValidator');
const customHeader = require('../middleware/customHeader');
const {
  getClientById,
  getClients,
  updateClient,
  createClient,
  deleteClient,
} = require("../controllers/clientsController");



//TODO http://localhost:3000/api/clientsRoutes/ GET. POST. PUT. DELETE

router.get('/', getClients);

router.get('/:id', getClientById);

router.post('/', validatorCreateClient, createClient);

router.put('/:id', validatorCreateClient, updateClient);

router.delete('/:id', deleteClient);

module.exports = router;