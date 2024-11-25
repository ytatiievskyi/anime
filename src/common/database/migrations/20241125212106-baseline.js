'use strict';

const {DataTypes} = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('anime', {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    unique: true,
                    allowNull: false,
                },
                averageScore: {
                    type: DataTypes.SMALLINT,
                    allowNull: true,
                },
                coverImage: {
                    type: DataTypes.STRING
                },
                comment: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                rating: {
                    type: DataTypes.FLOAT,
                    allowNull: true,
                },
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
            }
        )
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};
