const bindAllMethods = require('../../common/bind-all-methods');
const handleModelErrors = require('../../common/model-error-hanler');
const AppError = require('../../common/app-error');

class AnimeService {
    constructor(options) {
        const { model } = options;
        this.model = model;
        bindAllMethods(this);
    }

    async getOne({ params }) {
        try {
            const anime = await this.model.findOne({ where: { id: params.id } });
            if (!anime) {
                throw new AppError(`Anime by id ${params.id} not found`, { status: 404 });
            }
            return anime;
        } catch (e) {
            handleModelErrors(e);
        }
    }

    async getAll() {
        try {
            return await this.model.findAll();
        } catch (e) {
            handleModelErrors(e);
        }
    }

    async update({ params, body }) {
        try {
            const existing = await this.getOne({ params });
            const [updated] = await this.model.update(body, { where: { id: params.id } });
            if (!updated) {
                throw new AppError(`Anime by id ${params.id} has not been updated`, { status: 400, info: { existing, payload: body } });
            }
            return await this.getOne({ params });
        } catch (e) {
            handleModelErrors(e);
        }
    }

    async create({ body }) {
        try {
            return await this.model.create(body);
        } catch (e) {
            handleModelErrors(e);
        }
    }
}

module.exports = {
    AnimeService,
}