window.onload = function(){
var idtxt=document.getElementById("txt");
}

//定义"改变颜色"的函数
    function Color(){var idtxt=document.getElementById("txt");
        idtxt.style.color="red";
	}
//定义"改变宽高"的函数
    function Wh(){var idtxt=document.getElementById("txt");
       idtxt.style.width="200px";
    }
//定义"隐藏内容"的函数
    function Hide(){var idtxt=document.getElementById("txt");
        idtxt.style.display="none";
    }
//定义"显示内容"的函数
    function Show(){var idtxt=document.getElementById("txt");
        idtxt.style.display="block";
    }
//定义"取消设置"的函数
    function Restore(){var idtxt=document.getElementById("txt");
        if(confirm("确定取消更改？")==true){
        idtxt.removeAttribute("style");
        }
	}