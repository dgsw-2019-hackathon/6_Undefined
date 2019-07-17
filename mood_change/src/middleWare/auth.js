const lib = require('./../middleWare/token');


module.exports = async (ctx, next) => {
  const token = ctx.request.header['x-access-token'];

  if(!token)
  {
    ctx.status = 400;
    ctx.body = {
      status : 400,
      message : '토큰이 없어요',
    }
  }
  try{
    const decodeToken = await lib.verifyToken(token);

    // console.log(decodeToken);

    if(decodeToken.sub != 'token')
    {
      ctx.status = 403;
      ctx.body = {
        status : 403,
        message : '잘못된 토큰',
      }
    }

    ctx.decoded = decodeToken;
  } catch(err) {
    console.log("test");
    
    await next();
    return;
  }

  await next();
}
