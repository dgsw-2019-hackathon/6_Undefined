module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('mood_user', {
        user_id: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,
        },
        user_password: {
            type: DataTypes.STRING(200),
            allowNull:false,
        },
        user_name: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },{
      charset: 'utf8',
      collate: 'utf8_bin',
        timestamps: false
    });

    user.getMemberForLogin = (user_id, user_password) => user.findOne({
        attributes: ['user_id','user_password','user_name'],
        where: {
          user_id,
          user_password,
        },
        raw: true,
      });
    return user
};
