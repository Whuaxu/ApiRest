const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
        },
        edad: {
            type: Number,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
            select: false,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('users', UserSchema);   
    