require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
    const { password: _, ...userWithoutPassword } = data; // removo a senha e retorno o restante 
    const token = jwt.sign({ userWithoutPassword }, process.env.JWT_SECRET, { // crio o tolken
        expiresIn: '1d',
        algorithm: 'HS256', 
    });

    return token;
};

/* const validateToken = (token) => {
    try {
        const { data } = jwt.verify(token, process.env.JWT_SECRET);

        return data;
    } catch (error) {
        const e = new Error('Token inválido');
        e.name = 'Não válido';
        throw e;
    }
}; */

module.exports = { createToken/* , validateToken */ };