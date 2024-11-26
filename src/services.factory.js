const { AnimeService } = require('./domain/anime/anime.service');

const servicesFactory = (settings) => {
    const anime = new AnimeService({ ...settings.anime });
    anime.model.sync({force:true})
    return {
        anime,
    }
}

module.exports = {
    servicesFactory
}