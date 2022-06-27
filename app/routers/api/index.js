const express = require('express');
const skillRouter = require('./skill');

const router = express.Router();

// Les routes pour l'API
router.all('/', (req, res) => {
  res.send('Hello World!');
});

// On préfixe les routers de l'API

router.use('/skills', skillRouter);

router.use(() => {
  throw new Error('API Route not found', { statusCode: 404 });
});

module.exports = router;
