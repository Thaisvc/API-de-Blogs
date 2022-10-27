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

const getPostById = async (idPost) => {
    const byIdPost = await BlogPost.findByPk(idPost, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
    if (!byIdPost) return { type: 'NOT_FOUND', message: 'Post does not exist' };
    return { type: null, message: byIdPost };
};

/* const updateByIdPost = async (id, { title, content }) => {
    console.log(title, content);

    const findId = await BlogPost.findByPk(id, { where: id === 'id' }); // VERIFICO SE EXIXTE O POSTE
    if (!findId) return { type: 'NOT_FOUND', message: ' not exist' };

    const [update] = await BlogPost.update( // SE EXISTE ATUALIZO
        { title, content },
        { where: { id } },
      );

     const findIdNew = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    if (!update) return { type: 'INVALID_FIELDS', message: 'not exist' };
    return { type: null, message: findIdNew };
};

const findAllBlogPosts = async (id) => {
    const allBlogPosts = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });
  return allBlogPosts;
  }; */

  const getPostsByUserId = async (id) => {
    const result = await BlogPost
        .findOne({ where: { userId: id } });
    return result;
};

const updatePost = async (id, title, content) => {
    await BlogPost.update({ title, content }, { where: { id } });
    const findUpdate = await BlogPost.findByPk(id, {
            include: [
                { model: User, as: 'user', attributes: { exclude: 'password ' } },
                { model: Category, as: 'categories', through: { attributes: [] } }, 
            ],
        });
    return findUpdate;
};

module.exports = {
    getPostsByUserId,
    searchAllPost,
    getPostById,
    updatePost,
};