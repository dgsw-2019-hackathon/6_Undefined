const Koa = require('koa');
const port = process.env.port || 8000;
const Router = require('koa-router');
const api = require('./api');
const Body = require('koa-body')({ multipart : true });

const {sequelize} = require('../models');
sequelize.sync();
const app = new Koa();
const router = new Router();

router.use('/api',api.routes());
app.use(Body);

app.use(router.routes());

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});
