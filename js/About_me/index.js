/**
 * Created by moumou on 2017/3/4.
 */
$(function () {

    //背景图变动
    $('body').css('background-size', '100% 100%');

    //首页动画
    $('#index').animate({'height': '435px'}, 1000, function () {
        $('#index_msg').animate({'height': '352px'}, 1000, function () {
            //左边动画完成时触发线条动画
            line_animate();
            //左边动画执行完成后.过一秒后关闭菜单
            setTimeout(menu_close, 1000);
        });
    });

//右边按钮功能
    function menu_close() {
        // $('#main_right').css('display','none');
        // $('#main_left').css('width','100%');
        $('#main_right').animate({width: '0', opacity: '0'}, 500);
        $('#main_left').animate({width: '100%'}, 500);
    }

    function menu_open() {
        // $('#main_right').css('display','block');
        // $('#main_left').css('width','80%');
        $('#main_right').animate({width: '20%', opacity: '1'}, 500);
        $('#main_left').animate({width: '80%'}, 500);
    }

//绑定右边按钮功能
    $('#close').click(function () {
        menu_close();
    });
    $('#open').click(function () {
        menu_open();
    });
    $('#top').click(function () {
        swiper.slideTo(0, 500);
    }.bind(null, i));
});

//--设置菜单高度-
function set_menu_height() {
    var body_heigth = document.body.offsetHeight;
    document.getElementById("main_right").style.height = body_heigth + 'px';
}


//导航菜单原点跳转
//设置swiper
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    mousewheelControl: true,
    //swiper自带函数,用于控制翻页效果
    onTransitionEnd: function () {
        switch (swiper.activeIndex) {
            case 0:
                line_animate();
                break;
            case 1:
                line_animate();
                page1_animate();
                break;
            case 2:
                line_animate();
                page2_animate();
                break;
            case 3:
                line_animate();
                page3_animate();
                break;
            case 4:
                line_animate();
                page4_animate();
                break;
            default:
                break;
        }
    }
});


//控制各页翻页效果.
function page1_animate() {
    $('#text0').animate({'top': '0', 'opacity': '1'}, 500, function () {
        $('#text1').animate({'top': '0', 'opacity': '1'}, 500, function () {
            $('#text2').animate({'top': '0', 'opacity': '1'}, 500);
        });
    });
}
function page2_animate() {
    $('#skill0').animate({'left': '0', 'opacity': '1'}, 500, function () {
        $('#skill1').animate({'left': '0', 'opacity': '1'}, 500, function () {
            $('#skill2').animate({'left': '0', 'opacity': '1'}, 500);
        });
    });
}
function page3_animate() {
    $('#case0').animate({'opacity': '1'}, 500, function () {
        $('#case1').animate({'opacity': '1'}, 500, function () {
            $('#case2').animate({'opacity': '1'}, 500);
        });
    });
}
function page4_animate() {
    console.log('3');
    $('#personal_p0').css('color', '#9d6a28');
    $('#personal_p1').css('color', '#9d6a28');
    $('#personal_p2').css('color', '#9d6a28');
    $('#personal_p3').css('color', '#9d6a28');
    $('#personal_p4').css('color', '#9d6a28');
    $('#personal_p5').css('color', '#9d6a28');
}
function line_animate() {
    var $line = $('.line');
    $line.css('width', '0px');
    for (var i in $line) {
        $line.eq(i).animate({'width': '100px'}, 500);
    }
}

//main_right菜单跳转
var main_left_li = document.getElementsByClassName('main_left_li');
for (var i = 0; i < main_left_li.length; i++) {
//        i是菜单的序号,对应就是跳到哪一个swiper.由于第一个不是首页.所以index+1;
    main_left_li[i].addEventListener('click', function (index) {
//            .slideTo是swiper自带的跳转函数
        swiper.slideTo(index + 1, 500);
    }.bind(null, i));
}

// 二级菜单
$liOut = $('.skill_list_liout');//$liOut是个jq对象.存有所有一级菜单
$liOut.on('click', function () {
    if ($(this).children('.skill_list_ulin').css('height') == '0px') {
        //遍历关闭所有一级菜单
        for (var i in $liOut) {
            $liOut.eq(i).children('.skill_list_ulin').css('height', '0');
        }
        $(this).children('.skill_list_ulin').css('height', '70px');
    }
    else {
        $(this).children('.skill_list_ulin').css('height', '0');
    }
});


//上下滑动
$('#icon20').click(function () {
    $('#personal_ul').css('margin-top', '-320px');
});
$('#icon21').click(function () {
    $('#personal_ul').css('margin-top', '0px');
});


