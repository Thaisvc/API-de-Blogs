'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('Post_Categories', { });
     
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('Post_Categories');
    
  }
};
