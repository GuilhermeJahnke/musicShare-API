const { Router } = require('express');

const PlaylistController = require('./app/controllers/PlaylistController');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: '?XD' });
});

routes.post('/playlist/state', PlaylistController.create);

module.exports = routes;
