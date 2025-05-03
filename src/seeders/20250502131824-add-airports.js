'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name : 'Chhatrapati Shivaji Maharaj International Airport',
        city_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Juhu Airport',
        city_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        city_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netaji Subhash Chandra Bose International Airport',
        city_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
