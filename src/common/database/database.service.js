const Sequelize = require('sequelize');
const { exec } = require('child_process');
const models = require('../../domain/models');

class DatabaseService {
    constructor(options) {
        this.options = options;
        this.init();
    }

    init() {
        this.initORM();
        this.initModels();
    }

    initModels() {
        const { sequelize } = this;
        Object.keys(models).forEach((name) => {
            models[name].register(sequelize);
        })
    }

    initORM() {
        const { options } = this;
        this.sequelize = new Sequelize(options);
    }

    async start() {
        const { sequelize } = this;
        await this.startMigrations();
        await sequelize.authenticate();
        await sequelize.sync();
    }

    async stop() {
        await this.sequelize.close();
    }

    async startMigrations() {
        try {
            await new Promise((resolve, reject) => {
                const migrate = exec('npx sequelize-cli db:migrate', { env: process.env }, err => err ? reject(err) : resolve());
                migrate.stdout.pipe(process.stdout);
                migrate.stderr.pipe(process.stderr);
            })
            console.log('MIGRATIONS EXECUTED SUCCESSFULLY')
        } catch (e) {
            console.error('ERROR DURING MIGRATION:', e);
        }
    }
}

module.exports = {
    DatabaseService
}