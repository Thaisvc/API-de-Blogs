'use strict';

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Categories', { 
      id: { type: Sequelize.INTEGER, primaryKey: true,  autoIncrement: true },
      name: Sequelize.INTEGER,
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.dropTable('Categories');
     
  }
};
