const routerApi = require('./router');
const bodyParser = require('body-parser'); // post 数据是需要
const express = require('express');
const app = express();

app.use(bodyParser.json());

// 后端api路由
app.use('/api', routerApi);

// 监听端口
//如果读不到数据可以改端口试一试
app.listen(3000);
console.log('success listen at port:3000......');
