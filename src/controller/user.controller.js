const UserService = require('../service/user.services');

const userValidate = require('../validations/user.schema');
const { mapError } = require('../helpers/mapError');

const createUser = async (req, res) => {
    const { error } = userValidate.validateUser(req.body); 
    if (error) res.status(400).json({ message: error.details[0].message });

    const { type, message } = await UserService.createNewUser(req.body);

    if (type) return res.status(mapError(type)).json({ message }); 

    res.status(201).json({ token: message });
};

const searchAllUser = async (_req, res) => {
    const searchUser = await UserService.getAllUser();
    res.status(200).json(searchUser);
};

module.exports = { createUser, searchAllUser };