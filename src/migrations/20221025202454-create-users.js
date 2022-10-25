'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Users', {
      id:{ type: Sequelize.INTEGER, primaryKey: true,  autoIncrement: true },
      display_name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.INTEGER,
      image: Sequelize.STRING,
    });

  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.dropTable('Users');
     
  }
};
