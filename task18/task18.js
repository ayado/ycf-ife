// JavaScript Document
var numlist=document.getElementById("numlist");
//用于渲染列表的数据
var list=[];
//渲染列表
function renderchart(){
	var str="";
	for(var i=0;i<list.length;i++){
		str+="<div class='listitem'>"+"<span id='"+i+"'onclick='deleteitem(this)'>"+list[i]+"</span></div>";
		}
	numlist.innerHTML=str;
	}
//左侧人
function leftinput(){
	var numinput=document.getElementById("numinput").value;
	if((/^[0-9]+$/).test(numinput)){
	    list.unshift(numinput);
	}
	else{
		alert("Please enter an interger!");
		}
	renderchart();
	}
//右侧人
function rightinput(){
	var numinput=document.getElementById("numinput").value;
	if((/^[0-9]+$/).test(numinput)){
	    list.push(numinput);
	}
	else{
		alert("Please enter an interger!");
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
//初始化函数
function init(){
	document.getElementById("leftin").addEventListener("click",leftinput);
	document.getElementById("rightin").addEventListener("click",rightinput);
	document.getElementById("leftout").addEventListener("click",leftout);
	document.getElementById("rightout").addEventListener("click",rightout);
}
init();
	

