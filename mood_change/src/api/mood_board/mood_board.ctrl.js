// const mysql = require('mysql');

// const db  = mysql.createConnection ({
//     host:"localhost",
//     user:"root",
//     password:"1111",
//     database:"mood-change"
// });

// exports.board_read = (ctx) => {
//     const {
//         user_id   
//     } = ctx.request.body;

//     const selectSytax = "SELECT content FROM mood_board WHERE user_id = ?"; 
//     const selectSytaxAll = "SELECT * FROM mood_board"; 
    
//     console.log(user_id);

//     try{
//         if(user_id == undefined)
//         {
//             console.log("test");
            
//             db.query(selectSytaxAll, (err, data) => {
//                 console.log(data);
                
//                 ctx.body = {
//                     status : 200,
//                     message : '불러오기 성공',
//                     data
//                 }
//             });
//         }
//         else if(user_id != undefined)
//         {
//             db.query(selectSytax, [user_id], (err, data) => {
//                 console.log(data);
//             });

//             ctx.body = {
//                 status : 200,
//                 message : '유저 불러오기 성공',
//                 data
//             }
//         }
//     } catch(err) {
//         console.log(err);
//     }
// }

// exports.board_create = (ctx) => {
//     const {
//         content, comment_check
//     } = ctx.request.body;

//     let insertSyntex = "INSERT INTO mood_board(content, comment_check) VALUES (?, ?)";
//     try{
//         db.query(insertSyntex, [content, comment_check], (err, data) => {
//             if(err) throw err;

//             console.log("test");
//         });

//         ctx.body = {
//             status : 200,
//             message : '게시물 삽입 성공',
//             comment_check, content
//         };

//     } catch(err) {
//         console.log(err);
//     }
// }


// exports.board_delete = (ctx) => {
//     const delete_id = ctx.request.body;

//     console.log(ctx.request.body);
    
//     let deleteSyntex = "DELETE FROM mood_board WHERE id = ?";
//     try{
//         db.query(deleteSyntex, [delete_id], (err) => {
           
//             if(delete_id === undefined){
//                 console.log(err);
//             }
//             console.log("삭제 성공");
//         });

//         ctx.body = {
//             status : 200,
//             message : '삭제 성공'
//         };

//     } catch(err) {
//         console.log(err);
//     }
// }

// exports.board_update = (ctx) => {
//     const {
//         update_id, content
//     } = ctx.request.body;

//     let updateSyntax = `UPDATE mood_board SET content = ? WHERE id = ?`;
//     try{
//         db.query(updateSyntax, [content, update_id], (err, data) => {
//             console.log("업데이트 성공", update_id, content);
//         });

//         ctx.body = {
//             status : 200, 
//             message : '업데이트 성공',
//             update_id, content
//         }

//     } catch(err) {
//         console.log(err);
//     }   
// }

const board_db = require('./../../../models').mood_board;

exports.board_create = async (ctx) => {
    const {content, comment_check } = ctx.request.body;

    console.log(content, comment_check);

    console.log(ctx.decoded);
  

    try {
        await board_db.create({
            content: content,
            comment_check: comment_check,
            user_id : ctx.decoded.memberId,
            });

        ctx.body = {
            status : 200,
            message : '삽입 성공',
        }
    } catch (err) {
        console.log(err);
    }
}

exports.board_read = async (ctx) => {
    // console.log
    // console.log(ctx.decoded.memberId);
    // console.log(ctx.decoded);
    
    // console.log(token.memberId);

    try {   
            await board_db.findAll({
            }).then(function(result) {
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

exports.board_update = async (ctx) => {

    const { updateId, content } = ctx.request.body;

    try {
        await board_db.update(
            {
                content: content
            },
            {
                where: { id : updateId}
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

exports.board_delete = async (ctx) => {

    const {deleteId} = ctx.request.body;
    
    try {
        await board_db.destroy({
            where: {
              id: deleteId
            }
          });
        ctx.body = {
            status : 200,
            message : '삭제 성공'
        }
    } catch(err) {
        console.log(err);
    }
}

exports.board_comment = async (ctx) => {

  // console.log("TEST");
  

  const {comment, board_id} = ctx.request.body;
  let comment_check = false;

  try {
    await board_db.findAll({
      where: {id: board_id}
    })
    .then(dataAddress => {
      dataAddress.forEach(data => {
        // console.log(data.dataValues.comment_check);
        
        comment_check = data.dataValues.comment_check;
        
        // console.log(comment_check);
      });
    })

    if(comment_check === false)
    {
      ctx.body = {
        status : 200,
        message : '댓글 권한 없음',
      }
    }
    else if(comment_check === true)
    {
      console.log("test");
      

      await board_db.update(
        {
          comment : comment,
        },
        {
          where : {id : board_id},
        }
      );

      ctx.body = {
        status : 200,
        message : '댓글 작성 성공',
      }
    }
  } catch(err) {
    console.log(err);
  }
}

exports.add_like = async (ctx) => {
  const {like, board_id} = ctx.request.body;
  let like_check = 0;
 

  if(like === true)
  {
    // await board_db.findAll({
    //   where: {id: board_id}
    // })
    // .then(dataAddress => {
    //   dataAddress.forEach(data => {
    //     like_count = data.dataValues.like;
    //     like_count += 1;
    //   });
    // })

    await board_db.update(
      {
          like : true
      },
      {
          where: { id : board_id}
      },
      like_check = 1,
      ctx.body = {
        status : 200,
        like_check
      }
      );

    ctx.body = {
      status : 200,
      like_check
    }
  }
  else 
  {
    // await board_db.findAll({
    //   where: {id: board_id}
    // })
    // .then(dataAddress => {
    //   dataAddress.forEach(data => {
    //     like_count = data.dataValues.like;
    //     like_count -= 1;
    //   });
    // })
    await board_db.update(
      {
          like : false
      },
      {
          where: { id : board_id}
      },
      like_check = 0,
      ctx.body = {
        status : 200,
        like_check
      }
      );
  }
}