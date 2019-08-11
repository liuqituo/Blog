<template>
    <div id="switcher5">
      <div class="wrapper">
        <div class="switch_box box_4">
          <div class="input_wrapper">
            <input type="checkbox" class="switch_4">
            <svg class="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.67 426.67">
              <path d="M153.504 366.84c-8.657 0-17.323-3.303-23.927-9.912L9.914 237.265c-13.218-13.218-13.218-34.645 0-47.863 13.218-13.218 34.645-13.218 47.863 0l95.727 95.727 215.39-215.387c13.218-13.214 34.65-13.218 47.86 0 13.22 13.218 13.22 34.65 0 47.863L177.435 356.928c-6.61 6.605-15.27 9.91-23.932 9.91z"/>
            </svg>
            <svg class="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982">
              <path d="M131.804 106.49l75.936-75.935c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.49 81.18 30.555 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.99 6.99-6.99 18.323 0 25.312L81.18 106.49 5.24 182.427c-6.99 6.99-6.99 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0L106.49 131.8l75.938 75.937c6.99 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.323 0-25.313l-75.936-75.936z" fill-rule="evenodd" clip-rule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "switcher5"
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
  .box_4{
    background: #eee;
  }

  .input_wrapper{
    width: 80px;
    height: 40px;
    position: relative;
    cursor: pointer;
  }

  .input_wrapper input[type="checkbox"]{
    width: 80px;
    height: 40px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #315e7f;
    border-radius: 2px;
    position: relative;
    outline: 0;
    -webkit-transition: all .2s;
    transition: all .2s;
  }

  .input_wrapper input[type="checkbox"]:after{
    position: absolute;
    content: "";
    top: 3px;
    left: 3px;
    width: 34px;
    height: 34px;
    background: #dfeaec;
    z-index: 2;
    border-radius: 2px;
    -webkit-transition: all .35s;
    transition: all .35s;
  }

  .input_wrapper svg{
    position: absolute;
    top: 50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    fill: #fff;
    -webkit-transition: all .35s;
    transition: all .35s;
    z-index: 1;
  }

  .input_wrapper .is_checked{
    width: 18px;
    left: 18%;
    -webkit-transform: translateX(190%) translateY(-30%) scale(0);
    transform: translateX(190%) translateY(-30%) scale(0);
  }

  .input_wrapper .is_unchecked{
    width: 15px;
    right: 10%;
    -webkit-transform: translateX(0) translateY(-30%) scale(1);
    transform: translateX(0) translateY(-30%) scale(1);
  }

  /* Checked State */
  .input_wrapper input[type="checkbox"]:checked{
    background: #23da87;
  }

  .input_wrapper input[type="checkbox"]:checked:after{
    left: calc(100% - 37px);
  }

  .input_wrapper input[type="checkbox"]:checked + .is_checked{
    -webkit-transform: translateX(0) translateY(-30%) scale(1);
    transform: translateX(0) translateY(-30%) scale(1);
  }

  .input_wrapper input[type="checkbox"]:checked ~ .is_unchecked{
    -webkit-transform: translateX(-190%) translateY(-30%) scale(0);
    transform: translateX(-190%) translateY(-30%) scale(0);
  }

</style>
