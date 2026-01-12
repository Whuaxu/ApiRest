const mongoose = require('mongoose');

const dbConnectMongo =  async () => {
    let DB_URI = process.env.MONGODB_URI;

    await mongoose.connect(DB_URI, {
    }).then(() => {
    console.log('Conexión a MongoDB exitosa');
    })
    .catch((error) => {
    console.error('Error al conectar a MongoDB:', error);
    });

};

module.exports = dbConnectMongo;