const { User } = require('../models');
const generateToken = require('../helpers/tokenCreate');
const jwtValid = require('../helpers/auth.token');

const createNewUser = async ({ displayName, email, password, image }) => {
const checkExists = await User.findOne({ where: { email } });
if (checkExists !== null) return { type: 'ALREADY_EXISTS', message: 'User already registered' }; 
    
const addNewUser = await User.create({ displayName, email, password, image });

const token = generateToken.createToken(addNewUser.dataValues); // se tudo estiver certo gero o tolken /dataValues propriedade do obj q resultou a funçao  User.create

return { type: null, message: token };
};

const validateToken = (token) => {
    if (!token) return { type: 'INVALID_TOKEN', message: 'Token not found' };
    const result = jwtValid.validateToken(token);
    return result;
};

const getAllUser = async () => {
    const allUser = await User.findAll({ attributes: { exclude: ['password'] } });
    return allUser;
};

module.exports = {
    createNewUser,
    validateToken,
    getAllUser,
};
