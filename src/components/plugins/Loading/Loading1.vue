<template>
  <div id="loading1">
    <div class='nd-plugin-buffering-box'>
      <div class='mask'></div>
      <div class='nd-plugin-buffering-loader'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loading1"
    }
</script>

<style scoped>

  .nd-plugin-buffering-box {
    position: relative;
    box-sizing: border-box;
    display: flex;
  // flex: 0 1 auto;
  // flex-direction: column;
  // flex-grow: 1;
  // flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  .mask {
    position: absolute;
    background-color: #FFF;
  }

  @-webkit-keyframes nd-plugin-buffering-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }


  @keyframes nd-plugin-buffering-loader {
    50% {
      opacity: 0.3;
      -webkit-transform: scale(0.4);
      transform: scale(0.4);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  .nd-plugin-buffering-loader {
    position: relative;
  }


  .nd-plugin-buffering-loader > div {
    background-color: #999;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
  }

  .nd-plugin-buffering-loader > div:nth-child(1) {
    top: 20px;
    left: 0;
    -webkit-animation: nd-plugin-buffering-loader 1s 0s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0s infinite linear;
  }

  .nd-plugin-buffering-loader > div:nth-child(2) {
    top: 14.14px;
    left: 14.14px;
    -webkit-animation: nd-plugin-buffering-loader 1s 0.12s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0.12s infinite linear;
  }

  .nd-plugin-buffering-loader > div:nth-child(3) {
    top: 0;
    left: 20px;
    -webkit-animation: nd-plugin-buffering-loader 1s 0.24s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0.24s infinite linear;
  }

  .nd-plugin-buffering-loader > div:nth-child(4) {
    top: -14.14px;
    left: 14.14px;
    -webkit-animation: nd-plugin-buffering-loader 1s 0.36s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0.36s infinite linear;
  }

  .nd-plugin-buffering-loader > div:nth-child(5) {
    top: -20px;
    left: 0;
    -webkit-animation: nd-plugin-buffering-loader 1s 0.48s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0.48s infinite linear;
  }

  .nd-plugin-buffering-loader > div:nth-child(6) {
    top: -14.14px;
    left: -14.14px;
    -webkit-animation: nd-plugin-buffering-loader 1s 0.6s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0.6s infinite linear;
  }

  .nd-plugin-buffering-loader > div:nth-child(7) {
    top: 0;
    left: -20px;
    -webkit-animation: nd-plugin-buffering-loader 1s 0.72s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0.72s infinite linear;
  }

  .nd-plugin-buffering-loader > div:nth-child(8) {
    top: 14.14px;
    left: -14.14px;
    -webkit-animation: nd-plugin-buffering-loader 1s 0.84s infinite linear;
    animation: nd-plugin-buffering-loader 1s 0.84s infinite linear;
  }


</style>
