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

module.exports = { createToken/* , validateToken */ };