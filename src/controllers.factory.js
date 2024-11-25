const { AnimeController } = require('./domain/anime/anime.controller');

const controllersFactory = (settings) => {
    const gateway = {
        animeController: new AnimeController({ ...settings.anime })
    }
    return {
        gateway
    }
}

module.exports = {
    controllersFactory,
}