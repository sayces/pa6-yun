'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('appoint_status', [
      
      {
        id: 1,
        status: "в ожидании"
        
      },
      {
        id: 2,
        status: "завершен успешно"
      },
      {
        id: 3,
        status: "отменен"
      }
      
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('appoint_status', null);
  }
};
