'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'Sunny',
      lastName: 'Akarui',
      address: 'Sy Binh City',
      phoneNumber: '0123456789',
      gender: 1,
      image: 'example',
      roleId: 'R1',
      positionId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};