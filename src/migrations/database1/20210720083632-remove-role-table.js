'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("roles_musicians")
    await queryInterface.dropTable('roles')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('roles',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(20)
      },
    })

    await queryInterface.createTable("roles_musicians", {
      role_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'roles',
          key: 'id',
        },
      },
      musician_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: "cascade",
        references: {
          model: 'musicians',
          key: 'id',
        },
      },
    })
  }
};
