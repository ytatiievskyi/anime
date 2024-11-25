const {Model, DataTypes} = require('sequelize');

class Anime extends Model {
    static register(sequelize) {
        Anime.init({
                averageScore: {
                    type: DataTypes.SMALLINT,
                    primaryKey: true,
                    unique: true,
                    allowNull: false,
                },
                coverImage: {
                    type: DataTypes.STRING
                },
                id: {
                    type: DataTypes.BIGINT,
                    primaryKey: true,
                    unique: true,
                    allowNull: false,
                },
                comment: {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
                rating: {
                    type: DataTypes.FLOAT,
                    allowNull: true,
                }
            },
            {
                sequelize,
                tableName: 'anime',
                modelName: 'anime',
                timestamps: true,
            })
    }
}

module.exports = Anime
