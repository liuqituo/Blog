<template>
    <div id="date2">
      <div class="calendar">
        <div class="title">
          <h1 class="green" id="calendar-title">Month</h1>
          <h2 class="green" id="calendar-year">Year</h2>
          <a href="" id="pre"></a>
          <a href="" id="next"></a>
        </div>

        <div class="body">
          <div class="lightgrey body-list">
            <ul>
              <li>SUN</li>
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
            </ul>
          </div>

          <div class="darkgrey body-list">
            <ul id="days"></ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "date2",
        mounted(){
          var month_olypic = [31,29,31,30,31,30,31,31,30,31,30,31];//闰年每个月份的天数
          var month_normal = [31,28,31,30,31,30,31,31,30,31,30,31];
          var month_name =["January","Febrary","March","April","May","June","July","Auguest","September","October","November","December"];
          //获取以上各个部分的id
          var holder = document.getElementById("days");
          var prev = document.getElementById("prev");
          var next = document.getElementById("next");
          var ctitle = document.getElementById("calendar-title");
          var cyear = document.getElementById("calendar-year");
          //获取当天的年月日
          var my_date = new Date();
          var my_year = my_date.getFullYear();//获取年份
          var my_month = my_date.getMonth(); //获取月份，一月份的下标为0
          var my_day = my_date.getDate();//获取当前日期

          //根据年月获取当月第一天是周几
          function dayStart(month,year){
            var tmpDate = new Date(year, month, 1);
            return (tmpDate.getDay());
          }
          //根据年份判断某月有多少天(11,2018),表示2018年12月
          function daysMonth(month, year){
            var tmp1 = year % 4;
            var tmp2 = year % 100;
            var tmp3 = year % 400;

            if((tmp1 == 0 && tmp2 != 0) || (tmp3 == 0)){
              return (month_olypic[month]);//闰年
            }else{
              return (month_normal[month]);//非闰年
            }
          }
          //js实现str插入li+class,不要忘了用innerhtml进行插入
          function refreshDate(){
            var str = "";
            //计算当月的天数和每月第一天都是周几，day_month和day_year都从上面获得
            var totalDay = daysMonth(my_month,my_year);
            var firstDay = dayStart(my_month, my_year);
            //添加每个月的空白部分
            for(var i = 0; i < firstDay; i++){
              str += "<li>"+"</li>";
            }

            //从一号开始添加知道totalDay，并为pre，next和当天添加样式
            var myclass;
            for(var i = 1; i <= totalDay; i++){
              //三种情况年份小，年分相等月份小，年月相等，天数小
              //点击pre和next之后，my_month和my_year会发生变化，将其与现在的直接获取的再进行比较
              //i与my_day进行比较,pre和next变化时，my_day是不变的
              if((my_year < my_date.getFullYear())||(my_year == my_date.getFullYear() && my_month < my_date.getMonth()) || (my_year == my_date.getFullYear() && my_month == my_date.getMonth() && i < my_day)){
                myclass = " class='lightgrey'";
              }else if(my_year == my_date.getFullYear() && my_month == my_date.getMonth() && i == my_day){
                myclass = "class = 'green greenbox'";
              }else{
                myclass = "class = 'darkgrey'";
              }
              str += "<li "+myclass+">"+i+"</li>";
            }
            holder.innerHTML = str;
            ctitle.innerHTML = month_name[my_month];
            cyear.innerHTML = my_year;
          }
          //调用refreshDate()函数，日历才会出现
          refreshDate();
          //实现onclick向前或向后移动
          pre.onclick = function(e){
            e.preventDefault();
            my_month--;
            if(my_month < 0){
              my_year--;
              my_month = 11; //即12月份
            }
            refreshDate();
          }

          next.onclick = function(e){
            e.preventDefault();
            my_month++;
            if(my_month > 11){
              my_month = 0;
              my_year++;
            }
            refreshDate();
          }
        }
    }
</script>

<style scoped>
  .calendar{
    margin: 10px auto;
    width: 450px;
    height: 350px;
    background: white;
    box-shadow: 0px 1px 1px rgba(0,0,0,.1);
  }

  .title{
    height: 70px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    position: relative;
    text-align: center;
    line-height: 15px;
  }

  #calendar-title{
    font-size: 25px;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    padding: 14px 0 0 0;
  }

  #calendar-year{
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
  }

  #pre{
    position: absolute;
    top: 0px;
    left: 0px;
    background: url(./img/left.png) no-repeat;
    background-size: 50%;
    background-position: 10px 20px;

    /*没规定大小时，图片显示 0X0*/
    width: 60px;
    height: 70px;
  }
  #next{
    position: absolute;
    top: 0px;
    right: 0px;
    background: url(./img/right.png) no-repeat;
    background-size: 50%;
    background-position: 10px 20px;
    width: 60px;
    height: 70px;
  }

  >>>.body-list ul{
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 100%;
    box-sizing: border-box;

  }

  >>>.body-list ul li{
    list-style: none;
    /*
    display:inline-block;
    width: 13.3%;
    */

    /*100/7 = 14.28%*/
    display: block;
    width: 14.28%;
    float: left;

    /*规定行高，垂直居中*/
    height: 36px;
    line-height: 36px;
    box-sizing: border-box;
    text-align: center;

  }


  >>>.green{
    color:#6ac13c;
    list-style: none;
  }

  >>>.lightgrey{ /*浅灰色显示过去的日期*/
    color:#a8a8a8;
  }
  >>>.darkgrey{ /*深灰色显示将来的日期*/
    color:#565656;
  }

  /*日期当天用绿色背景绿色文字加以显示*/
  >>>.greenbox{
    border: 1px solid #6ac13c;
    background: #e9f8df;
  }
</style>
