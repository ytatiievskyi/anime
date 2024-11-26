const { Controller } = require('../../common/controller');

class AnimeController extends Controller {
    constructor({ app, service, routerFactory }) {
        super();
        this.app = app;
        this.service = service;
        this.routerFactory = routerFactory;
        this.init();
    }

    init() {
        const { app } = this;
        app.use('/anime', this.createAnimesRoutes())
    }

    createAnimesRoutes() {
        const {
            routerFactory,
            service
        } = this
        const router = routerFactory();

        router.get('/', this.getAction(service.getAll));
        router.post('/', this.getAction(service.create));
        router.put('/:id', this.getAction(service.update));
        router.get('/:id', this.getAction(service.getOne));
        router.delete('/:id', this.getAction(service.delete));
        return router;
    }
}

module.exports = {
    AnimeController
}