'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      celular: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.FLOAT
      },
      sexo: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      tsangue: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};