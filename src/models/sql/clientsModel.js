const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Client = sequelize.define("clients", {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        field: 'name'
    },
    cif: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        field: 'cif'
    },
    direccion: {
        type: DataTypes.STRING(150),
        allowNull: false,
        field: 'address'
    },
    poblacion: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'poblation'
    },
    logo: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'logo'
    }
}, {
    tableName: 'clients',
    timestamps: false
});

module.exports = Client;