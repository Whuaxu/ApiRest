import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json';
const endpointsFiles = ['../routes/usersRoutes', '../routes/clientsRoutes.js', '../routes/projectsRoutes.js'];

const doc = {
    info: {
        title: 'Tarea de API REST',
        description: 'Documentacion de una API RESTful que utiliza Express.js, MongoDB, MySQL, y Autenticación JWT',
    },
    host: 'localhost:3000',
    schemes: ['http']

}

swaggerAutogen()(outputFile, endpointsFiles, doc);