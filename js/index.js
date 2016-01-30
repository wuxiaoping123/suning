window.onload=function(){
window.onscroll=function(){
  
/*楼层跳转******************************************************/
    function floorF(){
    	var leftdh=$(".left-dh")[0];
    	var anniu=$(".left-dh1");
        var img=$("img",leftdh);
    	var ones=$(".one");
        var hot=$(".hot");
    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        for(var i=0;i<ones.length;i++){
            ones[i].aa=ones[i].offsetTop;
            if(obj.scrollTop>=ones[i].aa-80){
            	for(var j=0;j<anniu.length;j++){
            		anniu[j].style.background="";
                    hot[j].style.display="none";
            	}
                hot[i].style.display="block";
            }
        }
        //让竖导航在一段距离显示
    	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    	if(obj.scrollTop>1100){
    		leftdh.style.display="block";
    	}else{
    		leftdh.style.display="none";
    	}

    	//通过按钮来控制楼层
        for(var i=0;i<anniu.length;i++){
        	anniu[i].index=i;
        	anniu[i].onclick=function(){
                img[this.index].style.zIndex=2;
                hot[this.index].style.zIndex=3;
        		animate(obj,{scrollTop:ones[this.index].aa},300,Tween.Linear);
        	}

            anniu[i].onmouseover=function(){
                for(var k=0;k<img.length;k++){
                    hot[k].style.display="none";
                }
                hot[this.index].style.display="block";
            }
        }

        var cc=$(".one");
        var ch=document.documentElement.clientHeight;
       //window.onscroll=function(){和上面通用window.onscroll
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        for(var i=0;i<cc.length;i++){
            if(cc[i].offsetTop<ch+obj.scrollTop){
                var imgs=$("img",cc[i]);
                for(var j=0;j<imgs.length;j++){
                    imgs[j].src=imgs[j].getAttribute("anxu");
                }
            }
        }
    }
    floorF();

}
   
/**上下拉*************************************************/
    var yiji=$(".top-dh-center-a")[0];
    var erji=$(".list-big")[0];
    hover(yiji,function(){
        // erji.style.display="block";
        animate(erji,{height:254},400,Tween.leftdh);
        erji.style.cssText="border:1px solid #ddd";
    },function(){
        // erji.style.display="none";
        animate(erji,{height:0},400,Tween.Linear);
        erji.style.cssText="border:0"
    })
    function topLa(){
        var yijis=$(".top-dh-center-right")[0];
        var yiji=$("li",yijis);
        var erji=$(".erji");
        var wddd=$(".wddd");
        for(var i=0;i<yiji.length;i++){
            yiji[i].index=i;
            hover(yiji[i],function(){
                var sons=$("a",erji[this.index]);
                var h=sons[0].offsetHeight;
                    erji[this.index].style.height=0;
                    animate(erji[this.index],{height:h*sons.length},400,Tween.Linear);
                    erji[this.index].style.cssText="border-bottom:1px solid #ddd";
            },function(){
                animate(erji[this.index],{height:0},400,Tween.Linear);
                yiji[this.index].style.background="";
                erji[this.index].style.cssText="border-bottom:0";
            })
        }
    }
    topLa();
/*选项卡************************************************************/
    function xuanXk(num,color){
        var tab=$(".one-tab")[num];
        var tabem=$("em",tab);
        var tabli=$("li",tab);
        var tiaozhuan=$(".tiaozhuan")[num];
        var center=$(".one-center-center",tiaozhuan);
        // var hots=$(".hots")[num];
        for(var i=0;i<tabli.length;i++){
            tabli[i].index=i;
            tabli[i].onmouseover=function(){
                for(var j=0;j<center.length;j++){
                    center[j].style.display="none";
                    tabem[j].style.cssText="";
                }
                center[this.index].style.display="block";
                tabem[this.index].style.cssText="border-bottom:4px solid "+color+";color:#222;font-weight:bold";
            }
        }
    }
    xuanXk(0,"#FF6B80");
    xuanXk(1,"#61B3FF");
    xuanXk(2,"#AED55A");
    xuanXk(3,"#FF9901");
    xuanXk(4,"#FF6565");
    xuanXk(5,"#FB7292");
    xuanXk(6,"#6D93FF");
    xuanXk(7,"#356ACB");
    xuanXk(8,"#7CBB2E");
    xuanXk(9,"#9E652B");

/*下面轮播图****************************************************/
    function lunBo(){
        var leftbtn=$(".sn-leftbtn")[0];
        var rightbtn=$(".sn-rightbtn")[0];
        var uls=$(".snsq-center-main-bottom")[0];
        var lis=$("li",uls);
        var lislen=lis.length;
        var bigbox=$(".snsq-wai")[0];
        var imgs=$(".snsq-center-main",bigbox);
        var imgslen=imgs.length;
        hover(bigbox,function(){
            leftbtn.style.display="block";
            rightbtn.style.display="block";
        },function(){
            leftbtn.style.display="none";
            rightbtn.style.display="none";
        })
        for(var i=0;i<imgslen;i++){
            var imgsW=imgs[0].offsetWidth;
            if(i!=0){
                imgs[i].style.left=imgsW+"px";
            }
        }
        var now=0;
        var next=0;
        var flag=true;
        function rightMove(){
            if(now==this.index||!flag){
            return;
            }
            flag=false;
            next++;
            if(next==imgslen){
                next=0;
            }
            animate(imgs[now],{left:-imgsW},500);
            imgs[next].style.left=imgsW+"px";
            animate(imgs[next],{left:0},500,Tween.Linear,function(){
                flag=true;
            });
            lis[now].className="";
            lis[next].className="snsqli";
            now=next;
        }
        function leftMove(){
            if(now==this.index||!flag){
                return;
            }
            flag=false;
            next--;
            if(next==-1){
                next=imgslen-1;
            }
            animate(imgs[now],{left:imgsW},500);
            imgs[next].style.left=-imgsW+"px";
            animate(imgs[next],{left:0},500,Tween.Linear,function(){
                flag=true;
            });
            lis[now].className="";
            lis[next].className="snsqli";
            now=next;
        }

        for(var j=0;j<lislen;j++){
            lis[j].index=j;
            lis[j].onmouseover=function(){
                if(now==this.index||!flag){
                    return;
                }
                flag=false;
                if(now<this.index){
                    imgs[this.index].style.left=imgsW+"px";
                    animate(imgs[now],{left:-imgsW},500);
                }else{
                    imgs[this.index].style.left=-imgsW+"px";
                    animate(imgs[now],{left:imgsW},500);
                }
                animate(imgs[this.index],{left:0},500,Tween.Linear,function(){
                    flag=true;
                });
                lis[now].className="";
                lis[this.index].className="snsqli";
                now=next=this.index;
            }
        }
        rightbtn.onmouseover=leftbtn.onmouseover=function(){
            clearInterval(t);
        }
        rightbtn.onclick=function(){
            rightMove();
        }
        leftbtn.onclick=function(){
            leftMove();
        }
   
    }

    lunBo();
/****左边下拉************************************************/
    function zuoLa(){
        var uls=$(".center-dh-shu-left")[0];
        var lis=$("li",uls);
        var lislen=lis.length;
        var xiala=$(".center-dh-list");
        var xialen=xiala.length;
        for(var i=0;i<lislen;i++){
            lis[i].index=i;
            hover(lis[i],function(){
                for(var j=0;j<xialen;j++){
                    xiala[j].style.display="none";
                }
                xiala[this.index].style.display="block";
            },function(){
                xiala[this.index].style.display="none";
            })
        }
    }
    zuoLa();
/*有导航抽屉**************************************/
    function chouT(){
        var right=$(".right-center")[0];
        var dhone=$('.dhone',right);
        var span=$('.right-dhspan');
        for(var i=0;i<dhone.length;i++){
            dhone[i].index=i;
            hover(dhone[i],function(){
                for(var j=0;j<span.length;j++){
                    span[this.index].style.display='block';
                    dhone[this.index].style.background="#FFAA01";
                    span[this.index].style.color="#383838";
                    span[this.index].style.background="#FFAA01";
                    animate(span[this.index],{width:60},200,Tween.Linear);
                }
            },function(){
                animate(span[this.index],{width:0},200,Tween.Linear);
                span[this.index].style.color="#FFAA01";
                span[this.index].style.background="#383838";
                dhone[this.index].style.background="#383838";
            })
        }
    }
    chouT();
    

/*****************************************/
    var input=$(".main-top-form-input1")[0];
    var xiala=$(".form-xiala")[0];
    input.onfocus=function(){
        xiala.style.display="block";
    }
    input.onblur=function(){
        xiala.style.display="none";
    }



/*边界*****************************************************8*/   
    var left1=$(".left-dh")[0];
    var cW=document.documentElement.clientWidth;
    window.onresize=function(){
        cW=document.documentElement.clientWidth;
        left1.style.left=(cW-1349)/2+"px";
    }


/****返回顶部***********************************/
    var center=$(".right-center")[0];
    var rights=$(".right-dhone",center)[7];
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
    rights.onclick=function(){
        animate(obj,{scrollTop:0},300,Tween.Linear);
    } 
}
