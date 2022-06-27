const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routers');

const app = express();

// Reconnaissance des requêtes JSON
app.use(bodyParser.json());
// Reconnaissance du req.body (pour les requêtes POST et PUT)
app.use(bodyParser.urlencoded({ extended: true }));

// On lève la restriction CORS pour le front
app.use(cors(process.env.CORS_DOMAINS ?? '*'));

app.use(router);

module.exports = app;
