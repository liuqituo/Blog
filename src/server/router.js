const express = require('express');
const router = express.Router();
const api = require('./api');

//根据文章类型获取文章路由
router.get('/getArticleType', (req, res, next) => {
  api.getValue(req, res, next,'getArticleType');
});
//注册 路由
router.post('/signUp', (req, res, next) => {
  api.setValue(req, res, next,'signUp');
});
//登陆，根据用户名判断是否有此用户
router.get('/getUser', (req, res, next) => {
  api.getValue(req, res, next,'getUser');
});
//获取今日轮播图路由
router.get('/getTodayUrl', (req, res, next) => {
  api.getValue(req, res, next,'getTodayUrl');
});
//获取全部文章路由
router.get('/getArticle', (req, res, next) => {
  api.getValueAll(req, res, next,'getArticle');
});

//根据文章题目获取
router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next,'getValue');
});

//获取全部Aboutme评论
router.get('/getComment', (req, res, next) => {
  api.getValueAll(req, res, next,'getComment');
});
//Aboutme添加评论
router.post('/addComment', (req, res, next) => {
  api.setValue(req, res, next,'addComment');
});
//获取文章评论
router.get('/getArticleTalk', (req, res, next) => {
  api.getValue(req, res, next,'getArticleTalk');
});
//评论文章
router.post('/addArticleTalk', (req, res, next) => {
  api.setArticleTalk(req, res, next,'addArticleTalk');
});
//获取对应组件
router.get('/getPlugins', (req, res, next) => {
  api.getValueAll(req, res, next,'getPlugins');
});
module.exports = router;
