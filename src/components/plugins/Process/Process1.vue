<template>
    <div id="process1">
      <div class="container"></div>
    </div>
</template>

<script>
    export default {
        name: "process1",
        data(){
            return {
              obj:{
                progress:0.8,
                left:10,
                top:10,
                width:150,
                height:25,
                background1:"#999",
                background2:"green",
                borderRadius:10
              }
            }
        },
        methods:{
          ProgressBar(obj){
            var container=document.querySelector(".container");
            var background=document.createElement("div");
            var progress=document.createElement("div");
            var mover=function(){
              progress.style.width=obj.progress * obj.width +"px";
            }
            //动态设置进度条背景样式
            background.style.position="relative";
            background.style.left=obj.left + "px";
            background.style.top=obj.top + "px";
            background.style.width=obj.width + "px";
            background.style.height=obj.height + "px";
            background.style.background=obj.background1;
            background.style.borderRadius=obj.borderRadius+"px";
            //动态设置border-radius:将border-radius改为borderRadius即可

            //动态设置进度条样式
            progress.setAttribute("id","progress");
            progress.style.float="left";
            progress.style.width=0 + "px";
            progress.style.cssText += ';transition:width 1000ms linear ;';//快速添加样式的方法
            // progress.style.transition="width "+ 1000 +"ms";
            progress.style.height=obj.height + "px";
            progress.style.background=obj.background2;
            progress.style.borderRadius=obj.borderRadius+"px";
            container.appendChild(background);
            background.appendChild(progress);
            setTimeout(mover);
          }
        },
        mounted(){
          this.ProgressBar(this.obj);
        }
    }
</script>

<style scoped>
  .container{
    /*将div上下左右居中的方法*/
    position: relative;
    width:200px;
    height:30px;
    margin:0 auto;
  }
</style>
