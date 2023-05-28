'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('user', [

      {
        id: 1,
        email: 1111,
        password: '',
        name: '',
        userRoleId: 1,
      },
      {
        id: 2,
        email: 2222,
        password: '',
        name: '',
        userRoleId: 2,
      },


    ])
  },

  async down(queryInterface, Sequelize) {

    return await queryInterface.bulkDelete('user', null, {});

  }
};
