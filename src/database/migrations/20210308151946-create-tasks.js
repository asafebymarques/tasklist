'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('tasks', { 
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        check: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        task: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        user_id:{
            type: Sequelize.INTEGER,
            references: {model: 'users', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('tasks');
  }
};
