<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
             text-color="#fff"
             active-text-color="#409EFF">
      <el-menu-item index="1"><router-link to = "/home" class="item-style">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to = "/life" class="item-style">生活</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to = "/techonology" class="item-style">技术</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to = "/aboutme" class="item-style">关于我</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to = "/plugins" class="item-style">插件库</router-link></el-menu-item>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" style="width:30%;line-height: 60px;float:left;color:#e9e9eb;" v-model="msg"></el-input>
      <router-link to = "/sign" class="item-style">
        <p class="signer" v-if="!is_login">登陆/注册</p>
        <el-dropdown v-if="is_login" style="float: right">
          <span class="el-dropdown-link">{{username}},欢迎！<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item ><span @click = "signOut">注销</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--<p class="signer" v-if="is_login">{{username}},欢迎！</p>-->
      </router-link>
    </el-menu>
    <!--<button v-on:click = 'setValue'>点击添加</button>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:'',
      title:'2112213',
      text:'',
      is_login:false,
      username:''
    }
  },
  methods:{
    signOut(){
      this.is_login = false;
      this.GLOBAL.username = '';
      localStorage.removeItem('is_login'); //清除文件
      localStorage.removeItem('username'); //清除文件
      location.reload();
    }
  },
  mounted(){
    if(!this.is_login)
    this.is_login = JSON.parse(localStorage.getItem('is_login'));
    this.username = JSON.parse(localStorage.getItem('username'));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.item-style {
    text-decoration:none;
  }
.signer{
  width:110px;
  color: #fff;
  font-size: 14px;
  margin:0;
  line-height: 60px;
  float: right;
  text-align: center;
  cursor: pointer;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  line-height: 60px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
