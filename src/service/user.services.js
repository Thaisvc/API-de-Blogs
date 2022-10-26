const { User } = require('../models');
const generateToken = require('../helpers/tokenCreate');

const createNewUser = async ({ displayName, email, password, image }) => {
const checkExists = await User.findOne({ where: { email } });
if (checkExists !== null) return { type: 'ALREADY_EXISTS', message: 'User already registered' }; 
    
const addNewUser = await User.create({ displayName, email, password, image });

const token = generateToken.createToken(addNewUser.dataValues); // se tudo estiver certo gero o tolken /dataValues propriedade do obj q resultou a funçao  User.create

return { type: null, message: token };
};

module.exports = {
    createNewUser,
};
