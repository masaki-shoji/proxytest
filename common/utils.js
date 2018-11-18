'use strict';

module.exports = {

  isStatusCodeSuccess: (statusCode) => {
    return statusCode === 200;
  },

  isApiSuccess: (data) => {
    try {
      const errorCode = data.result.errorCode;
      return errorCode === 'error00';
    } catch(e) {
      console.log('utils.js#isApiSuccess: parse error.');
      return false;
    }
  },

  isResultCodeSuccess: (data) => {
    try {
      const resultCode = data.result.resultCode;
      return resultCode === 'result00';
    } catch(e) {
      console.log('utils.js#isResultCodeSuccess: parse error.');
      return false;
    }
  },

  sleep: (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  pathFromProxyRes: (proxyRes) => {
    return proxyRes.req.path;
  },

  parseJson: async (data) => {
    return JSON.parse(data);
  },

  stringifyJson: async (json) => {
    return JSON.stringify(json);
  },

  resolveApi: (path, apis) => {
    for (const api of apis) {
      if (path === api.endpoint) {
        return api;
      }
    }
    return null;
  },

  readErrorResponse: async (json, errorCode) => {
    switch (errorCode) {
      case 'error01':
        return require('../response/error1.json');
      default:
        return json;
    }
  },

  readAbnormalResponse: async (json, resultCode) => {
    switch (resultCode) {
      case 'result01':
        return require('../response/abnormal.json');
      default:
        return json;
    }
  },
};
