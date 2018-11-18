'use strict';

module.exports = (proxyReqOpts, srcReq) => {
  console.log(`requestPath = ${proxyReqOpts.path}`);
  return proxyReqOpts;
};
