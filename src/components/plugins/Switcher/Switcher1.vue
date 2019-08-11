<template>
    <div id="switcher1">
      <input type="checkbox" id="toggle-button">
      <!--label中的for跟input的id绑定。作用是在点击label时选中input或者取消选中input-->
      <label for="toggle-button" class="button-label">
        <span class="circle"></span>
        <span class="text on">开</span>
        <span class="text off">关</span>
      </label>
    </div>
</template>

<script>
    export default {
        name: "switcher1"
    }
</script>

<style scoped>
  #toggle-button{
    display: none;
  }
  .button-label{
    position: relative;
    display: inline-block;
    width: 80px;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 30px;
    cursor: pointer;
  }
  .circle{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
  }
  .button-label .text {
    line-height: 30px;
    font-size: 18px;

    /*
    用来阻止页面文字被选中，出现蓝色
    可以将下面两行代码注释掉来查看区别
    */
    -webkit-user-select: none;
    user-select: none;
  }
  .on {
    color: #fff;
    margin-right: 5px;
    text-indent: 10px;
  }
  .off {
    color: #fff;
    margin-left: 5px;
    text-indent: 53px;
  }
  .button-label .circle{
    left: 0;
    transition: all 0.3s;/*transition过度，时间为0.3秒*/
  }

  /*
  以下是checked被选中后，紧跟checked标签后面label的样式。
  例如：div+p 选择所有紧接着<div>元素之后的<p>元素
  */
  #toggle-button:checked + label.button-label .circle{
    left: 50px;
  }
  #toggle-button:checked + label.button-label .on{
    display: inline-block;
  }
  #toggle-button:checked + label.button-label .off{
    display: none;
  }
  #toggle-button:checked + label.button-label{
    background-color: #33FF66;
  }
</style>
