<template>
  <div>
    <div class="grid-content bg-purple">
      <el-row :gutter="20">
        <h3>{{pluginList[0].pluginname}}</h3>
        <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
          <Paging1></Paging1>
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
          <Paging2></Paging2>
          <br><br><br>
          <textarea cols="80" rows="10">
          {{pluginList[1].plugincode}}
          </textarea>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  //引入 Loading动画组件
  import Paging1 from '../plugins/Paging/Paging1.vue';//1、引入组件
  import Paging2 from '../plugins/Paging/Paging2.vue';//1、引入组件
    export default {
        name: "paging",
      data(){
        return {
          pluginList:[],
        }
      },
      created(){
        this.pluginList = JSON.parse(localStorage.getItem('plugins')).filter((item)=>{
          return item.type === 'Paging';
        })
      },
      components:{
        //Loading
        'Paging1':Paging1,
        'Paging2':Paging2,
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
