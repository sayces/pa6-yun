'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('gallery_posts', null);

    

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('gallery_posts', null);

  }
};
