'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PreAgendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PreAgendamento.belongsTo(models.User);
    }
  }
  PreAgendamento.init({
    confirmacao: DataTypes.TINYINT,
    dataAgendamento: DataTypes.DATE,
    horarioAgend: DataTypes.TIME,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PreAgendamento',
  });
  return PreAgendamento;
};