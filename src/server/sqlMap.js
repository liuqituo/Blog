var sqlMap = {
  //表格命名不要以‘1’命名,否则会出现问题，无法连接；
  //根据题目获取文章
  getValue: 'SELECT * FROM article WHERE title = ?',
  //新增文章
  setValue: 'INSERT INTO article(title, text) VALUES (?,?)',
  //注册用户
  signUp:'INSERT INTO user(username, password) VALUES (?,?)',
  //登陆，根据用户名判断是否有此用户
  getUser:'SELECT * FROM user WHERE username = ?',
  //获取所有文章
  getArticle:'SELECT * FROM article',
  //根据文章类型获取文章
  getArticleType:'SELECT * FROM article WHERE type = ?',
  //获取今日轮播图
  getTodayUrl:'SELECT * FROM todaypicture WHERE title = ?',
  //获取所有评论
  getComment:'SELECT * FROM callme',
  //新增文章
  addComment: 'INSERT INTO callme(username, talk) VALUES (?,?)',
  //添加文章评论
  addArticleTalk:'INSERT INTO articletalk(title,username, talk) VALUES (?,?,?)',
  //获取文章评论
  getArticleTalk:'SELECT * FROM articletalk WHERE title = ?',
  //根据文章类型获取文章
  getPlugins:'SELECT * FROM plugins',
};

module.exports = sqlMap;
