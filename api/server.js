const express = require('express');

const router = require('./recipes/router');

const server = express();

server.use(express.json());

server.use('/api/recipes', router);

router.use('*', (req, res) => {
  res.json({ api: 'up' });
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;
