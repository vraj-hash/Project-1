'use strict';
const {Op}=require('sequelize');
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
   await queryInterface.bulkInsert('Airplanes',[{
    modelNumber : "boing123",
    capacity:952,
    createdAt:new Date(),
      updatedAt:new Date()
   },
    {
      modelNumber : "alpha1",
      capacity:35,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */
    await queryInterface.bulkDelete('Airplanes', null, {[Op.or]:[{modelNumber : "boing123"},{modelNumber : "alpha1"}]});
  }
};
