<template>
  <!--阅读文章-->
    <div id="article">
      <el-alert
        type="error"
        :description=tips
        show-icon style="position: fixed;z-index:1000" v-if="is_error">
      </el-alert>
      <el-alert
        title="登陆成功"
        type="success"
        :description=tips
        show-icon style="position: fixed;z-index:1000" v-if="is_right">
      </el-alert>
      <el-row :gutter="10">
          <el-col  :span="16" :offset="4">
            <div class="grid-content bg-purple">
                <h3>{{title}}</h3>
              <hr>
              <p>{{article}}</p>
              <img :src=picture alt="">
              <br>
              <br>
              <div class="bottom">
                <i class="el-icon-position bottom-icon">{{type}}</i>
                <i class="el-icon-stopwatch bottom-icon">{{time}}</i>
                <i class="el-icon-chat-line-round bottom-icon">评论({{talk}})</i>
                <i class="el-icon-view bottom-icon">浏览({{read}})</i>
                <i class="el-icon-star-on bottom-icon">{{up}}</i>
              </div>
            </div>
          </el-col>
        <br>
          <el-col  :span="16" :offset="4">
            <div class="grid-content bg-purple" v-if="is_login">
              <el-row>
                <h3>给我留言</h3>
                <hr>
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="请输入内容"
                  v-model="my_talk" minlength="1">
                </el-input>
                <br><br>
                <el-button type="warning" @click="giveMyTalk">提交留言</el-button>
              </el-row>
            </div>
            <div class="grid-content bg-purple" v-if="!is_talk_none">
              <el-row>
                <h3>集思广益</h3>
                <hr>
                <el-col :span="22" :offset="1">
                  <div class="bg-white" style="text-align: left" v-for="talk in talk_list">
                    <span style="font-weight: bold">{{talk.username}}:</span>
                    {{talk.talk}}
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
      </el-row>
    </div>
</template>
<script>
    export default {
        name: "article",
        data(){
          return {
            title:'',
            article:'',
            picture:'',
            username:this.$parent.username,
            type:'',
            time:'',
            talk:'',
            read:'',
            up:'',
            my_talk:'',
            is_login:JSON.parse(localStorage.getItem('is_login')),
            is_error:false,
            is_right:false,
            talk_list:[],
            is_talk_none:false,
          }
      },
      methods:{
        giveMyTalk(){
          if(this.my_talk === ''){
            this.tips = '请正确输入，个人数据库比较薄弱，望大家一起爱护哦~~~~';
            this.is_error = true;
          }else {
            this.tips = '评论成功';
            this.is_right = true;
            this.$http.post('/api/addArticleTalk',{
              parmes1: this.title, parmes2: this.username,parmes3: this.my_talk
            }).then((res) => {});
            location.reload();
          }
          setTimeout(()=>{
            [this.is_error,this.is_right] = [false,false];
          },2000);
        }
      },
      mounted(){
        this.is_login = JSON.parse(localStorage.getItem('is_login')),
          this.username = JSON.parse(localStorage.getItem('username')),
        this.$http.get('/api/getValue', {
          params: {check1: this.$route.params.id}
        }).then((res) => {
          this.title = res.data[0].title;
          this.article = res.data[0].text;
          this.picture = res.data[0].picture;
          this.type = res.data[0].type;
          this.time = res.data[0].time;
          this.talk = res.data[0].talk;
          this.read = res.data[0].read;
          this.up = res.data[0].up;
        });
        this.$http.get('/api/getArticleTalk', {
          params: {check1: this.$route.params.id}
        }).then((res) => {
          console.log(res.data);
          this.talk_list = res.data;
          if(this.talk_list.length === 0){
            this.is_talk_none = true;
          }
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
    margin:40px auto 5px;
  }
  .bg-white{
    background:#f4f4f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding:10px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .bottom i{
    margin-right: 10px;
  }
</style>
