const api = require('../../services/api');

class PlaylistController {
  async create(req, res) {
    const { state } = req.body;

    try {
      const response = await api.post(
        `songrequest/${process.env.CHANNEL}/player/${state}`
      );

      return res.status(201).json({ ok: true });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = new PlaylistController();
