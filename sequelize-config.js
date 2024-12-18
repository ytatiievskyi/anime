require('dotenv').config();

module.exports = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'anime',
    username: process.env.DB_USERNAME || 'anime',
    password: process.env.DB_PASSWORD || 'anime',
    dialect: 'postgres',
    logging: true,
    synchronize: true,
}