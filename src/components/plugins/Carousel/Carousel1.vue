<template>
  <div id="carousel1">
    <div class="box">
      <ul>
        <li><img src="./img/image1.jpg" alt=""/></li>
        <li><img src="./img/image2.jpg" alt=""/></li>
        <li><img src="./img/image3.jpg" alt=""/></li>
        <li><img src="./img/image4.jpg" alt=""/></li>
        <li><img src="./img/image5.jpg" alt=""/></li>
        <!--将需要轮播的图片在复制一份-->
        <li><img src="./img/image1.jpg" alt=""/></li>
        <li><img src="./img/image2.jpg" alt=""/></li>
        <li><img src="./img/image3.jpg" alt=""/></li>
        <li><img src="./img/image4.jpg" alt=""/></li>
        <li><img src="./img/image5.jpg" alt=""/></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "carousel1",
      data() {
        return {}
      }
    }
</script>

<style scoped>
  .box {
    position: relative;
    width: 100%;
    height: 86px;
    margin: 0 auto;
    overflow: hidden;
  }
  .box > ul {
    /*设置ul的宽度为2倍div的宽度*/
    width: 200%;
    height: 100%;
    list-style: none;
    /*动画属性*/
    animation: imgMove 10s linear infinite;

  }
  /* 暂停动画 */
  .box>ul:hover{
    animation-play-state: paused;
  }

  .box > ul > li {
    width: 10%;
    height: 100%;
    background: green;
    float: left;
    border: 1px solid white;
    transition: all 1s linear;
  }
  .box > ul > li:hover {
    transform:scale(1.5);
  }

  .box ul li img {
    width: 100%;
    height: 100%;
  }
  /*创建动画*/
  @keyframes imgMove {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-40%);
    }
    100%{
      transform: translateX(0);
    }
  }
</style>
