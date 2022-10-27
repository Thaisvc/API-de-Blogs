

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
        {
            postId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            categoryId: {
                primaryKey: true,
                type: DataTypes.INTEGER,
            },

        },
        {
            tableName: 'posts_categories',
            timestamps: false,
            underscored: true,
        },
    );

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {  // ✒ TABELA BlogPost SE ASSOCIA A models.Category
            as: 'categories', // ✒  ALIAS as: 'categories', SE REFERE A TABELA Category QUE ESTA SENDO ASSOCIADA
            through: PostCategory, // ✒ NOME DA TAMELA DE INTER INTERCESSÃO (ESSA MESMO )
            foreignKey: 'category_id', // ✒ foreignKey: 'category_id' SE REFERE A CHAVE ESTRANGEIRA DA TABELA Category
            otherKey: 'post_id', // otherKey: 'post_id' E A OUTRA CHAVE ESTRANGERA REFERENTE A BlogPost
        });
        
        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPosts',
            through: PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        });
    };


    return PostCategory;
};