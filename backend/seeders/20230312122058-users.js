

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      
      {
        email: "domanina",
        password: "9410",
        name: "arina",
        userRoleId: 1
      
      },
      {
        email: "makarov",
        password: "9410",
        name: "sasha",
        userRoleId: 1
      }
      

  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null);
    
  }
};
