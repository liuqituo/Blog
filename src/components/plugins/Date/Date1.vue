<template>
  <div id="date1">
    <div id="cldFrame">
      <div id="cldBody">
        <table>
          <thead>
          <tr>
            <td colspan="7">
              <div id="top">
                <span id="left" @click="preMonth">&lt;</span>
                <span id="topDate"></span>
                <span id="right" @click="nextMonth">&gt;</span>
              </div>
            </td>
          </tr>
          <tr id="week">
            <td>日</td>
            <td>一</td>
            <td>二</td>
            <td>三</td>
            <td>四</td>
            <td>五</td>
            <td>六</td>
          </tr>
          </thead>
          <tbody id="tbody">
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "date1",
        data(){
            return {
              monthDay:[31,0,31,30,31,30,31,31,30,31,30,31],
          }
        },
        methods:{
          /*判断某年是否是闰年*/
          isLeap(year) {
            if((year%4==0 && year%100!=0) || year%400==0){
              return true;
            }
            else{
              return false;
            }
          },
          /*判断某年某月某日是星期几，默认日为1号*/
          whatDay(year, month, day=1) {
            let monthDay = [31,0,31,30,31,30,31,31,30,31,30,31];
            var sum = 0;
            sum += (year-1)*365+Math.floor((year-1)/4)-Math.floor((year-1)/100)+Math.floor((year-1)/400)+day;
            for(var i=0; i<month-1; i++){
              sum += monthDay[i];
            }
            if(month > 2){
              if(this.isLeap(year)){
                sum += 29;
              }
              else{
                sum += 28;
              }
            }
            return sum%7;      //余数为0代表那天是周日，为1代表是周一，以此类推
          },
          /*显示日历*/
      showCld(year, month, firstDay){
            let monthDay = [31,0,31,30,31,30,31,31,30,31,30,31];
            var i;
            var tagClass = "";
            var nowDate = new Date();
            var days;//从数组里取出该月的天数
            if(month == 2){
              if(this.isLeap(year)){
                days = 29;
              }
              else{
                days = 28;
              }
            }
            else{
              days = monthDay[month-1];
            }

            /*当前显示月份添加至顶部*/
            var topdateHtml = year + "年" + month + "月";
            var topDate = document.getElementById('topDate');
            topDate.innerHTML = topdateHtml;

            /*添加日期部分*/
            var tbodyHtml = '<tr>';
            for(i=0; i<firstDay; i++){//对1号前空白格的填充
              tbodyHtml += "<td></td>";
            }
            var changLine = firstDay;
            for(i=1; i<=days; i++){//每一个日期的填充
              if(year === nowDate.getFullYear() && month === nowDate.getMonth()+1 && i === nowDate.getDate()) {
                tagClass = "curDate";//当前日期对应格子
                tbodyHtml += `<td style="color: red">${i}</td>`
              }
              else{
                tagClass = "isDate";//普通日期对应格子，设置class便于与空白格子区分开来
                tbodyHtml += `<td class="isDate">${i}</td>`
              }

              changLine = (changLine+1)%7;
              if(changLine == 0 && i != days){//是否换行填充的判断
                tbodyHtml += "</tr><tr>";
              }
            }
            if(changLine!=0){//添加结束，对该行剩余位置的空白填充
              for (i=changLine; i<7; i++) {
                tbodyHtml += "<td></td>";
              }
            }//实际上不需要填充后方，但强迫症必须整整齐齐！
            tbodyHtml +="</tr>";
            var tbody = document.getElementById('tbody');
            tbody.innerHTML = tbodyHtml;
          },
          nextMonth(){
            var topStr = document.getElementById("topDate").innerHTML;
            var pattern = /\d+/g;
            var listTemp = topStr.match(pattern);
            var year = Number(listTemp[0]);
            var month = Number(listTemp[1]);
            var nextMonth = month+1;
            if(nextMonth > 12){
              nextMonth = 1;
              year++;
            }
            document.getElementById('topDate').innerHTML = '';
            this.showCld(year, nextMonth, this.whatDay(year, nextMonth));
        },
        preMonth(){
              var topStr = document.getElementById("topDate").innerHTML;
              var pattern = /\d+/g;
              var listTemp = topStr.match(pattern);
              var year = Number(listTemp[0]);
              var month = Number(listTemp[1]);
              var preMonth = month-1;
              if(preMonth < 1){
                preMonth = 12;
                year--;
              }
              document.getElementById('topDate').innerHTML = '';
          this.showCld(year, preMonth, this.whatDay(year, preMonth));
            }
        },
          mounted(){
            var curDate = new Date();
            var curYear = curDate.getFullYear();
            var curMonth = curDate.getMonth() + 1;
            this.showCld(curYear,curMonth,this.whatDay(curYear,curMonth));
          }
        }
</script>

<style scoped>
  #cldFrame{
    position: relative;
    width: 440px;
    margin:5px auto;
  }
  #cldBody{
    margin: 10px;
    position: absolute;
    width: 420px;
  }
  #top{
    position: relative;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
  #topDate{
    font-size: 30px;
  }
  table{
    background-color: #f7f7f7;
  }
  #week td{
    font-size: 15px;
  }
  td{
    height: 80px;
    width: 50px;
    text-align: center;
    font-family: Simsun;
    font-size: 20px;
  }
  #left, #right{
    position: absolute;
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
  #left{left: 0px;}
  #right{right: 0px;}
  #left:hover, #right:hover{
    background-color: rgba(30, 30, 30, 0.2);
  }
</style>
