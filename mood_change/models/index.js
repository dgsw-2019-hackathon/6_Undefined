'use strict';

const Sequelize = require('sequelize');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.databse, config.username, config.password, config);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mood_board = require('./mood_board')(sequelize, Sequelize);
db.user = require('./user')(sequelize, Sequelize);

db.user.hasMany(db.mood_board);
db.mood_board.belongsTo(db.user);

module.exports = db;