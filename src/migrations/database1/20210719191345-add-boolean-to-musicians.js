'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addColumn("musicians","is_artist", {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    })

    await queryInterface.addColumn("musicians","is_composer", {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })

    await queryInterface.addColumn("musicians", "is_songwriter", {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })

    await queryInterface.addColumn("musicians","is_arranger", {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("musicians","is_arranger")
    await queryInterface.removeColumn("musicians","is_songwriter")
    await queryInterface.removeColumn("musicians","is_composer")
    await queryInterface.removeColumn("musicians","is_artist")
  }
};
