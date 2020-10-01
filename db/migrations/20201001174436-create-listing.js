'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      street_name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip_code: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      pet_friendly: {
        type: Sequelize.BOOLEAN
      },
      pet_size: {
        type: Sequelize.STRING
      },
      contact_number: {
        type: Sequelize.STRING
      },
      rent: {
        type: Sequelize.BOOLEAN
      },
      monthly_price: {
        type: Sequelize.INTEGER
      },
      buy: {
        type: Sequelize.BOOLEAN
      },
      purchase_price: {
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.BOOLEAN
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      half_bathrooms: {
        type: Sequelize.INTEGER
      },
      full_bathrooms: {
        type: Sequelize.INTEGER
      },
      smoker: {
        type: Sequelize.BOOLEAN
      },
      type_of_house: {
        type: Sequelize.STRING
      },
      sq_foot: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      image_2: {
        type: Sequelize.STRING
      },
      nearest_elementary: {
        type: Sequelize.STRING
      },
      nearest_middle: {
        type: Sequelize.STRING
      },
      nearest_high: {
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.INTEGER
      },
      year_built: {
        type: Sequelize.INTEGER
      },
      parking: {
        type: Sequelize.BOOLEAN
      },
      heating: {
        type: Sequelize.BOOLEAN
      },
      cooling: {
        type: Sequelize.BOOLEAN
      },
      hoa: {
        type: Sequelize.BOOLEAN
      },
      garage: {
        type: Sequelize.BOOLEAN
      },
      condition: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Listings');
  }
};