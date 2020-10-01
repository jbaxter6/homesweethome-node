'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.belongsToMany(models.Listing, { 
      through: models.Offer,
      foreignKey: 'userId' 
    });
    User.hasMany(models.Listing, { foreignKey: 'userId' });
  };
  return User;
};