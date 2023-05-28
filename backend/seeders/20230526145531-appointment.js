'use strict';

const { create } = require('domain');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('appointment', [

      {
        id: 1,
        appointStatusId: 1,
        master: 1,
        client: 2,
        date: '2023-05-26',
        time: '18:00:00',
        createdAt: '2023-05-26 18:12:11',
        updatedAt: '2023-05-26 18:12:11',
        serviceId: 1,
      },


    ])
  },

  async down(queryInterface, Sequelize) {

    return await queryInterface.bulkDelete('appointment', null, {});

  }
};
