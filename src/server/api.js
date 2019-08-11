const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getValue(req, res, next,mysql) {
    var title = req.query.check1;
    console.log(req);
    pool.getConnection((err, connection) => {
      var sql = sqlMap[mysql];
      connection.query(sql, [title], (err, result) => {
        res.json(result);
        console.log(result)
        connection.release();
      })
    })
  },
  getValueAll(req, res, next,mysql) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap[mysql];
      connection.query(sql,(err, result) => {
        res.json(result);
        console.log(result)
        connection.release();
      })
    })
  },
  setValue(req, res, next,mysql) {
    var parmes1 = req.body.parmes1, parmes2 = req.body.parmes2;
    pool.getConnection((err, connection) => {
      var sql = sqlMap[mysql];
      connection.query(sql, [parmes1, parmes2], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  setArticleTalk(req, res, next,mysql){
    var parmes1 = req.body.parmes1, parmes2 = req.body.parmes2,parmes3 = req.body.parmes3;
    pool.getConnection((err, connection) => {
      var sql = sqlMap[mysql];
      connection.query(sql, [parmes1, parmes2,parmes3], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  }
}
