const postServices = require('../service/post.services');

const getAllPost = async (req, res) => {
    const allPosts = await postServices.searchAllPost();
    res.status(200).json(allPosts);
};
module.exports = {
    getAllPost,
};