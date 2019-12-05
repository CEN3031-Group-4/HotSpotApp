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

    if (process.env.NODE_ENV === 'production') {
        // Exprees will serve up production assets
        app.use(express.static('client/build'));
      
        // Express serve up index.html file if it doesn't recognize route
        const path = require('path');
        app.get('*', (req, res) => {
          res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
      }

    // body parsing middleware
    app.use(bodyParser.json());

    // add a router
    app.use('/api/nuclides', nuclideRouter);

    return app
}

