module.exports = (sequelize, DataTypes) => {
  return sequelize.define('mood_board', {
    content: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    comment_check: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    like: {
      type: DataTypes.DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      isUnique: true,
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    date_time: {
      type: DataTypes.DATE, 
      defaultValue: sequelize.literal('now()'),
      allowNull: false, 
    },
  }, {
      charset: 'utf8',
      collate: 'utf8_bin',
      timestamps: false
    });
};