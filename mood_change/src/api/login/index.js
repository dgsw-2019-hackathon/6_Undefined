const Router = require('koa-router');
const login_get = new Router();
const login_ctrl = require('./login_ctrl.js');

login_get.post('/login_process', login_ctrl.login_process);

module.exports = login_get;