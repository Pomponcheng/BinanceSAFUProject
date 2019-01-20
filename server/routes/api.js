const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// get API listing
router.get('/', (req, res) => {
    res.send('api works');
});
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

var db;

MongoClient.connect('mongodb://binanceAdmin:Admin98765@ds261644.mlab.com:61644/safuprojectdb', { useNewUrlParser: true }, (err, database) => {
    if (err) return console.log(err)
    db = database.db('safuprojectdb');
});

// get all wallet addresses
router.get('/walletAddresses', function (req, res) {
    db.collection('walletschema').find().toArray((err, results) => { res.send(results) });
});
module.exports = router;