'use strict';

module.exports = class Api {
  constructor(endpoint, statusCode, errorCode, resultCode) {
    this.endpoint = endpoint;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.resultCode = resultCode;
  }

  get endpoint() {
    return this._endpoint;
  }

  set endpoint(value) {
    this._endpoint = value;
  }

  get statusCode() {
    return this._statusCode;
  }
  
  set statusCode(value) {
    this._statusCode = value;
  }

  get errorCode() {
    return this._errorCode;
  }

  set errorCode(value) {
    this._errorCode = value;
  }

  get resultCode() {
    return this._resultCode;
  }

  set resultCode(value) {
    this._resultCode = value;
  }
}
