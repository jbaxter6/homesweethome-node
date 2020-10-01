'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    street_name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.INTEGER,
    description: DataTypes.STRING,
    pet_friendly: DataTypes.BOOLEAN,
    pet_size: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    rent: DataTypes.BOOLEAN,
    monthly_price: DataTypes.INTEGER,
    buy: DataTypes.BOOLEAN,
    purchase_price: DataTypes.INTEGER,
    sold: DataTypes.BOOLEAN,
    bedrooms: DataTypes.INTEGER,
    half_bathrooms: DataTypes.INTEGER,
    full_bathrooms: DataTypes.INTEGER,
    smoker: DataTypes.BOOLEAN,
    type_of_house: DataTypes.STRING,
    sq_foot: DataTypes.INTEGER,
    image: DataTypes.STRING,
    image_2: DataTypes.STRING,
    nearest_elementary: DataTypes.STRING,
    nearest_middle: DataTypes.STRING,
    nearest_high: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    year_built: DataTypes.INTEGER,
    parking: DataTypes.BOOLEAN,
    cooling: DataTypes.BOOLEAN,
    hoa: DataTypes.BOOLEAN,
    garage: DataTypes.BOOLEAN,
    condition: DataTypes.STRING,

  }, {});
  Listing.associate = function (models) {
    // associations can be defined here
    Listing.belongsTo(models.User, { foreignKey: 'userId' });
    Listing.belongsToMany(models.User, {
      through: models.Offer,
      foreignKey: 'listingId' 
    });
  };
  return Listing;
};