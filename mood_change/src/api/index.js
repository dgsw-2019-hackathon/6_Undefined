const Router = require('koa-router');
const api = new Router();
const mood_board = require('./mood_board');
const sign_Up = require('./sign_Up');
const login = require('./login');
const profile = require('./profile');
const authMiddleWare = require('./../middleWare/auth');

api.use('/mood_board', mood_board.routes());
api.use('/sign_Up', sign_Up.routes());
api.use('/login', login.routes());
api.use('/profile', authMiddleWare, profile.routes());

module.exports = api;