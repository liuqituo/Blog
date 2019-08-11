<template>
  <div id="loading3">
    <div class="com-loading-animation-3">
      <div class="imgbox">
        <div class="leftbox">
          <div class="left"></div>
        </div>
        <div class="rightbox">
          <div class="right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loading3"
    }
</script>

<style scoped>
  .com-loading-animation-3 {
    position: relative;
    width: 100%;
    margin: 5px auto;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    justify-content: center
  }

  .com-loading-animation-3 .imgbox {
    position: relative;
    left: 20px;
    width: 64px;
    height: 64px;
    transform: translateX(-32px)
  }

  .com-loading-animation-3 .leftbox {
    position: absolute;
    box-sizing: border-box;
    left: 0;
    width: 32px;
    height: 64px;
    overflow: hidden
  }

  .com-loading-animation-3 .rightbox {
    position: absolute;
    left: 32px;
    box-sizing: border-box;
    width: 32px;
    height: 64px;
    overflow: hidden
  }

  .com-loading-animation-3 .left {
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border-left: 3px solid #409EFF;
    border-bottom: 3px solid #409EFF;
    border-right: 3px solid transparent;
    border-top: 3px solid transparent;
    transform: rotate(45deg);
    animation: moveleft 3s infinite linear;
  }

  .com-loading-animation-3 .right {
    margin-left: -32px;
    border-left: 3px solid #409EFF;
    border-bottom: 3px solid #409EFF;
    border-right: 3px solid transparent;
    border-top: 3px solid transparent;
    transform: rotate(45deg);
    animation: moveright 3s infinite linear;
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    border-radius: 50%
  }

  @keyframes moveleft {
    0% {
      transform: rotate(-137deg);
    }
    50% {
      transform: rotate(-137deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }

  @keyframes moveright {
    0% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(225deg);
    }
    100% {
      transform: rotate(225deg);
    }
  }
</style>
