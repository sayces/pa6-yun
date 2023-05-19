
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('user_role', [

      {
        id: 1,
        role: "мастер"

      },
      {
        id: 2,
        role: "клиент"
      },
      {
        id: 3,
        role: "админ"
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_role', null);
  }
};
