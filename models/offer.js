'use strict';
module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    offer_price: DataTypes.INTEGER,
    money_down: DataTypes.INTEGER,
    loan_app: DataTypes.BOOLEAN,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_num: DataTypes.STRING
  }, {});
  Offer.associate = function (models) {
    // associations can be defined here
    Offer.belongsTo(models.User, { foreignKey: 'userId' });
    Offer.belongsTo(models.Listing, { foreignKey: 'listingId' });
  };
  return Offer;
};