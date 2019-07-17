const Router = require('koa-router');
const sign_Up_get = new Router();
const sign_Up_ctrl = require('./sign_Up_ctrl.js');

sign_Up_get.post('/sign_Up', sign_Up_ctrl.insert_User);

module.exports = sign_Up_get;