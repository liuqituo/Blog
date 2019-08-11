<template>
    <div id="switcher4">
      <div class="wrapper">
        <div class="switch_box box_3">
          <div class="toggle_switch">
            <input type="checkbox" class="switch_3">
            <svg class="checkbox" xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 168 80">
              <path class="outer-ring" d="M41.534 9h88.932c17.51 0 31.724 13.658 31.724 30.482 0 16.823-14.215 30.48-31.724 30.48H41.534c-17.51 0-31.724-13.657-31.724-30.48C9.81 22.658 24.025 9 41.534 9z" fill="none" stroke="#233043" stroke-width="3" stroke-linecap="square" stroke-miterlimit="3"/>
              <path class="is_checked" d="M17 39.482c0-12.694 10.306-23 23-23s23 10.306 23 23-10.306 23-23 23-23-10.306-23-23z"/>
              <path class="is_unchecked" d="M132.77 22.348c7.705 10.695 5.286 25.617-5.417 33.327-2.567 1.85-5.38 3.116-8.288 3.812 7.977 5.03 18.54 5.024 26.668-.83 10.695-7.706 13.122-22.634 5.418-33.33-5.855-8.127-15.88-11.474-25.04-9.23 2.538 1.582 4.806 3.676 6.66 6.25z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "switcher4"
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
  .box_3{
    background: #19232b;
  }

  .toggle_switch{
    width: 100px;
    height: 45px;
    position: relative;
  }

  input[type="checkbox"].switch_3{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    outline: 0;
    z-index: 1;
  }

  svg.checkbox .outer-ring{
    stroke-dasharray: 375;
    stroke-dashoffset: 375;
    -webkit-animation: resetRing .35s ease-in-out forwards;
    animation: resetRing .35s ease-in-out forwards;
  }

  input[type="checkbox"].switch_3:checked + svg.checkbox .outer-ring{
    -webkit-animation: animateRing .35s ease-in-out forwards;
    animation: animateRing .35s ease-in-out forwards;
  }

  input[type="checkbox"].switch_3:checked + svg.checkbox .is_checked{
    opacity: 1;
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
  }

  input[type="checkbox"].switch_3:checked + svg.checkbox .is_unchecked{
    opacity: 0;
    -webkit-transform: translateX(-200%) rotate(180deg);
    transform: translateX(-200%) rotate(180deg);
  }


  svg.checkbox{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  svg.checkbox .is_checked{
    opacity: 0;
    fill: yellow;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: translateX(200%) rotate(45deg);
    transform: translateX(200%) rotate(45deg);
    -webkit-transition: all .35s;
    transition: all .35s;
  }

  svg.checkbox .is_unchecked{
    opacity: 1;
    fill: #fff;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: translateX(0) rotate(0deg);
    transform: translateX(0) rotate(0deg);
    -webkit-transition: all .35s;
    transition: all .35s;
  }

  @-webkit-keyframes animateRing{
    to{
      stroke-dashoffset: 0;
      stroke: #b0aa28;
    }
  }

  @keyframes animateRing{
    to{
      stroke-dashoffset: 0;
      stroke: #b0aa28;
    }
  }

  @-webkit-keyframes resetRing{
    to{
      stroke-dashoffset: 0;
      stroke: #233043;
    }
  }

  @keyframes resetRing{
    to{
      stroke-dashoffset: 0;
      stroke: #233043;
    }
  }

</style>
