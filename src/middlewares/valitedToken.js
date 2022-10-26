const authService = require('../service/user.services');
const { mapError } = require('../helpers/mapError');

const tokenValidate = async (req, res, next) => {
    const { authorization } = req.headers;
    const { type, message } = authService.validateToken(authorization);
    if (type) return res.status(mapError(type)).json({ message });
    req.user = message;
  
    next();
};
module.exports = { tokenValidate };