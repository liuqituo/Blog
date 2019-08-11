<template>
  <div id="carousel2">
      <!--创建一个ul，用于放置图片-->
      <ul id="imgList">
        <li><img src="./img/image1.jpg"></li>
        <li><img src="./img/image3.jpg"></li>
        <li><img src="./img/image4.jpg"></li>
        <li><img src="./img/image5.jpg"></li>
        <li><img src="./img/image6.jpg"></li>
        <li><img src="./img/image2.jpg"></li>
      </ul>
      <!--创建导航按钮-->
      <div id="navdiv">
        <div @click="move(0)"></div>
        <div @click="move(1)"></div>
        <div @click="move(2)"></div>
        <div @click="move(3)"></div>
        <div @click="move(4)"></div>
        <div @click="move(5)"></div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "carousel2",
        methods:{
            move(index,item){
              let imgList = document.querySelector("#imgList");
              imgList.style.left = `${-40 + index*-300}px`;
              let imgs = document.querySelectorAll("#navdiv>div");
              imgs.forEach((item) => {
                if(item.style.background === 'red'){
                  item.style.background = '#ccc';
                }
              });
              event.srcElement.style.background = 'red';
            }
        },
        mounted(){
        },
    }
</script>

<style scoped>
  #carousel2{
    width:300px;
    height:100px;
    margin:10px auto;
    position: relative;
    background: red;
    overflow: hidden;
  }
  #imgList{
    list-style: none;
    width:1800px;
    top:-15px;
    left:-40px;
    display: flex;
    position: absolute;
    transition: all 1s ease;
  }
  #imgList li{
    flex-grow:1;
    height:100px;
  }
  #imgList li img{
    height:100%;
    width:100%;
  }
  #navdiv{
    position: absolute;
    width:100%;
    height:15px;
    bottom:10px;
    display: flex;
    justify-content: center;
  }
  #navdiv div{
    width:15px;
    height:15px;
    margin:0 10px;
    background: #ccc;
  }
</style>
