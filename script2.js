window.onload = function () {
var txt=document.getElementById("txt");
  var set={
//定义"改变颜色"的函数
Color:function(){
    txt.style.color="rad";
    txt.style.backgroundColor="#ccc";
}

//定义"改变宽高"的函数
Wh:function(){
    txt.style.width="300px";
    txt.style.height="300px";
}

//定义"隐藏内容"的函数
Hide:function(){
    txt.style.display="none";
}

//定义"显示内容"的函数
Show:function(){
    txt.style.display="block";
}

//定义"取消设置"的函数
Restore:function(){
    var message=comfirm("请确认是否取消设置？");
    if(message==ture){
    txt.removeAttribute('style');
    }
}

}

}