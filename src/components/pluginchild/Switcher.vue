<template>
<div>
  <div class="grid-content bg-purple">
    <el-row :gutter="20">
      <h3>{{pluginList[0].pluginname}}</h3>
      <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
        <Switcher1></Switcher1>
        <br><br><br>
        <textarea cols="80" rows="10">
          {{pluginList[0].plugincode}}
          </textarea>
      </div>
      </el-col>
    </el-row>
  </div>
  <div class="grid-content bg-purple">
    <el-row :gutter="20">
      <h3>{{pluginList[1].pluginname}}</h3>
      <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
        <Switcher2></Switcher2>
        <br><br><br>
        <textarea cols="80" rows="10">
          {{pluginList[1].plugincode}}
          </textarea>
      </div>
      </el-col>
    </el-row>
  </div>
  <div class="grid-content bg-purple">
    <el-row :gutter="20">
      <h3>{{pluginList[2].pluginname}}</h3>
      <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
        <Switcher3></Switcher3>
        <br><br><br>
        <textarea cols="80" rows="10">
          {{pluginList[2].plugincode}}
          </textarea>
      </div>
      </el-col>
    </el-row>
  </div>
  <div class="grid-content bg-purple">
    <el-row :gutter="20">
      <h3>{{pluginList[3].pluginname}}</h3>
      <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
        <Switcher4></Switcher4>
        <br><br><br>
        <textarea cols="80" rows="10">
          {{pluginList[3].plugincode}}
          </textarea>
      </div>
      </el-col>
    </el-row>
  </div>
  <div class="grid-content bg-purple">
    <el-row :gutter="20">
      <h3>{{pluginList[4].pluginname}}</h3>
      <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
        <Switcher5></Switcher5>
        <br><br><br>
        <textarea cols="80" rows="10">
          {{pluginList[4].plugincode}}
          </textarea>
      </div>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
  //引入 Switcher动画组件
  import Switcher1 from '../plugins/Switcher/Switcher1.vue';//1、引入组件
  import Switcher2 from '../plugins/Switcher/Switcher2.vue';//1、引入组件
  import Switcher3 from '../plugins/Switcher/Switcher3.vue';//1、引入组件
  import Switcher4 from '../plugins/Switcher/Switcher4.vue';//1、引入组件
  import Switcher5 from '../plugins/Switcher/Switcher5.vue';//1、引入组件
    export default {
        name: "switcher",
      data(){
        return {
          pluginList:[],
        }
      },
      created(){
        this.pluginList = JSON.parse(localStorage.getItem('plugins')).filter((item)=>{
          return item.type === 'Switcher';
        })
      },
      components:{
        //Switcher
        'Switcher1':Switcher1,
        'Switcher2':Switcher2,
        'Switcher3':Switcher3,
        'Switcher4':Switcher4,
        'Switcher5':Switcher5,
      }
    }
</script>

<style scoped>
  .bg-purple {
    background-color: rgba(211,220,230,0.9);
    margin-top:10px;
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
