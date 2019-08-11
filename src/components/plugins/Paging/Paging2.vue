<template>
    <div id="paging2">
      <ul class="pagination" id="pageDIV">
      </ul>
    </div>
</template>

<script>
    export default {
        name: "paging2",
        methods:{
          PageList(pageContentID,option){
            this.pageContentID=document.getElementById(pageContentID);
            this.curPage=option.curPage;
            this.totalCount=option.totalCount;
            this.pageRows=option.pageRows;
            this.callback=option.callback;
            this.pageSize=Math.ceil(this.totalCount/this.pageRows);
            this.init = function(){
              this.renderbtn();
            },
              this.firstpage = function(){
              var _self=this;
              _self._firstpage=document.createElement("li");
              _self._firstpageA=document.createElement("a");
              _self._firstpageA.innerHTML="首页";
              _self._firstpage.appendChild(_self._firstpageA);
              this.pageContentID.appendChild(_self._firstpage);
              _self._firstpage.onclick=function(){
                _self.gotopage(1);
              }
            },
              this.lastpage = function () {
              var _self=this;
              _self._lastpage=document.createElement("li");
              _self._lastpageA=document.createElement("a");
              _self._lastpageA.innerHTML="尾页";
              _self._lastpage.appendChild(_self._lastpageA);
              this.pageContentID.appendChild(_self._lastpage);
              _self._lastpage.onclick= function () {
                _self.gotopage(_self.pageSize);
              }
            },
              this.prewpage = function () {
              var _self=this;
              _self._prew=document.createElement("li");
              _self._prewA=document.createElement("a");
              _self._prewA.innerHTML="<<";
              _self._prew.appendChild(_self._prewA);
              this.pageContentID.appendChild(_self._prew);
              _self._prew.onclick= function () {
                if(_self.curPage>1){
                  _self.curPage--;
                }
                _self.callback.call(this,this.curPage);
                _self.init();
                console.log(_self.curPage);
              }
            },
              this.nextpage = function () {
              var _self=this;
              _self._next=document.createElement("li");
              _self._nextA=document.createElement("a");
              _self._nextA.innerHTML=">>";
              _self._next.appendChild(_self._nextA);
              this.pageContentID.appendChild(_self._next);
              _self._next.onclick= function () {
                if(_self.curPage<_self.pageSize){
                  _self.curPage++;
                }
                _self.callback.call(this,this.curPage);
                _self.init();
                console.log(_self.curPage);
              }
            },
              this.pagenum = function () {
              var _self=this;
              if(this.pageSize<=10){
                for(var i= 1,len=this.pageSize;i<=len;i++){
                  _self._num=document.createElement("li");
                  _self._numA=document.createElement("a");
                  _self._numA.innerHTML=i;
                  _self._num.appendChild(_self._numA);
                  this.pageContentID.appendChild(_self._num);
                  _self._num.onclick= function () {
                    var curpage = $(this).text();
                    _self.gotopage(curpage);
                  }
                }
              }
              else{
                if(_self.curPage<=10){
                  for(var i= 1;i<=10;i++){
                    _self._num=document.createElement("li");
                    _self._numA=document.createElement("a");
                    _self._numA.innerHTML=i;
                    _self._num.appendChild(_self._numA);
                    this.pageContentID.appendChild(_self._num);
                    _self._num.onclick= function () {
                      var curpage = $(this).text();
                      _self.gotopage(curpage);
                    }
                  }
                }
                else if(_self.curPage>10&&_self.curPage<=this.pageSize){
                  if(this.pageSize<Math.ceil(_self.curPage/10)*10){
                    for(var i=Math.floor(_self.curPage/10)*10+1;i<=this.pageSize;i++){
                      if(_self.curPage>this.pageSize)
                        return;
                      _self._num=document.createElement("li");
                      _self._numA=document.createElement("a");
                      _self._numA.innerHTML=i;
                      _self._num.appendChild(_self._numA);
                      this.pageContentID.appendChild(_self._num);
                      _self._num.onclick= function () {
                        var curpage = $(this).text();
                        _self.gotopage(curpage);
                      }
                    }
                  }else{
                    if(Math.ceil(_self.curPage/10)*10==_self.curPage){
                      for(var i=_self.curPage-9;i<=_self.curPage;i++){
                        _self._num=document.createElement("li");
                        _self._numA=document.createElement("a");
                        _self._numA.innerHTML=i;
                        _self._num.appendChild(_self._numA);
                        this.pageContentID.appendChild(_self._num);
                        _self._num.onclick= function () {
                          var curpage = $(this).text();
                          _self.gotopage(curpage);
                        }
                      }
                    }else{
                      for(var i=Math.floor(_self.curPage/10)*10+1;i<=Math.ceil(_self.curPage/10)*10;i++){
                        _self._num=document.createElement("li");
                        _self._numA=document.createElement("a");
                        _self._numA.innerHTML=i;
                        _self._num.appendChild(_self._numA);
                        this.pageContentID.appendChild(_self._num);
                        _self._num.onclick= function () {
                          var curpage = $(this).text();
                          _self.gotopage(curpage);
                        }
                      }
                    }
                  }
                }
              }
              $(".pagination li").each(function(){
                if($(this)[0].innerText==_self.curPage){
                  $(".pagination li").children("a").removeClass("navcur");
                  $(this).children("a").addClass("navcur");
                }
              });
            },
              this.gotopage = function (curpage) {
              this.curPage=curpage;
              this.callback.call(this,this.curPage);
              this.init();
              console.log(this.curPage);
            },
              this.renderbtn = function () {
              $(".pagination").html("");
              this.firstpage();
              this.prewpage();
              this.pagenum();
              this.nextpage();
              this.lastpage();
            }
          },
        },
      mounted(){
          var pager = new this.PageList("pageDIV",{
            curPage:1,
            totalCount:26,
            pageRows:1,
            callback:callbackFuc
          });
        function callbackFuc(curpage){
        }
          pager.init();
      }
    }
</script>

<style scoped>
  >>>.pagination{
    margin-top: 10px;
    margin-bottom: 10px;
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
  }
  >>>.pagination>li {
    display: inline;
  }
  >>>.pagination>li:first-child>a{
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  >>>.pagination>li>a{
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  >>>.pagination>li>a.navcur{
    background: #cccccc;
    color: #ffffff;
  }
</style>
