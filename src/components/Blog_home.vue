<template>
  <!--博客首页-->
    <div id="blog_home">
      <el-row>
        <el-col :span="24" style="background: #d3dce6;">
          <span style="float: left;"><i class="el-icon-magic-stick"></i>欢迎来访~</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid-content bg-none">
          <el-row :gutter="20">
            <el-col :span="16">
              <el-row>
                <div class="grid-content bg-purple">
                    <el-carousel height="300px">
                      <el-carousel-item v-for="todayUrl in todayUrlList">
                        <img :src=todayUrl.image_url alt="" width="100%">
                      </el-carousel-item>
                    </el-carousel>
                </div>
              </el-row>
              <el-row>
                <div class="grid-content bg-purple">
                  <div style="float: left;">最新文章</div>
                  <br>
                  <hr>
                  <el-row v-for="art in articleList">
                  <div class="grid-content bg-white" style="height:150px">
                    <img style="width: 150px; height: 150px;float: left;" :src=art.picture>
                    <div class="article_content" style="text-align:left">
                      <div class="title">{{art.title}}</div>
                      <div class="article"><span>{{art.text.slice(0,90)}}...</span><router-link :to="/article/ + art.title"><span style="color:#409EFF;cursor: pointer">[详情]</span></router-link></div>
                      <div class="bottom">
                        <i class="el-icon-position bottom-icon">{{art.type}}</i>
                        <i class="el-icon-stopwatch bottom-icon">{{art.time}}</i>
                        <i class="el-icon-chat-line-round bottom-icon">评论({{art.talk}})</i>
                        <i class="el-icon-view bottom-icon">浏览({{art.read}})</i>
                        <i class="el-icon-star-on bottom-icon">{{art.up}}</i>
                      </div>
                    </div>
                  </div>
                </el-row>
                </div>
              </el-row>
            </el-col>
            <el-col :span="8">
              <el-row>
                <div class="grid-content bg-purple">
                  <img src="../assets/call.png" alt="" class="out_icon" id="phone" @click="openMe">
                  <img src="../assets/qq.png" alt="" class="out_icon" id="QQ" @click="openMe">
                  <img src="../assets/Wechat.png" alt="" class="out_icon" id="Wechat" @click="openMe">
                  <img src="../assets/share.png" alt="" class="out_icon" @click="openMe">
                </div>
              </el-row>
              <el-row>
                <div class="grid-content bg-purple">
                  最新文章
                  <hr>
                  <el-tag type="info">Python2爬虫学习系列教程</el-tag>
                  <el-tag type="info">Python2爬虫学习系列教程</el-tag>
                  <el-tag type="info">Python2爬虫学习系列教程</el-tag>
                  <el-tag type="info">Python2爬虫学习系列教程Python2爬虫学习系列教程</el-tag>
                </div>
              </el-row>
              <el-row>
                <div class="grid-content bg-purple">
                  我的标签
                  <hr>
                  <el-tag type="success">Python</el-tag>
                  <el-tag type="warning">Java</el-tag>
                  <el-tag type="danger">HTML</el-tag>
                  <el-tag >CSS</el-tag>
                  <el-tag type="info">mySQL</el-tag>
                </div>
              </el-row>
            </el-col>
          </el-row>
        </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  //首页
    export default {
        name: "blog_home",
        data(){
          return {

            todayUrlList:[],
            articleList:[],
          }
        },methods: {
        openMe(e) {
          // console.log(e.target.id)
          const h = this.$createElement;
          if(e.target.id==='phone'){
            this.$notify({
              title: '欢迎致电',
              message: h('i', {style: 'color: teal'}, '电话：15681902703')
            });
          }else if(e.target.id==='QQ'){
            this.$notify({
              title: '我的QQ',
              message: h('i', {style: 'color: teal'}, 'QQ：1815465998')
            });
          }else if(e.target.id==='Wechat'){
            this.$notify({
              title: '我的微信',
              message: h('i', {style: 'color: teal'}, '微信：Lqt12345Cms')
            });
          }else{
            this.$notify({
              title: '链接地址',
              message: h('i', {style: 'color: teal'}, '地址：www.lqtcms.cn')
            });
          }
        },
      },created(){
        this.$http.get('/api/getTodayUrl', {
          params: {check1: 'today'}
        }).then((res) => {
          console.log('res', res.data);
          this.todayUrlList = res.data;
          console.log(this.todayUrlList[0].image_url)
        })
          this.$http.get('/api/getArticle').then((res) => {
            this.articleList = res.data;
            console.log(this.articleList)
            console.log(this.articleList[0].title)
          })
      }
    }
</script>

<style scoped>

.el-row {
  margin-bottom: 20px;
}
.bg-purple {
  background-color: rgba(211,220,230,0.9);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding:10px;
}
.bg-white{
  background:#f4f4f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding:10px;
}
.bg-none{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  padding:10px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.out_icon{
    width:40px;
    height:40px;
    margin:0px 20px;
    cursor: pointer;
}
.article_content{
  position:relative;
  height:100%;
  float: left;
  margin-left: 10px;
  width: calc(100% - 160px);
}
  .title{
    height:10px;
    font-size:18px;
    font-weight: bold;
  /*//设置字体粗细*/
    margin-bottom: 10px;
    padding:10px 0 0 10px;
  }
  .article{
    width:550px;
    height:80px;
    padding:10px 10px 0 10px;
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
  }
  .bottom{
    width:100%;
    height:30px;
    line-height: 30px;
  }
  .bottom-icon{
    margin-right: 30px;
    color: #909399;
    font-size: 14px;
  }
</style>
