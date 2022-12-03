'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Doacao);
      User.hasMany(models.PreAgendamento);
    }
  }
  User.init({
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data: DataTypes.DATE,
    celular: DataTypes.STRING,
    peso: DataTypes.FLOAT,
    sexo: DataTypes.STRING,
    senha: DataTypes.STRING,
    tsangue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};