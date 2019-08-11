<template>
<div id="process4">
  <ul id="canvas">
    <li>
      <canvas class="canvas" width="300" height="300"></canvas>
      <span>70%</span>
    </li>
  </ul>
  <canvas id="cvs"></canvas>
</div>
</template>

<script>
    export default {
        name: "process4",
        mounted(){
            var canUl = document.getElementById("canvas");
            var li = canUl.getElementsByTagName("li");
            var can = canUl.getElementsByTagName("canvas");
            var pecent = canUl.getElementsByTagName("span");
            var can_arr = [];

            function Cavas_pecent(json) {
              this.w = json.w;
              this.h = json.h;
              this.timer = null;
              this.deg = 0;
              this.new_deg = json.new_deg,
                this.obj = json.obj;
              this.color = json.color;
              this.stroke_color = json.stroke_color;
              this.pecent_f = json.pecent_f;
              this.lineWidth = json.lineWidth;
              this.bg_color = json.bg_color;
            }
            Cavas_pecent.prototype.draw = function() {
              var txt = this.deg + "%";
              this.obj.lineCap = "round";
              this.obj.lineWidth = this.lineWidth;
              this.obj.strokeStyle = this.stroke_color;
              this.obj.beginPath();
              this.obj.arc(this.w / 2, this.h / 2, this.w / 2 - this.lineWidth, 0, this.deg / 100 * Math.PI * 2);
              this.obj.fillStyle = "#a24565";
              this.obj.font = "25px Arial";
              this.obj.fillText(txt, 150 - this.obj.measureText(txt).width / 2, 150);
              this.obj.stroke();
            }
            Cavas_pecent.prototype.drawBg = function() {
              this.obj.beginPath();
              this.obj.strokeStyle = this.bg_color;
              this.obj.arc(this.w / 2, this.h / 2, this.w / 2 - this.lineWidth, 0, 100 * Math.PI * 2);
              this.obj.stroke();
              this.obj.save();
              return this;
            }
            Cavas_pecent.prototype.go_draw = function() {
              var _this = this;
              _this.timer = setInterval(function() {
                if (_this.deg == _this.pecent_f) {
                  clearInterval(_this.timer);
                } else {
                  _this.deg++;
                  _this.obj.clearRect(0, 0, 300, 300);
                  _this.drawBg().draw()
                }
              }, 30)
            }
            for (var i = 0; i < can.length; i++) {
              can_arr[i] = new Cavas_pecent({
                w: li[i].offsetWidth,
                h: li[i].offsetHeight,
                obj: can[i].getContext("2d"),
                color: "#a24565",
                stroke_color: "#a24565",
                pecent_f: parseInt(pecent[i].innerText),
                lineWidth: 5,
                bg_color: "#fff"
              })
              can_arr[i].go_draw();
            }
        }
    }
</script>

<style scoped>
  ul {
    list-style:none;
    overflow:hidden;
    width:1200px;
    margin:0 auto;
  }
  li {
    width:300px;
    height:300px;
    float:left;
  }
  #process4{
    width:300px;
    height:300px;
    margin: 10px auto;
  }
</style>
