const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    nuclideRouter = require('../routes/nuclide.server.routes');


module.exports.init = () => {
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('connected to database'));

    // initialize app
    const app = express();

    // body parsing middleware
    app.use(bodyParser.json());

    // add a router
    app.use('/api/nuclides', nuclideRouter);

    return app
}

