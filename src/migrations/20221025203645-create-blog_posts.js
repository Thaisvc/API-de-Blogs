'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Blog_posts', { 
      id: { type: Sequelize.INTEGER, primaryKey: true,  autoIncrement: true },
      title:  Sequelize.STRING,
      content: Sequelize.STRING,
      user_id: Sequelize.STRING,
      published: { type: Sequelize.DATE },
      updated:{ type: Sequelize.DATE },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.dropTable('Blog_posts');
     
  }
};
