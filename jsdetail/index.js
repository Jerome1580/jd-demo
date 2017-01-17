









//轮播图效果
var lis=document.getElementById("slider-img").getElementsByTagName("li");
var imgs=document.getElementById("slider-img").getElementsByTagName("img")[0];

for(var a=0;a<lis.length;a++){

    lis[a].index=a;
    lis[a].onmouseover = function(){

        for(var a=0;a<lis.length;a++){

            lis[a].className="";
        }
        this.className="current";

        // alert(typeof this.index);
        imgs.src="images/index/slider"+(this.index+1)+".png";
    }

}

$('#arrow_r').on('click',function(e){
    // e.preventDefault();

    var num = $('.current').html();
    num=parseInt(num);


    if(num !=6){
        //让下一个li的class变成current，把图片地址换
        lis[num-1].className="";
        lis[num].className="current";
        imgs.src="images/index/slider"+(num+1)+".png"

    }
    else{
        lis[num-1].className="";
        lis[num-6].className="current";
        imgs.src="images/index/slider"+(num-5)+".png"
    }

})

$('#arrow_l').on('click',function(e){
    // e.preventDefault();

    var num = $('.current').html();
    num=parseInt(num);


    if(num !=1){
        //让下一个li的class变成current，把图片地址换
        lis[num-1].className="";
        lis[num-2].className="current";
        imgs.src="images/index/slider"+(num-1)+".png"

    }
    else{
        lis[num-1].className="";
        lis[num+4].className="current";
        imgs.src="images/index/slider"+(num+5)+".png"
    }

});

//遍历精灵图
var li=document.getElementById("life-icon").getElementsByTagName("li");

var i=[];
for(var a=0;a<li.length;a++){
    var b=li[a].getElementsByTagName("i")[0];
    i.push(b);
    i[a].style.backgroundPosition = "-25px "+(-a*25)+"px";
}





