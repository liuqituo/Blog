<template>
    <div id="loading4">
      <div class="el-animation-4">
        <div class="content">
          <span class="my_span"></span>
          <span class="my_span"></span>
          <span class="my_span"></span>
          <span class="my_span"></span>
          <span class="my_span"></span>
          <span class="my_span"></span>
          <span class="my_span"></span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loading4"
    }
</script>

<style scoped>
  .el-animation-4{
    position: relative;
  }
  .el-animation-4 .content{
    width: 220px;
    margin:0px auto;
  }
  .el-animation-4 .content span:nth-of-type(0){
    display: inline-block;
    height: 100px;
    width: 25px;
    background-color: deepskyblue;
    border-radius: 5px;
    transform: skewX(-25deg) scale(.1);
    animation:animate 0.7s 0s infinite alternate;
  }
  .el-animation-4 .content span:nth-of-type(1){
    display: inline-block;
    height: 100px;
    width: 25px;
    background-color: deepskyblue;
    border-radius: 5px;
    transform: skewX(-25deg) scale(.1);
    animation:animate 0.7s 0.1s infinite alternate;
  }
  .el-animation-4 .content span:nth-of-type(2){
    display: inline-block;
    height: 100px;
    width: 25px;
    background-color: deepskyblue;
    border-radius: 5px;
    transform: skewX(-25deg) scale(.1);
    animation:animate 0.7s 0.2s infinite alternate;
  }
  .el-animation-4 .content span:nth-of-type(3){
    display: inline-block;
    height: 100px;
    width: 25px;
    background-color: deepskyblue;
    border-radius: 5px;
    transform: skewX(-25deg) scale(.1);
    animation:animate 0.7s 0.3s infinite alternate;
  }
  .el-animation-4 .content span:nth-of-type(4){
    display: inline-block;
    height: 100px;
    width: 25px;
    background-color: deepskyblue;
    border-radius: 5px;
    transform: skewX(-25deg) scale(.1);
    animation:animate 0.7s 0.4s infinite alternate;
  }
  .el-animation-4 .content span:nth-of-type(5){
    display: inline-block;
    height: 100px;
    width: 25px;
    background-color: deepskyblue;
    border-radius: 5px;
    transform: skewX(-25deg) scale(.1);
    animation:animate 0.7s 0.5s infinite alternate;
  }
  .el-animation-4 .content span:nth-of-type(6){
    display: inline-block;
    height: 100px;
    width: 25px;
    background-color: deepskyblue;
    border-radius: 5px;
    transform: skewX(-25deg) scale(.1);
    animation:animate 0.7s 0.6s infinite alternate;
  }
  @keyframes animate{
    to{
      filter:opacity(1);
      transform: skewX(-25deg) scale(1);
    }
  }
</style>
