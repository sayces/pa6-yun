
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('appoint_status', [

      {
        id: 1,
        status: "запись в ожидании клиента"

      },
      {
        id: 2,
        status: "клиент ожидает сеанса"
      },
      {
        id: 3,
        status: "запись отменена"
      },
      {
        id: 4,
        status: "запись перенесена"
      }

    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('appoint_status', null);
  }
};
