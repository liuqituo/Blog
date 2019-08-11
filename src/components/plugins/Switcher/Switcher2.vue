<template>
<div id="switcher2">
  <div class="wrapper">
    <div class="switch_box box_1">
      <input type="checkbox" class="switch_1">
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "switcher2"
    }
</script>

<style scoped>
  .wrapper{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 200px;
    margin: 10px auto;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .switch_box{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 200px;
    min-width: 200px;
    height: 50px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .box_1{
    background: #eee;
  }

  input[type="checkbox"].switch_1{
    font-size: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 3.5em;
    height: 1.5em;
    background: #ddd;
    border-radius: 3em;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  input[type="checkbox"].switch_1:checked{
    background: #0ebeff;
  }

  input[type="checkbox"].switch_1:after{
    position: absolute;
    content: "";
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    background: #fff;
    -webkit-box-shadow: 0 0 .25em rgba(0,0,0,.3);
    box-shadow: 0 0 .25em rgba(0,0,0,.3);
    -webkit-transform: scale(.7);
    transform: scale(.7);
    left: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }

  input[type="checkbox"].switch_1:checked:after{
    left: calc(100% - 1.5em);
  }
</style>
