const axios = require('axios');

const api = axios.create({
  baseURL: `https://api.streamelements.com/kappa/v2`,
  headers: {
    accept: 'application/json',
    'content-type': 'Content-Type',
    authorization: `Bearer ${process.env.JWT_TOKEN}`,
  },
});

module.exports = api;
