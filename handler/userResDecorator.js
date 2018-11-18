'use strict';

const C = require('../settings');

const utils = require('../common/utils.js');
const handler = require('./responseHandler.js');

const userResDecorator = (proxyRes, proxyResData) => {
  return utils.sleep(C.common.NETWORK_DELAY).then(async () => {
    let result = proxyResData;

    try {
      const path = utils.pathFromProxyRes(proxyRes);
      const api = utils.resolveApi(path, Object.values(C.api));

      result = await utils.stringifyJson(require('../response/dummy.json'));

      const data = await utils.parseJson(result.toString('utf8'));

      //checks errorCode
      if (!utils.isApiSuccess(data)) {
        console.log('api error');
        if (C.common.RETURNS_ERROR_AS_IS) {
          console.log('returns any errors as they are.');
          return result;
        }
      }

      //checks resultCode
      if (!utils.isResultCodeSuccess(data)) {
        if (C.common.RETURNS_ERROR_AS_IS) {
          console.log('returns any errors as they are.');
          return result;
        }
      }

      //modifies the response according to the settings.
      result = handler.modifyResponse(data, api);
      console.log(`proxied response = ${result}`);

      return result;
    } catch(e) {
      console.log(e.toString());
      return result;
    }
  })
};

module.exports = userResDecorator;
