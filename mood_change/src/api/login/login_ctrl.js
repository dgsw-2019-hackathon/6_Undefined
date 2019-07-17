const user_db = require('./../../../models').user;
const lib = require('./../../middleWare/token');
const models = require('./../../../models');


exports.login_process = async (ctx) => {
  try{
  const { user_id, user_password } = ctx.request.body;

  console.log(user_id, user_password);
    

  if (!user_id) {
    ctx.body = {
      status: 400,
      message: '아이디를 입력하세요.'
    }
  }

  if (!user_password) {
    ctx.body = {
      status: 400,
      message: '비밀번호를 입력하세요.'
    }
  }

  
  const member = await models.user.getMemberForLogin(user_id, user_password);
 
  if (!member) {
    ctx.status = 401;
    ctx.body = {
      status: 401,
      message: '아이디 또는 비밀번호가 일치하지 않습니다',
      data: {
        token: null,
      },
    }
  }

  if (member.length === 0) {
    ctx.status = 500;
    ctx.body = {
      status: 500,
      message: '인증에 실패하였습니다',
    };

    return;
  }
  
  const token = await lib.createToken(member.user_id);

  ctx.status = 200;
    console.log("성공"); 
    
    console.log(token);
    
    ctx.body = {
      status: 200,
      message: '로그인에 성공하였습니다',
      data: token,
   };
   } catch(err) {

    console.log(err);
    
    ctx.body = {
      status : 500,
      message : '인증 실패'
    }
  }
}