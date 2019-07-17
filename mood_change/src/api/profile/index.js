const Router = require('koa-router');
const profileGet = new Router();
const profile_ctrl = require('./profile_ctrl.js');

profileGet.get('/profile', profile_ctrl.profile_get);
profileGet.post('/profile_update', profile_ctrl.profile_update);
profileGet.post('/account_update', profile_ctrl.account_update);
profileGet.get('/my_board', profile_ctrl.my_board_get);

module.exports = profileGet;