/**
 * Created by Administrator on 2017/1/13.
 */


//点击登录后，遮罩效果
    var mask = document.getElementById("mask");
    var Bomb_login = document.getElementById("Bomb_login");
    var Bomb_register = document.getElementById("Bomb_register");
    var close_mask = document.getElementById("close_mask_1");
    var login = document.getElementById("login");
    var register = document.getElementById("register");

    login.onclick= function(){
        mask.style.display= "block";
        Bomb_login.style.display= "block";

    };

    register.onclick= function(){
        mask.style.display= "block";
        Bomb_register.style.display= "block";

    };

    close_mask.onclick= function(){
        mask.style.display= "none";
        Bomb_login.style.display= "none";
    };

    close_mask_2.onclick= function(){
        mask.style.display= "none";
        Bomb_register.style.display= "none";
    };

   //判断用户注册合法性

     //1.获取用户输入值
     //2.添加事件，进行判断，输出结果
     $('#username').focus(function(){
         //当input获取焦点时
         $('#username').css('borderColor', '#e43930');

     }).keyup(function () {

     }).blur(function () {
         var name = $('#username').val();
         compareName(name);

     });

    function compareName(name){
       if(name.length<5||name.length>12){
            //查找某一个元素的兄弟元素siblings，查找子元素find
           $('#username').siblings('.tips').find('i').css('backgroundPosition', '-17px -100px');
           $('#username').siblings('.tips').find('span').html('请输入5-12个字符');
        }
        else{
           $('#username').siblings('.tips').find('i').css('backgroundPosition', '0 -117px');
           $('#username').siblings('.tips').find('span').html('OK!');
           $('#username').css('borderColor', '#f1f1f1');

       }
    }

    //判断用户登录


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

