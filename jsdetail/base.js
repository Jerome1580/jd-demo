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

    //搜索联想词
    $('#inputTxt').keyup(function () {
        var txt = $('#inputTxt').val();

        // 这是百度的接口
        // var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+txt;

        var url = 'https://suggest.taobao.com/sug?code=utf-8&q='+txt;
        var _box = $('#queryKw');
        querySUG_TaoBao(_box,url);

        $(document).click(function () {
            _box.hide();
        })


});





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

    //封装淘宝关键词搜索ajax请求数据
    function querySUG_TaoBao(_box,url){
        _box.html('');

        $.ajax({
            url:url,
            type:'get',
            dataType:'jsonp',
            jsonp:'callback',
            success:function(data){
                if(data.result.length>0) {
                    _box.show();
                    var ul = $('<ul></ul>');
                    var keywords = data.result;
                    $.each(keywords, function (i, element) {

                        var li = $('<li></li>').append(element[0]);
                        ul.append(li);

                    });
                    _box.append(ul).show();

                    chooseword(_box);//传递隐藏的盒子
                }
                else{
                    //如果没有结果，则隐藏
                        _box.hide();

                }

        },
        error:function(e) {
            console.log(e);
        }

    })

}
    //选择关键词后隐藏联想词框
    function chooseword(_box){

        $('#queryKw>ul').on('click','li', function (e) {
            var txt = e.target.innerHTML;
            $('#inputTxt').val(txt);
            _box.hide();

        })
    }



