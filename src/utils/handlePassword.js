const bcryptjs = require('bcryptjs');

/**
 * Contraseña sin encriptar
 * @param {*} passwordPlain 
 */

const encrypt = async (passwordPlain) => {

    const hash = await bcryptjs.hash(passwordPlain, 10);

    return hash;

}

/**
 * 
 * @param {*} passwordPlain contraseña sin encriptar
 * @param {*} hashPassword contraseña encriptada
 * @returns 
 */
const compare = async (passwordPlain, hashPassword) => {

    return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = { encrypt, compare };