
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('appoint_status', [

      {
        id: 1,
        status: "окно создано"

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
      },
      {
        id: 5,
        status: "завершено успешно"
      },
      {
        id: 6,
        status: "завершено некорректно"
      }

    ])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('appoint_status', null);
  }
};
