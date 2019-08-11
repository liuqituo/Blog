<template>
  <div class="nd-plugin-loading-2">
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loading2"
    }
</script>

<style scoped>
  .nd-plugin-loading-2 {
    position: relative;
    width: 100%;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    align-items: center;
    z-index: 1000;
    justify-content: center
  }

  .nd-plugin-loading-2 .spinner {
    margin: 5px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px
  }

  .nd-plugin-loading-2 .spinner>div {
    background-color: #FDB702;
    height: 100%;
    width: 6px;
    display: inline-block;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out
  }

  .nd-plugin-loading-2 .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s
  }

  .nd-plugin-loading-2 .spinner .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s
  }

  .nd-plugin-loading-2 .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s
  }

  .nd-plugin-loading-2 .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s
  }

  @-webkit-keyframes stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(.4)
    }
    20% {
      -webkit-transform: scaleY(1)
    }
  }

  @keyframes stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(.4);
      -webkit-transform: scaleY(.4)
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1)
    }
  }
</style>
