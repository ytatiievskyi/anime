const { config } = require('dotenv');

config();

const settings = {
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dialect: 'postgres',
        synchronize: true,
    },
    port: process.env.APP_PORT
}

module.exports = settings
