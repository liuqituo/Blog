<template>
  <!--插件库-->
  <div id="plugins">
    <el-row :gutter="20">
      <el-col :span="6">
          <div class="grid-content bg-purple nav">
             <div class="bg-white" v-for="plugin in plugins_type"><span><router-link :to="`/plugins/${plugin.link}`">{{plugin.name}}</router-link></span></div>
          </div>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "plugins",
        data(){
            return {
                plugins_type:[
                  {name:"加载动画",link:'Loading'},
                  {name:"轮播图",link:'Carousel'},
                  {name:"日历组件",link:'Date'},
                  {name:"分页组件",link:'Paging'},
                  {name:"定位组件",link:'Location'},
                  {name:"进度条",link:'Process'},
                  {name:"开关",link:'Switcher'}
                  ],
            }
        },
        created(){
          this.$http.get('/api/getPlugins').then((res) => {
            localStorage.setItem('plugins',JSON.stringify(res.data));
            console.log(JSON.parse(localStorage.getItem('plugins')))
            console.log(111)
          })
        },
    }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .bg-purple {
    background-color: rgba(211,220,230,0.9);
  }
  .nav{
    display: flex;
    flex-direction: column;
    justify-content:center;
    height: 550px;
    padding: 5px;
  }
  .bg-white{
    background:#f4f4f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding:10px;
    flex-grow:1;
    display: flex;
    justify-content:center;
    cursor: pointer;
  }
  .bg-white2{
    background:#f4f4f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding:20px;
  }
  .bg-white span{
    align-self: center;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
