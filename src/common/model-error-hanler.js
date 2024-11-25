const AppError = require('./app-error');

const handleModelErrors = (e) => {
    if (e instanceof AppError) {
        throw e;
    }
    if (Array.isArray(e.errors)) {
        const message = e.errors.map(e => e.message).join(', ');
        throw new AppError(message, { status: 400 });
    }
    throw new AppError(e.message, { status: 500 })
}

module.exports = handleModelErrors