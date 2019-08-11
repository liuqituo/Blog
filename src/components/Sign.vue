<template>
    <div id="sign">
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
        <el-col :span="8" :offset="8">
          <div class="grid-content bg-white">
            <el-row>
              <h3><span style="margin-right: 60px;cursor: pointer" @click = isSignUp v-bind:class="{'checked':sign_up}">注册</span><span @click = "isSignOn" style="cursor: pointer" v-bind:class="{'checked':!sign_up}">登陆</span></h3>
              <hr>
              <br>
              <div style="width:100%;height:40px">
                <span>用户名:</span>
                <el-input v-model="username" placeholder="请输入用户名..." style="width:60%;margin-left:15px"></el-input>
              </div>
              <br><br>
              <div style="width:100%;height:40px">
                <span>密码:</span>
                <el-input placeholder="请输入密码..." v-model="password" show-password style="width:60%;margin-left:15px"></el-input>
              </div>
              <br><br>
              <el-button type="primary" v-if="sign_up" @click="signUp">注册</el-button>
              <el-button type="success" v-if="!sign_up" @click="signOn">登陆</el-button>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "sign",
      data(){
          return {
            username:'',
            password:'',
            sign_up:true,
            is_error:false,
            is_right:false,
            tips:''
          }
      },methods:{
          isSignUp(){
            this.sign_up = true;
          },
          isSignOn(){
           this.sign_up = false;
          },
          signUp(){
            if(this.username === ''||this.password === ''){
              this.tips = '请正确输入，个人数据库比较薄弱，望大家一起爱护哦~~~~';
              this.is_error = true;
            }else {
              this.tips = '注册成功';
              this.is_right = true;
              this.$http.post('/api/signUp',{
                parmes1: this.username, parmes2: this.password
              }).then((res) => {
              });
            }
            setTimeout(()=>{
              [this.is_error,this.is_right] = [false,false];
            },2000);
          },
          signOn(){
            if(this.username === ''||this.password === ''){
              this.tips = '请正确输入，个人数据库比较薄弱，望大家一起爱护哦~~~~';
              this.is_error = true;
            }else {
              this.$http.get('/api/getUser',{
                params: {check1: this.username}
              }).then((res) => {
                if(res.data.length === 0){
                  this.tips = '不存在此用户，请先注册';
                  this.is_error = true;
                }else{
                  //输入密码正确
                  if(res.data[0].username === this.username && res.data[0].password === this.password){
                    this.$parent.is_login = true;
                    this.$parent.username = res.data[0].username;
                    localStorage.setItem('is_login',JSON.stringify(this.$parent.is_login));
                    localStorage.setItem('username',JSON.stringify(this.$parent.username));
                    this.tips = '欢迎来到刘奇拓的个人博客~~~~';
                    this.is_right = true;
                    this.GLOBAL.username = res.data[0].username;
                  }else{
                    this.tips = '密码或账号错误';
                    this.is_error = true;
                  }
                }
              });
            }
            setTimeout(()=>{
              [this.is_error,this.is_right] = [false,false];
            },2000);
          },
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
.checked{
  color:#66b1ff;
}
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>
