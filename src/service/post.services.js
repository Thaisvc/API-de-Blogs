const { Category, BlogPost, User } = require('../models');

const searchAllPost = async () => {
    const allPost = await BlogPost.findAll(
        {
            include: [
                { model: User, as: 'user', attributes: { exclude: ['password'] } },
                { model: Category, as: 'categories', through: { attributes: [] } },
            ],
        },
    );
    return allPost;
};

module.exports = {
    searchAllPost,
};