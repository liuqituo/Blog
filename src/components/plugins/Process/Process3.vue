<template>
<div id="process3">
  <div class="jdt">
    <span class="jdt_k"></span>
    <span class="jdt_h"></span>
    <span class="jifen"><i>88</i>/<em>100</em>积分</span>
  </div>
</div>
</template>

<script>
    export default {
        name: "process3",
        mounted(){
          var val = $('.jdt .jifen i').html();
          var val2 = $('.jdt .jifen em').html();
          var result = (2*val / val2) * 100;
          $('.jdt_h').width(result);
        }
    }
</script>

<style scoped>
  i,em {
    font-style:normal;
    font-weight:normal;
  }
  a {
    text-decoration:none;
  }
  .jdt {
    position:relative;
    width:220px;
    margin:10px auto;
  }
  .jdt .jdt_k {
    position:absolute;
    width:200px;
    height:4px;
    left:0;
    border-radius:5px;
    background:#ffe1b5;
    margin-top:15px;
  }
  .jdt .jdt_h {
    left:0;
    position:absolute;
    height:4px;
    border-radius:5px;
    margin-top:15px;
    background:#ff9300;
  }
  .jdt .jifen {
    color:#00a1ea;
    font-size:12px;
    position:absolute;
    left:220px;
    top:6px;
  }

</style>
