'use strict';

const h = require('../handler');

module.exports = Object.freeze({
  https: true,
  userResDecorator: h.userResDecorator,
  userResHeaderDecorator: h.userResHeaderDecorator,
  proxyReqOptDecorator: h.proxyReqOptDecorator
});
