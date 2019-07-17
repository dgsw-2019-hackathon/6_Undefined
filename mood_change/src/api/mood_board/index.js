const Router = require('koa-router');
const board_get = new Router();
const mood_board_ctrl = require('./mood_board.ctrl.js');
const authMiddleWare = require('./../../middleWare/auth');

board_get.post('/board_create',authMiddleWare, mood_board_ctrl.board_create);
board_get.post('/board_delete',authMiddleWare, mood_board_ctrl.board_delete);
board_get.post('/board_update',authMiddleWare, mood_board_ctrl.board_update);
board_get.post('/board', mood_board_ctrl.board_read);
board_get.post('/board_comment',authMiddleWare, mood_board_ctrl.board_comment);
board_get.post('/board_like',authMiddleWare, mood_board_ctrl.add_like);

module.exports = board_get;