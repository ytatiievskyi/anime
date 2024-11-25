module.exports = class AppError extends Error {
    constructor(message, options) {
        super(message)
        this.name = options.name || 'AppError';
        this.status = options.status;
        this.info = options.info;
        Error.captureStackTrace(this, AppError);
    }
}