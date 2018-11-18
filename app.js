const C = require('./settings');
const options = require('./options');

const proxy = require('express-http-proxy')(C.target.HOST, options);
const app = require('express')();

app.use(C.common.BASE_PATH, proxy)
   .listen(C.common.PORT);
