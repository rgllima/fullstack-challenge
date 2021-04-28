"use strict"

module.exports = (sequelize, DataTypes) => {
  const Profession = sequelize.define('Profession', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    freezeTableName: true,
    timestamps: true
  })
  Profession.associate = function (models) {}
  return Profession
}
