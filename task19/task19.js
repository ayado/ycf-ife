// JavaScript Document
var numlist=document.getElementById("numlist");
var list=[]; //用于渲染列表的数据
var snapshots = []; //快照集合
var timer = null; //定时
var interval=200;
// 随机生成颜色
function getRandomColor(){ 
    var c = '#'; 
    var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']; 
    for(var i = 0; i < 6;i++) { 
        var cIndex = Math.round(Math.random()*15); 
        c += cArray[cIndex]; 
        } 
    return c; 
} 
//渲染列表
function renderchart(arr){
	var array=arr||list;
	var str="";
	for(var i=0;i<list.length;i++){
		str+="<div class='listitem' style='height:"+array[i]*3+"px;background-color:"+getRandomColor()+"'>"+"<span id='"+i+"' onclick='deleteitem(this)'>"+"</span></div>";
		}
	numlist.innerHTML=str;
	}
//左侧人,输入数据10-100
function leftinput(){
	var numinput=document.getElementById("numinput").value;
	if((/^(?:[1-9]\d|100)$/).test(numinput)){
		if(list.length==60){
			alert("队列长度超过60！");
			}
		else{
	        list.unshift(numinput);	
		}
	}
	else{
		alert("Please enter an interger between 10 and 100!");
		}
	renderchart();
	}
//右侧人,输入数据10-100
function rightinput(){
	var numinput=document.getElementById("numinput").value;
	if((/^(?:[1-9]\d|100)$/).test(numinput)){
		if(list.length==60){
			alert("队列长度超过60！");
			}
		else{
	    list.push(numinput);
		}
	}
	else{
		alert("Please enter an interger between 10 and 100!");
		}
	renderchart();
	}
//左侧出
function leftout(){
	if(list.length!==0){
        var delementitem=list.shift();
	    alert("删除的数据是"+delementitem);
	    renderchart();
	    }
		else{
			alert("The list is already empty!");
			}
	}
//右侧出
function rightout(){
	if(list.length!==0){
        var delementitem=list.pop();
	    alert("删除的数据是"+delementitem);
	    renderchart();
	    }
		else{
			alert("The list is already empty!");
			}
	}
//点击数字删除该元数字
function deleteitem(obj){
	var itemi=obj.id;
	list.splice(itemi,1);
	renderchart();
	}
//冒泡排序算法
function bubbleSort(arr) {
     snapshots = [];
     if (arr.length < 1) {
         return arr;
     }
     var temp;
     for (var i = 0; i < arr.length; i++) {
         for (var j = 0; j < arr.length - i - 1; j++) {
             if (arr[j] > arr[j + 1]) {
                 temp = arr[j + 1];
                 arr[j + 1] = arr[j];
                 arr[j] = temp;
                 snapshots.push(JSON.parse(JSON.stringify(arr))); // 记录快照
             }
         }
     }
     return arr;
 }
 Array.prototype.bubbleSort = function() {
         return bubbleSort(this);
     }
//排序函数
function seeSort(){
	if(list.length==0){
		return alert("The list is already empty!")
		}
	list.bubbleSort();
	timer=setInterval(paint,interval); //定时绘制
	function paint(){
		var snapshot=snapshots.shift()||[];
		if(snapshot.length!==0){
			renderchart(snapshot);
			}
		else{
			clearInterval(timer); //结束绘制
			return;
			}
		}
	}	
//初始化函数
function init(){
	document.getElementById("leftin").addEventListener("click",leftinput);
	document.getElementById("rightin").addEventListener("click",rightinput);
	document.getElementById("leftout").addEventListener("click",leftout);
	document.getElementById("rightout").addEventListener("click",rightout);
	document.getElementById("sort").addEventListener("click",
seeSort);
}
init();
	

