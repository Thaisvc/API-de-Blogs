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

const updateById = async (req, res) => {
    const { id } = req.params;

    const findUserId = req.user.userWithoutPassword.id;
    const validateUser = await postServices.getPostsByUserId(findUserId);
    if (!validateUser) return res.status(401).json({ message: 'Unauthorized user' });
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const result1 = await postServices.updatePost(id, title, content);
    if (!result1) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(result1);
};

module.exports = {
    getAllPost,
    getById,
    updateById,
};