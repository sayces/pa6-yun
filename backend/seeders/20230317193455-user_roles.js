'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_roles', [
      
      {
        id: 1,
        role: "мастер"
        
      },
      {
        id: 2,
        role: "клиент"
      }
      
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_roles', null);
  }
};
