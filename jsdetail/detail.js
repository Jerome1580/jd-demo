/**
 * Created by Administrator on 2017/1/13.
 */

    $( "#tabs" ).tabs();

    //    显示/隐藏配送地址
    $('.address').hover(function(){
        $('.box').show();
    },function(){
        $('.box').hide();
    }).trigger('mouseout');

    //选择增值保障面板
    var a =$('.yb-item-cats>.yb-item-cat');

    //开始时先隐藏
    $('.yb-item-cat>.yb-more-item').hide();
    //存储每个序号
    var index=[];

    for(var i=0;i< a.length;i++){
        index.b=i;
        //讲每个序号填到对应的data属性中，注意a[]是DOM对象
        $(a[index.b]).attr('data',index.b);

        //给每个a[]绑定对应的事件，并把序号值传进去，找到对应的子代，将其隐藏
        a[index.b].onmouseenter = function () {
            return function(){
                var b=this.children[1];
                $(b).show();
            }
        }(index.b);

        a[index.b].onmouseleave = function () {
            return function(){
                var b=this.children[1];
                $(b).hide();
            }
        }(this);
    }


    //选择购买商品数量
    var buy_num = $('#buy_num');
    $('#add_num').on('click', function () {
        //inpuy获取过来的值都是string类型的，需转化
        var val_num = buy_num.val();
        val_num = Number(val_num);
        val_num += 1;
        buy_num.val(val_num);
        $('#min_num').css('backgroundColor','#fffff');
    });


    $('#min_num').on('click', function () {
        var val_num = buy_num.val();
        val_num = Number(val_num);
        if(val_num>1){
            val_num -= 1;
            $('#buy_num').val(val_num);
        }
        else{

            $('#min_num').attr({disabled:'true', cursor:'not-allowed'})
            $('#min_num').css('backgroundColor','#f1f1f1');

        }
    });

    //检测input框中的值是否大于1，如果大于则可以减min
    buy_num.on('change', function () {
        var val_num = buy_num.val();
        if(val_num>1){
            $('#min_num').css('backgroundColor','#fffff');
        }
        else{
            $('#min_num').css('backgroundColor','#f1f1f1');
            buy_num.val(1);
        }

        //val_num>1?$('#min_num').css('backgroundColor','#fffff'):$('#min_num').css('backgroundColor','#f1f1f1');
    });


    //固定滚动栏
    var nav = $("#product-nav");
    var shop_nav = $('#shop_nav');
    var navTop = nav.offset().top;  // 得到导航栏距离顶部的距离
    window.onscroll = function() {
        // console.log(nav.offsetTop);
        if($(document).scrollTop() >= navTop)
        {
            //alert("到位置了");
            nav.addClass('fixed');
            shop_nav.addClass('fixed');

        }
        else
        {
            nav.removeClass('fixed');
            shop_nav.removeClass('fixed');
        }
    };
