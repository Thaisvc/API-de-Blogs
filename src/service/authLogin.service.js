const { User } = require('../models');
const generateToken = require('../helpers/tokenCreate');

const searchUser = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } }); // procuro pelo usuario

    if (!user) return { type: 'INVALID_FIELDS', message: 'Invalid fields' }; // se houver error
    
    const token = generateToken.createToken(user.dataValues); // se tudo estiver certo gero o tolken

    return { type: null, message: token };
  };

module.exports = {
    searchUser,
};