'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Profession', [{
        description: 'Professor(a)',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Profession', {
      where: {
        description: 'Professor(a)',
      }
    }, {})
  }
}
