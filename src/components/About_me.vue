<template>
  <!--关于我-->
  <div id="about_me">
    <el-row>
      <el-col :span="24" style="background: #d3dce6;">
        <span style="float: left;"><i class="el-icon-magic-stick"></i>欢迎来访~</span>
        <el-alert
          type="error"
          :description=tips
          show-icon style="position: fixed;" v-if="is_error">
        </el-alert>
        <el-alert
          title="登陆成功"
          type="success"
          :description=tips
          show-icon style="position: fixed;" v-if="is_right">
        </el-alert>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18" :offset="3">
        <div class="grid-content bg-white">
          <el-row>
            <h3>个人简介</h3>
            <hr>
            <el-avatar :size="100" :src="header_img"></el-avatar>
            <br>
            <span style="font-weight:bold">皮皮拓</span>
            <div class="introduce">
              <span>爱生活、爱艺术、爱书画、爱音乐、爱设计、爱编程。</span>
              <br><br>
              <span>人生百态，笑口常开，秉承自我，谨慎独行。静觅，静静寻觅生活的美好。</span>
            </div>
              <br><br>
            <el-button type="primary">了解更多</el-button>
          </el-row>
        </div>
        <br>
        <div class="grid-content bg-white">
          <el-row>
            <h3>我的技能树</h3>
            <hr>
            <div class="block">
              <el-timeline>
                <el-timeline-item timestamp="JS" placement="top" style="text-align: left">
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                </el-timeline-item>
                <el-timeline-item timestamp="HTML" placement="top" style="text-align: left">
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="90" status="success"></el-progress>
                </el-timeline-item>
                <el-timeline-item timestamp="CSS" placement="top" style="text-align: left">
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="80" status="warning"></el-progress>
                </el-timeline-item>
                <el-timeline-item timestamp="NODE" placement="top" style="text-align: left">
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="50" status="exception"></el-progress>
                </el-timeline-item>
              </el-timeline>
            </div>
            <br><br>
            <el-button type="success">挖掘潜能</el-button>
          </el-row>
        </div>
        <br>
        <div class="grid-content bg-white" v-if="is_login">
          <el-row>
            <h3>给我留言</h3>
            <hr>
              <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容"
                v-model="my_comment" minlength="1">
              </el-input>
            <br><br>
            <el-button type="warning" @click="giveMyComment">提交留言</el-button>
          </el-row>
        </div>
        <br>
        <div class="grid-content bg-white">
          <el-row :gutter="10">
            <h3>集思广益</h3>
            <hr>
            <el-col :span="22" :offset="1">
              <div class="bg-white" style="text-align: left" v-for="comment in commentsList">
                <span>{{comment.username}}:</span>
                {{comment.talk}}
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  //关于我
    export default {
        name: "about_me",
        data(){
          return{
            header_img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1638695478,3359394321&fm=26&gp=0.jpg',
            size:'large',
            commentsList:[],
            my_comment:'',
            tips:'',
            is_error:false,
            is_right:false,
            is_login:JSON.parse(localStorage.getItem('is_login'))
          }
      },
      methods:{
          giveMyComment(){
            if(this.my_comment === ''){
              this.tips = '请正确输入，个人数据库比较薄弱，望大家一起爱护哦~~~~';
              this.is_error = true;
            }else {
              this.tips = '评论成功';
              this.is_right = true;
              this.$http.post('/api/addComment',{
                parmes1: this.$parent.username, parmes2: this.my_comment
              }).then((res) => {
              });
              location.reload();
            };
            setTimeout(()=>{
              [this.is_error,this.is_right] = [false,false];
            },2000);
          }
      },
      mounted(){
        this.$http.get('/api/getComment').then((res) => {
          this.commentsList = res.data;
          console.log(this.commentsList);
        })
      }
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .bg-white{
    background: rgba(244,244,245,0.9);
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
  .introduce{
    padding:10px 10px 0 10px;
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
    text-align: center;
  }
</style>
