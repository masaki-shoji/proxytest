'use strict';

const C = require('../settings');
const utils = require('../common/utils.js');

const DEFAULT_STATUS_CODE = 200;

module.exports = {

  getStatusCodeFromSettings: (path, apis) => {
    for (const api of apis) {
      if(api.endpoint === path) {
        return api.statusCode;
      }
    }
    return DEFAULT_STATUS_CODE;
  },

  modifyResponse: async (json, api) => {
    if (!api || !api.errorCode) {
      return json;
    }

    if (api.errorCode !== 'error00') {
      return await utils.readErrorResponse(json, api.errorCode);
    } else if (api.resultCode !== 'result00') {
      return await utils.readAbnormalResponse(json, api.resultCode);
    } else {
      return json;
    }
  }
};
