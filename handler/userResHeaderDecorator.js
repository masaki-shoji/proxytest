'use strict';

const utils = require('../common/utils.js');
const handler = require('./responseHandler.js');
const C = require('../settings');

const userResHeaderDecorator = (headers, userReq, userRes, proxyRes, proxyResData) => {
  if (!utils.isStatusCodeSuccess(userRes.statusCode)) {
    if (C.common.RETURNS_ERROR_AS_IS) {
      return headers;
    }
  }

  userRes.statusCode = handler.getStatusCodeFromSettings(userReq.url, Object.values(C.api));

  return headers;
};

module.exports = userResHeaderDecorator;
