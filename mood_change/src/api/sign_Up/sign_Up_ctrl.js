const user_db = require('./../../../models').user;

exports.insert_User = async (ctx) => {
  // if(!ctx.decoded.memberId)
    const {
        user_id, user_password, user_name
    } = ctx.request.body;

    // try{
        // let newUser = null;

        // const create = (user) => {
        //         if(user) {
        //             throw new Error('username exists')
        //         } else {
        //             return user_db.create(user_id, user_password, user_name)
        //         }
        //     }
        
        //     // count the number of the user
        //     const count = (user) => {
        //         newUser = user
        //         return user_db.count({}).exec()
        //     }
        
        //     // assign admin if count is 1
        //     const assign = (count) => {
        //         if(count === 1) {
        //             return newUser.assignAdmin()
        //         } else {
        //             // if not, return a promise that returns false
        //             return Promise.resolve(false)
        //         }
        //     }
        
        //     // respond to the client
        //     const respond = (isAdmin) => {
        //         res.json({
        //             message: 'registered successfully',
        //             admin: isAdmin ? true : false
        //         })
        //     }
        
        //     // run when there is an error (username exists)
        //     const onError = (error) => {
        //         res.status(409).json({
        //             message: error.message
        //         })
        //     }
        
        //     // check username duplication
        //     user_db.findOneByUsername(user_name)
        //     .then(create)
        //     .then(count)
        //     .then(assign)
        //     .then(respond)
        //     .catch(onError)
        // } catch(err) {
        //     console.log(err);
        // }

    // let token = jwt.sign({
    //     email: "foo@example.com"   // 토큰의 내용(payload)
    //     },
    //     secretObj.secret ,    // 비밀 키
    //     {
    //     expiresIn: '5m'    // 유효 시간은 5분
    //   })
    
    //   models.user.find({
    //     where: {
    //       email: "foo@example.com"
    //     }
    //   })
    //   .then( user => {
    //     if(user.pwd === "1234"){
    //       res.cookie("user", token);
    //       res.json({
    //         token: token
    //       })
    //     }
    //   })
    console.log(user_id, user_password, user_name);
    try {
        await user_db.create({
            user_id : user_id,
            user_password : user_password,
            user_name : user_name
        });
        ctx.body = {
            status : 200,
            message : '가입 성공'
        }
    } catch(e) {
        console.log(e.original.errno);
        
        if (e.original.errno === 1062) {
            ctx.body = {
                status : 406,
                message : '중복된 아이디 입니다.'
            }
        } else {
            console.log(e);
        }
    }
}