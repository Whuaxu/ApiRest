const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Project = sequelize.define("proyects", {
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
    fec_ini: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'fec_ini'
    },
    fec_fin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'fec_fin'
    },
    numhours: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'numhours'
    },
    tags: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'tags'
    }
}, {
    tableName: 'projects',
    timestamps: false
});

module.exports = Project;