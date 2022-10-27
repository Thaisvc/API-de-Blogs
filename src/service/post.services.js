const { Category, BlogPost, User } = require('../models');

const searchAllPost = async () => {
    const allPost = await BlogPost.findAll(
        {
            include: [
                { model: User, as: 'user', attributes: { exclude: ['password'] } }, // User É MINHA MODEL DEFINIDA EM MODEL sequelize.define('User',...) as: user  É O ALIAS/APELIDO QUE DEFINIR  NA MODEL BlogPost EM SUA ASSOCIAÇAO COM A TABELA/MODEL User
                { model: Category, as: 'categories', through: { attributes: [] } }, // through É USADO EM TABELAS DE ASSOCIAÇAO
            ],
        },
    );
    return allPost;
};

module.exports = {
    searchAllPost,
};