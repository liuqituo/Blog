<template>
  <div>
    <div class="grid-content bg-purple">
      <el-row :gutter="20">
        <h3>{{pluginList[0].pluginname}}</h3>
        <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
          <Loading1></Loading1>
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
          <Loading2></Loading2>
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
          <Loading3></Loading3>
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
          <Loading4></Loading4>
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
          <Loading5></Loading5>
          <br><br><br>
          <textarea cols="80" rows="10">
          {{pluginList[4].plugincode}}
          </textarea>
        </div>
        </el-col>
      </el-row>
    </div>
    <div class="grid-content bg-purple">
      <el-row :gutter="20">
        <h3>{{pluginList[5].pluginname}}</h3>
        <el-col :span="22" :offset="1"><div class="grid-content bg-white2">
          <Loading6></Loading6>
          <br><br><br>
          <textarea cols="80" rows="10">
          {{pluginList[5].plugincode}}
          </textarea>
        </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  //引入 Loading动画组件
  import Loading1 from '../plugins/Loading/Loading1.vue';//1、引入组件
  import Loading2 from '../plugins/Loading/Loading2.vue';//1、引入组件
  import Loading3 from '../plugins/Loading/Loading3.vue';//1、引入组件
  import Loading4 from '../plugins/Loading/Loading4.vue';//1、引入组件
  import Loading5 from '../plugins/Loading/Loading5.vue';//1、引入组件
  import Loading6 from '../plugins/Loading/Loading6.vue';//1、引入组件
    export default {
        name: "loading",
        data(){
            return {
              pluginList:[],
            }
        },
        created(){
            this.pluginList = JSON.parse(localStorage.getItem('plugins')).filter((item)=>{
              return item.type === 'Loading';
            })
          console.log(this.pluginList)
        },
      components:{
        //Loading
        'Loading1':Loading1,
        'Loading2':Loading2,
        'Loading3':Loading3,
        'Loading4':Loading4,
        'Loading5':Loading5,
        'Loading6':Loading6,
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
