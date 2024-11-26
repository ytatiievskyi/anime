const express = require('express');
const { appFactory } = require('./src');
const envSettings = require('./settings');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use (cors());
const routerFactory = express.Router;
app.use(bodyParser.json({
    limit: '50mb'
}))

const settings = {
    ...envSettings,
    app,
    routerFactory
}

const { db } = appFactory(settings)

const start = () => {
    db.start();
    app.listen(settings.port, () => {
        console.log('LISTEN STARTED');
    })
}

const stop = () => {
    db.stop();
}

process
    .on('unhandledRejection', (reason, promise) => {
        console.error(reason, 'Unhandled rejection at promise', promise)
    })
    .on('uncaughtException', (error) => {
        console.error('Uncaught Exception', error)
        process.exit(1)
    })
    .on('exit', stop)

start();