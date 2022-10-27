const jwt = require('jsonwebtoken');

const validateToken = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return { type: null, message: data };
  } catch (error) {
    console.error(error);
    return { type: 'INVALID_TOKEN', message: 'Expired or invalid token' };
  }
};

module.exports = { validateToken };