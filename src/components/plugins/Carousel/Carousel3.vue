<template>
  <div id="carousel3">
    <div class="stage">
      <ul id="zhuang">
        <li class="left2"><img src="./img/image5.jpg" alt=""></li>
        <li class="left1"><img src="./img/image6.jpg" alt=""></li>
        <li class="king"><img src="./img/image7.jpg" alt=""></li>
        <li class="right1"><img src="./img/image8.jpg" alt=""></li>
        <li class="right2"><img src="./img/image4.jpg" alt=""></li>
        <li class="bench-warmer"><img src="./img/image1.jpg" alt=""></li>
        <li class="bench-warmer"><img src="./img/image2.jpg" alt=""></li>
        <li class="bench-warmer"><img src="./img/image3.jpg" alt=""></li>
        <li class="bench-warmer"><img src="./img/image4.jpg" alt=""></li>
      </ul>
      <span id="pre">&lt;</span>
      <span id="next">&gt;</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "carousel3",
        mounted(){
          var pre = document.getElementById('pre');
          var next = document.getElementById('next');
          var zhuang = document.getElementById('zhuang');
          var lis = zhuang.getElementsByTagName('li');
          var lock = false;
          var classes = ['left2', 'left1', 'king', 'right1', 'right2', 'bench-warmer', 'bench-warmer', 'bench-warmer', 'bench-warmer'];
          pre.onclick = function() {
            // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
            // 一单击的时候就锁住动画， 所以单击的时候让lock = true;
            if (lock == true) {
              return;
            }
            // 锁定
            lock = true;

            setTimeout(function() {
              lock = false;
            }, 2000)
            // 将classes的第一个取出来， 放在最后一个位置
            var firstclass = classes.shift();
            classes.push(firstclass);
            console.log(classes);
            // 然后将classes给相应的class
            for (var i = 0; i < classes.length; i++) {
              lis[i].className = classes[i];
            }
          }
          next.onclick = function() {
            // 在动画播放的时候将锁锁住，判断动画是否在播放，如果在播放，锁住，终止函数的执行用return，没播放就解锁，所以默认是解锁的；
            // 一单击的时候就锁住动画， 所以单击的时候让lock = true;
            if (lock == true) {
              return;
            }
            // 锁定
            lock = true;

            setTimeout(function() {
              lock = false;
            }, 2000)
            // var lastclass = classes.pop();
            classes.unshift(classes.pop());
            console.log(classes);
            for (var i = 0; i < classes.length; i++) {
              lis[i].className = classes[i];
            }
          }
        }
    }
</script>

<style scoped>
  .stage {
    width: 100px;
    height: 140px;
    margin: 10px auto;
    perspective: 1800px;
    position: relative;
  }

  img {
    width:100%;
    height:100%;
    vertical-align: middle;
  }

  .stage ul {
    width: 100px;
    height: 140px;
    list-style: none;
  }

  .stage ul li {
    width: 100px;
    height: 140px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 2s ease 0s;
  }

  .stage ul .left2 {
    transform: rotateY(15deg) translateX(-140px) translateZ(-70px);
    z-index: 7;
  }

  .stage ul .left1 {
    transform: rotateY(20deg) translateX(-190px) translateZ(70px);
    z-index: 8;
  }

  .stage ul .king {
    transform: scale(1.5);
    z-index: 9;
  }

  .stage ul .right1 {
    transform: rotateY(-20deg) translateX(140px) translateZ(-70px);
    z-index: 8;
  }

  .stage ul .right2 {
    transform: rotateY(-15deg) translateX(190px) translateZ(-70px);
    z-index: 7;
  }

  .stage ul .bench-warmer {
    z-index: 5;
  }

  .stage span {
    display: block;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 255, .5);
    z-index: 20;
    position: absolute;
    color: #fff;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    margin-top: -30px;
    cursor: pointer;
  }

  #pre {
    top: 90px;
    left: -240px;
  }

  #next {
    top: 90px;
    right: -240px;
  }
</style>
