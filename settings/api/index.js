'use strict';

const Api = require('./api.js');

module.exports = Object.freeze({
  APP_RUN: new Api('/app/run.json', 404, 'error00', 'result00'),
  LOGIN: new Api('/app/login.json', 503, 'error01', 'result01'),
});
