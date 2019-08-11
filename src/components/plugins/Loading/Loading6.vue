<template>
    <div id="loading6">
      <div class="spinner">
        <div></div>
        <div></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loading6"
    }
</script>

<style scoped>
  .spinner{
    width:60px;
    height: 60px;
    position: relative;
    margin: 0 auto;
  }
  .spinner>div{
    width:100%;
    height: 100%;
    border-radius: 50%;
    background: #67cf22;
    opacity: 0.6;
    position:absolute;
    top:0;
    left:0;
    animation: mymove 2.0s infinite ease-in-out;
  }
  .spinner>div:nth-child(2){
    /*做效果时，尽量用负延时；*/
    animation-delay: -1s;
  }
  @keyframes mymove{
    0%,100%{transform: scale(0.0);}
    50%{transform: scale(1.0);}

  }
</style>
