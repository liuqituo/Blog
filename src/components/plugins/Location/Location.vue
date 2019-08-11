<template>
  <div id="location">
    <div style="width: 100%; height: 650px; border: #ccc solid 1px;"   id="dituContent"></div>
  </div>
</template>

<script>
    export default {
        name: "location",
        mounted(){
          //创建和初始化地图函数：
          function initMap() {
            getLocation();//定位
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMarker();//向地图中添加marker
          }

          var position_option = {
            enableHighAccuracy : true,
            maximumAge : 30000,
            timeout : 20000
          };
          function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition,
                showError, position_option);
            } else {
              console.log("您的浏览器不支持地理定位");
            }
          }

          function showError(error) {
            console.log("不能定位！" + error.message);
          }

          var lat;
          var lon;
          function showPosition(position) {
            /*
             1. coords.latitude：估计纬度
         　　2. coords.longitude：估计经度
         　　3. coords.altitude：估计高度
         　　4. coords.accuracy：所提供的以米为单位的经度和纬度估计的精确度
         　　5. coords.altitudeAccuracy：所提供的以米为单位的高度估计的精确度
         　　6. coords.heading： 宿主设备当前移动的角度方向，相对于正北方向顺时针计算
         　　7. coords.speed：以米每秒为单位的设备的当前对地速度
            */
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            var point = new BMap.Point(lon, lat); // 创建点坐标
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs) {
              var addComp = rs.addressComponents;
              alert(addComp.province + ", " + addComp.city + ", "
                + addComp.district + ", " + addComp.street);
            });
          }

          //创建地图函数：
          function createMap() {
            var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
            //var point = new BMap.Point(115.949652, 28.693851);//定义一个中心点坐标
            var point = new BMap.Point(lon, lat);//定义一个中心点坐标
            map.centerAndZoom(point, 18);//设定地图的中心点和坐标并将地图显示在地图容器中
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.ScaleControl());
            map.addControl(new BMap.OverviewMapControl());
            map.addControl(new BMap.MapTypeControl());
            var pointMarker = new BMap.Marker(point);
            map.addOverlay(pointMarker);
            window.map = map;//将map变量存储在全局
          }

          //地图事件设置函数：
          function setMapEvent() {
            map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
            map.enableKeyboard();//启用键盘上下左右键移动地图
          }

          //地图控件添加函数：
          function addMapControl() {
            //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({
              anchor : BMAP_ANCHOR_TOP_LEFT,
              type : BMAP_NAVIGATION_CONTROL_LARGE
            });
            map.addControl(ctrl_nav);
            //向地图中添加缩略图控件
            var ctrl_ove = new BMap.OverviewMapControl({
              anchor : BMAP_ANCHOR_BOTTOM_RIGHT,
              isOpen : 1
            });
            map.addControl(ctrl_ove);
            //向地图中添加比例尺控件
            var ctrl_sca = new BMap.ScaleControl({
              anchor : BMAP_ANCHOR_BOTTOM_LEFT
            });
            map.addControl(ctrl_sca);
          }

          //标注点数组
          var markerArr = [ {
            title : "百恒网络",
            content : "电话：0791-88117053<br/>手机：15079002975",
            point : "115.950312|28.693447",
            isOpen : 1,
            icon : {
              w : 23,
              h : 25,
              l : 46,
              t : 21,
              x : 9,
              lb : 12
            }
          } ];
          //创建marker
          function addMarker() {
            for (var i = 0; i < markerArr.length; i++) {
              var json = markerArr[i];
              var p0 = json.point.split("|")[0];
              var p1 = json.point.split("|")[1];
              var point = new BMap.Point(p0, p1);
              var iconImg = createIcon(json.icon);
              var marker = new BMap.Marker(point, {
                icon : iconImg
              });
              var iw = createInfoWindow(i);
              var label = new BMap.Label(json.title, {
                "offset" : new BMap.Size(json.icon.lb - json.icon.x + 10, -20)
              });
              marker.setLabel(label);
              map.addOverlay(marker);
              label.setStyle({
                borderColor : "#808080",
                color : "#333",
                cursor : "pointer"
              });

              (function() {
                var index = i;
                var _iw = createInfoWindow(i);
                var _marker = marker;
                _marker.addEventListener("click", function() {
                  this.openInfoWindow(_iw);
                });
                _iw.addEventListener("open", function() {
                  _marker.getLabel().hide();
                })
                _iw.addEventListener("close", function() {
                  _marker.getLabel().show();
                })
                label.addEventListener("click", function() {
                  _marker.openInfoWindow(_iw);
                })
                if (!!json.isOpen) {
                  label.hide();
                  _marker.openInfoWindow(_iw);
                }
              })()
            }
          }
          //创建InfoWindow
          function createInfoWindow(i) {
            var json = markerArr[i];
            var iw = new BMap.InfoWindow(
              "<b class='poi_title' title='" + json.title + "'>"
              + json.title + "</b><div class='poi_content'>"
              + json.content + "</div>");
            return iw;
          }
          //创建一个Icon
          function createIcon(json) {
            var icon = new BMap.Icon("http://map.baidu.com/image/us_cursor.gif",
              new BMap.Size(json.w, json.h), {
                imageOffset : new BMap.Size(-json.l, -json.t),
                infoWindowOffset : new BMap.Size(json.lb + 5, 1),
                offset : new BMap.Size(json.x, json.h)
              })
            return icon;
          }

          initMap();//创建和初
        }
    }
</script>

<style scoped>
  >>>.poi_title {
    color: #CC5522;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    padding-right: 13px;
    white-space: nowrap
  }

  >>>.poi_content {
    font: 12px arial, sans-serif;
    overflow: visible;
    padding-top: 4px;
    white-space: -moz-pre-wrap;
    word-wrap: break-word
  }
</style>
