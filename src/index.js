const { servicesFactory } = require('./services.factory');
const { DatabaseService } = require('./common/database/database.service');
const { controllersFactory } = require('./controllers.factory');
const { anime: animeModel } = require('./domain/models');

const appFactory = (settings) => {
    const db = new DatabaseService({ ...settings.db });

    const services = servicesFactory({
        anime: {
            model: animeModel
        }
    });

    const gateway = controllersFactory({
        anime: {
            service: services.anime,
            app: settings.app,
            routerFactory: settings.routerFactory,
        }
    })

    return {
        services,
        db,
        gateway,
    }
}

module.exports = {
    appFactory
}
