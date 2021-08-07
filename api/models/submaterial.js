'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Submaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Submaterial.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    materialId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Submaterial',
  });
  return Submaterial;
};