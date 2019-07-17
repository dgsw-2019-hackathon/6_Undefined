const user = require('./../../../models').user;
const board_db = require('./../../../models').mood_board;

exports.profile_get = async (ctx) => {
  try {
    await user.findAll({
      where: {user_id: ctx.decoded.memberId}
    })
    .then(dataAddress => {
      dataAddress.forEach(data => {
        // console.log(data.dataValues);
        ctx.body = {
          status : 200,
          message : '불러오기 성공',
          name : data.dataValues.user_name, 
          id : data.dataValues.user_id ,
          password : data.dataValues.user_password,
        }
      });
    })
  } catch(err) {
    console.log(err);
  }
}

exports.profile_update = async (ctx) => {

  const {user_name} = ctx.request.body;
  // console.log(user_name, user_id);
  
  try {
    await user.update(
      {
          user_name : user_name,
      },
      {
          where: {user_id : ctx.decoded.memberId}
      }
      );

  ctx.body = {
      status: 200,
      message: 'updateSucces'
  }

  } catch(err) {
    console.log(err);
  }
}

exports.account_update = async (ctx) => {
  const { user_password} = ctx.request.body;

  try {
    await user.update(
      {
          user_password : user_password,
      },
      {
          where: {user_id : ctx.decoded.memberId}
      }
      );

      ctx.body = {
        status: 200,
        message: 'updateSucces'
    }
  } catch(err) {
    console.log(err);
  }
}

exports.my_board_get = async (ctx) => {

  console.log("test");
  console.log(ctx.decoded);
  
  try {
      await board_db.findAll({
          where: {user_id: ctx.decoded.memberId}
      }).then(function(result) {
        ctx.status = 200;
          ctx.body = {
              status : 200,
              message : '불러오기 성공',
              result
          }
      });
  } catch(err) {
    console.log(err);
  }
}

