/**
 * Created by Administrator on 2017/1/13.
 */


//点击登录后，遮罩效果
    var mask = document.getElementById("mask");
    var Bomb = document.getElementById("Bomb");
    var close_mask = document.getElementById("close_mask");
    var login = document.getElementById("login");

    login.onclick= function(){
        mask.style.display= "block";
        Bomb.style.display= "block";

    };

    close_mask.onclick= function(){
        mask.style.display= "none";
        Bomb.style.display= "none";
    };


    //关闭广告
    var jd_close =document.getElementById("jd-close");
    var topbanner =document.getElementById("jd-top");


    jd_close.onclick = function(){
        topbanner.style.display = "none";
    };


   //折叠张开类目
   $('#category').hover(function () {
       $('#category>dd').show()
   }, function () {
       $('#category>dd').hide()
   });





    //购物车hover状态

    $('#carDetail').hide();

    $('#car').hover(function () {
        $(this).addClass('hover');
        $('#carDetail').show();
    }, function () {
        $(this).removeClass('hover');
        $('#carDetail').hide();
    });
