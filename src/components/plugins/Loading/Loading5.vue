<template>
    <div id="loading5">
      <div class="el-animation-5">
        <div class="com-loading">
          <div class="spinner">
            <div class="bounce1 small"></div>
            <div class="bounce2 small"></div>
            <div class="bounce3 small"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loading5"
    }
</script>

<style scoped>
  .el-animation-5 .com-loading {
    position: relative;
    width: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center
  }

  .el-animation-5 .com-loading .spinner {
    margin: 0 auto;
    width: 4rem;
    text-align: center
  }

  .el-animation-5 .com-loading .spinner>div {
    width: 0.8rem;
    height: 0.8rem;
    background-color: #363636;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    Preventfirstframefromflickeringwhenanimationstarts-webkit-animation-fill-mode: both;
    animation-fill-mode: both
  }

  .el-animation-5 .com-loading .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s
  }

  .el-animation-5 .com-loading .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s
  }

  @-webkit-keyframes bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0)
    }
    40% {
      -webkit-transform: scale(1)
    }
  }

  @keyframes bouncedelay {
    0%,
    80%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0)
    }
    40% {
      transform: scale(1);
      -webkit-transform: scale(1)
    }
  }
</style>
