const postServices = require('../service/post.services');
const { mapError } = require('../helpers/mapError');

const getAllPost = async (req, res) => {
    const allPosts = await postServices.searchAllPost();
    res.status(200).json(allPosts);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await postServices.getPostById(id);
    if (type) res.status(mapError(type)).json({ message });
    res.status(200).json(message);
};
module.exports = {
    getAllPost,
    getById,
};