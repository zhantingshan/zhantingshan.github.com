// JavaScript Document


/* rot= function(pers) {
         num = pers*360;
		 right = document.getElementsByClassName("right");
		 left = document.getElementsByClassName("left");
        if (num<=180) {
			left[0].style.transform= "rotate(0deg)";
			right[0].style.transform= "rotate("+num+"deg)";
        } else {
           
			right[0].style.transform= "rotate(180deg)";
			left[0].style.transform= "rotate("+(num-180)+"deg)";
        }
    };

*/


 function init1() {
  pAry = document.getElementsByClassName("playbtn");
   mask= document.getElementsByClassName("mask");
   sname=document.getElementsByClassName("sname")[0].childNodes[0];
   aname=document.getElementsByClassName("aname")[0].childNodes[0];
   songn=document.getElementsByClassName("songn");
   singn=document.getElementsByClassName("singn");
 for( var i=0; i<pAry.length; i++ ) {
    pAry[i].i = i;
	pAry[i].flag=1;
	
	
    pAry[i].onclick = function() {
	aud = document.getElementById("aud");
	aud.src = "music/"+this.i+".mp3";
	mask[0].style.backgroundImage="url(pic/bucky"+this.i+".jpg)";
	
	sname.innerHTML=""+this.t;
	aname.innerHTML=""+this.t;
	
	aud.addEventListener("playing", function(){
    audioStatus = "playing";
	var interval = setInterval(function() {  
        var per = Math.round(aud.currentTime)/Math.round(aud.duration) * 100;  
        cper = per+ "%" ;  
        //rot(cper);   
		num = parseInt(cper)*3.6;
		 right = document.getElementsByClassName("right");
		 left = document.getElementsByClassName("left");
        if (num<=180) {
			left[0].style.transform= "rotate(0deg)";
			right[0].style.transform= "rotate("+num+"deg)";
        } else {
           
			right[0].style.transform= "rotate(180deg)";
			left[0].style.transform= "rotate("+(num-180)+"deg)";
        }             
    },500);
});
    aud.addEventListener("pause", function(){
    audioStatus = "paused";
});

	if(this.flag){
	aud.play();	
	
	var music=aud.src;
	var smusic=music.split("/")
    var index=parseInt(smusic[7].substr(0,1));
	songn=document.getElementsByClassName("songn")[index].childNodes[0];
	sname.innerHTML=songn.innerHTML;
	singn=document.getElementsByClassName("singn")[index].childNodes[0];
	aname.innerHTML=singn.innerHTML;
	
	this.innerHTML="&#xe644;"
	for(var i=0;i<4;i++){
		if(i!=this.i){
		pAry[i].flag=1;
		pAry[i].innerHTML="&#xe600;";}
		}
	this.flag=0;
	}else{
	var music=aud.src;
	var smusic=music.split("/")
    var index=parseInt(smusic[7].substr(0,1));
	songn=document.getElementsByClassName("songn")[index].childNodes[0];
	sname.innerHTML=songn.innerHTML;
	singn=document.getElementsByClassName("singn")[index].childNodes[0];
	aname.innerHTML=singn.innerHTML;	
			
				
		aud.pause();
		this.flag=1;
		this.innerHTML="&#xe600;"
		
		
		}
		
     }
   }
 }
init1() ;




//获取元素样式
function getStyle(ele){
	var style=null;
	if(window.getComputedStyle){
	style=window.getComputedStyle(ele,null);}else{
		
		style=ele.currentStyle;
		
		
		
		}
	return style;
	
}
    
	lslider=document.getElementById('fleft');
    rslider=document.getElementById('fright');
	lslider.onclick=function(){
	var music=aud.src;
	var smusic=music.split("/")
    var index=parseInt(smusic[7].substr(0,1));
	 pAry[index].innerHTML="&#xe600;";
     var innext=index-1;
	 if(innext<0) innext=3;
	 pAry[innext].flag=0;
	 
	 songn=document.getElementsByClassName("songn")[innext].childNodes[0];
	sname.innerHTML=songn.innerHTML;
	singn=document.getElementsByClassName("singn")[innext].childNodes[0];
	aname.innerHTML=singn.innerHTML;
	mask[0].style.backgroundImage="url(pic/bucky"+innext+".jpg)";
	 
	 pAry[innext].innerHTML="&#xe644;";
    aud.src="music/"+innext+".mp3";
	
	aud.play();	
	}
	
	rslider.onclick=function(){
	var music=aud.src;
	var smusic=music.split("/")
    var index=parseInt(smusic[7].substr(0,1));
	 pAry[index].innerHTML="&#xe600;";
	 
     var innext=index+1;
	 if(innext>=4) innext=0;
	 
	 songn=document.getElementsByClassName("songn")[innext].childNodes[0];
	sname.innerHTML=songn.innerHTML;
	singn=document.getElementsByClassName("singn")[innext].childNodes[0];
	aname.innerHTML=singn.innerHTML;
	mask[0].style.backgroundImage="url(pic/bucky"+innext+".jpg)";
	
	 pAry[innext].flag=0;
	 pAry[innext].innerHTML="&#xe644;";
    aud.src="music/"+innext+".mp3";
	
	aud.play();	
	
	
	}
	
	
	
	
function slider(){
	touch=('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
	
	if(touch) {
	lslider.addEventListener('touchstart',handleEvent,false);
	rslider.addEventListener('touchstart',handleEvent,false)};
	 
	//addEventListener第二个参数可以传一个对象，会调用该对象的handleEvent属性
    
	
	}
	
//滑动开始 
function start(event){
var touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
startPos = {x:touch.pageX,y:touch.pageY,time:+new Date}; //取第一个touch的坐标值
isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
lslider.addEventListener('touchmove',handleEvent,false);
lslider.addEventListener('touchend',handleEvent,false);
rslider.addEventListener('touchmove',handleEvent,false);
rslider.addEventListener('touchend',handleEvent,false);
}
//移动 
function move(event){
//当屏幕有多个touch或者页面被缩放过，就不执行move操作
if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
var touch = event.targetTouches[0];
endPos = {x:touch.pageX - startPos.x,y:touch.pageY - startPos.y};
isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1:0; //isScrolling为1时，表示纵向滑动，0为横向滑动
if(isScrolling === 0){
event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
//this.slider.className = 'cnt';
//this.slider.style.left = -this.index*600 + endPos.x + 'px';
}
}
//滑动释放 
function end(event){
var duration = +new Date - startPos.time; //滑动的持续时间
if(isScrolling === 0){ //当为水平滚动时
//this.icon[this.index].className = '';
if(Number(duration) > 10){
//判断是左移还是右移，当偏移量大于10时执行
if(endPos.x > 10){
//右
var ev = event|| window.event;
var obj = ev.target || ev.srcElement;
var music=aud.src;
var index=parseInt(music.substr(6,1));
var innext=index+1;
aud.src="music/"+innext+".mp3";
}else if(endPos.x < -10){
//左
}}}}






handleEvent=function (event){
if(event.type == 'touchstart'){
start(event);
}else if(event.type == 'touchmove'){
move(event);
}else if(event.type == 'touchend'){
end(event);
}
}

slider();

