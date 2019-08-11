<template>
    <div id="switcher3">
      <div class="wrapper">
        <div class="switch_box box_2">
          <input type="checkbox" class="switch_2">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "switcher3"
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
  .box_2{
    background: #666;
  }

  input[type="checkbox"].switch_2{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100px;
    height: 8px;
    background: #444;
    border-radius: 5px;
    position: relative;
    outline: 0;
    cursor: pointer;
  }

  input[type="checkbox"].switch_2:before,
  input[type="checkbox"].switch_2:after{
    position: absolute;
    content: "";
    -webkit-transition: all .25s;
    transition: all .25s;
  }

  input[type="checkbox"].switch_2:before{
    width: 40px;
    height: 40px;
    background: #ccc;
    border: 5px solid #666;
    border-radius: 50%;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  input[type="checkbox"].switch_2:after{
    width: 30px;
    height: 30px;
    background: #666;
    border-radius: 50%;
    top: 50%;
    left: 10px;
    -webkit-transform: scale(1) translateY(-50%);
    transform: scale(1) translateY(-50%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  input[type="checkbox"].switch_2:checked:before{
    left: calc(100% - 35px);
  }

  input[type="checkbox"].switch_2:checked:after{
    left: 75px;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
</style>
