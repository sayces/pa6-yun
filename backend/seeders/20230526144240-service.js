'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.bulkInsert('service', [

      {
        id: 1,
        service: "без препочтений",
        description: 'просто посмотреть )',
      }, {
        id: 2,
        service: "маникюр",
        description: 'маникюр подразумевает...',
      },


    ])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('service', null);
  }
};
