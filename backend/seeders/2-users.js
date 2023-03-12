

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      
      {
        email: "domanina",
        password: "9410",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "arina",
        
      
      },
      {
        email: "makarov",
        password: "9410",
        createdAt: new Date(),
        updatedAt: new Date(),
        name: "sasha",
        
      }
      

  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null);
    
  }
};
