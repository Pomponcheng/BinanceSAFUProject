// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Get our API routes
const api = require('./server/routes/api');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
* Get port from environment and store in Express.
*/
const port = process.env.PORT || '3000';
app.set('port', port);

/**
* Create HTTP server.
*/
const server = http.createServer(app);

// Connect to the database
var db
MongoClient.connect('mongodb://binanceAdmin:Admin98765@ds261644.mlab.com:61644/safuprojectdb', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('safuprojectdb');
    /**
    * Listen on provided port, on all network interfaces.
    */
    server.listen(port, () => console.log(`API running on localhost:${port}`));
})

/**
api for /quotes to write to the MongoDB at mlab.com
*/
app.post('/walletschema', (req, res) => {
    db.collection('walletschema').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/submit')
    })
})