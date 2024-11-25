const { AnimeService } = require('./domain/anime/anime.service');

const servicesFactory = (settings) => {
    const anime = new AnimeService({ ...settings.anime });
    return {
        anime,
    }
}

module.exports = {
    servicesFactory
}