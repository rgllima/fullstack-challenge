'use strict'

module.exports = (sequelize, DataTypes) => {
  const Professional = sequelize.define('Professional', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    professionId: {
      field: 'profession_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Profession',
        key: 'id'
      }
    },
    active: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    freezeTableName: true,
    timestamps: true
  })
  Professional.associate = function (models) {
    Professional.belongsTo(models.Profession, {
      as: 'Profession',
      foreignKey: 'profession_id'
    })
  }
  return Professional
}
