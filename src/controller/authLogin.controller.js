const authBodyUsers = require('../validations/user.schema');
const UserService = require('../service/authLogin.service');
const { mapError } = require('../helpers/mapError');

const login = async (req, res) => {
  const { error } = authBodyUsers.validateBodyUser(req.body); // valido se ha email e password

  if (error) res.status(400).json({ message: error.details[0].message }); // se houver erro

  const { type, message } = await UserService.searchUser(req.body); // se o body estiver validado entao procuro usuario

  if (type) return res.status(mapError(type)).json({ message }); // se erro

   res.status(200).json({ token: message });
};

module.exports = { login };