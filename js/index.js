/**
 * Created by llairen on 16/9/9.
 * QQ : 793190036
 * author：zml
 */
$(function() {

    // nav
    (function() {

        var aLi = $('#search').find('.menu').find('li');
        var input = $('#search').find('form').find('.text');
        var iNow = 0;
        var arrText = [
            '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
            '例如：昌平区育新站龙旗广场2号楼609室',
            '例如：万达影院双人情侣券',
            '例如：东莞出事了，大老虎是谁？',
            '例如：北京初春降雪，天气变幻莫测'
        ];
        input.val(arrText[iNow]);
        aLi.each(function(index) {
            $(this).click(function() {
                aLi.attr('class', 'gradient');
                $(this).attr('class','active');
                iNow = index;

                input.val(arrText[iNow]);
            });
        });
        input.focus(function() {
            if ($(this).val() == arrText[iNow]) {
                $(this).val('');
            }
        });
        input.blur(function() {
            if ($(this).val() == '') {
                $(this).val(arrText[iNow]);
            }
        });
    })();
    //scroll
    (function() {
        var oDiv = $('#search').find('.scroll');
        var oUl = oDiv.find('ul');
        var iH  = 0;
        var iNow = 0;
        var str = '';
        var arrData = [
            { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
            { 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
        ];
        var up = $('#search').find('.arrow_up_red');
        var down = $('#search').find('.arrow_down_red');
        up.click(function() {
            doMove(1);
        });
        down.click(function() {
            doMove(-1);
        });

        for (var i=0; i< arrData.length; i++) {
            str += '<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>'+arrData[i].title+'</a></li>';
        }
        oUl.html(str);
        iH = oUl.find('li').height();

        var timer ;
        function autoPlay() {
            timer = setInterval(function() {
                doMove(-1);
            }, 3500);
        };

        autoPlay();

        oDiv.hover(function() {
            clearInterval(timer);
        }, autoPlay);


        function doMove (num) {
            iNow += num;
            if ((Math.abs(iNow) > arrData.length -1)) {
                iNow = 0;
            }
            if (iNow > 0) {
                iNow = -(arrData.length -1);
            }
            oUl.stop().animate({'top':iH*iNow}, 2000, 'elasticOut');
        }

    })();

    //option
    (function() {
        tabFn($('#tab1'),$('.tabCon1'), 'click' );
        tabFn($('#tabNav2'),$('.tabCon2'), 'click');
        tabFn($('#tabNav3'),$('.tabCon3'), 'mouseover');
        tabFn($('#tabNav4'),$('.tabCon4'), 'mouseover');

        function tabFn (tab, tabCon, event) {
           var aEle = tab.children();
               tabCon.hide().eq(0).show();
            aEle.each(function(index) {
                    $(this).on(event, function() {
                        aEle.removeClass('active').addClass('gradient');
                        $(this).removeClass('gradient').addClass('active');
                        aEle.find('div').attr({'class':'arrow_down_gray'});
                        $(this).find('div').attr({'class':'arrow_down_red'});
                        tabCon.hide().eq(index).show();
                    });

                })

        };
    })();

    // 图片 滚动
    (function() {
        var oDiv = $('.recommend-pic');
        var aUlLi = oDiv.find('ul li');
        var aOlLi = oDiv.find('ol li');
        var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
        var iNow = 0;
        var timer;

        aOlLi.click(function() {
            iNow = $(this).index();
            fadeFn();
        });
        oDiv.hover(function(){clearInterval(timer)},autoPlay);
        function autoPlay() {
            timer = setInterval(function() {
                iNow++;
                iNow%= arr.length;
                fadeFn();
            }, 2000);
        }
        autoPlay();
        function fadeFn() {
               aUlLi.each(function(i) {
                    if (i != iNow) {
                        aUlLi.eq(i).fadeOut().css('zIndex', 1).hide();
                        aOlLi.eq(i).removeClass('active');
                    } else {
                        aUlLi.eq(i).fadeIn().css('zIndex', 2).show();
                        aOlLi.eq(i).addClass('active');
                    }
                    oDiv.find('p').val(arr[iNow]);
               });
        }
    })();

    // BBS
    (function() {
        var aOlLi = $('.bbs li');
        aOlLi.mouseover(function() {
            aOlLi.removeClass('active').eq($(this).index()).addClass('active');
        })
    })();

    // 日历
    (function() {
       var oDiv = $('.section-day');
       var oUl = oDiv.find('.week-li');
       var oImg = oUl.find('img');
       var size = oDiv.find('.week').find('li').size();

        var hot = $('.hot-cov');
        var hotImg = hot.find('img');
        var strong = hot.find('strong');
        var p = hot.find('p');
        oImg.hover(function() {

            var top = $(this).parent().parent().position().top - 30;
            var left = $(this).parent().parent().position().left + 55;
            var index = $(this).parent().parent().index()%size;

            hot.show().css({ 'left': left, 'top': top });
            hotImg.attr('src',$(this).attr('src'));
            p.text($(this).attr('info'));
            strong.text(oDiv.find('.week').find('li').eq(index).text());
        },function() {
            hot.hide()
        });

    })();
    // Hot
    (function() {
        var oDiv = $('.hot-area');
        var aLi = oDiv.find('ul li');
        var arr = [
            '',
            '用户1<br />人气1',
            '用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
            '用户3<br />人气3',
            '用户4<br />人气4',
            '用户5<br />人气5',
            '用户6<br />人气6',
            '用户7<br />人气7',
            '用户8<br />人气8',
            '用户9<br />人气9',
            '用户10<br />人气10'
        ];

        aLi.mouseover(function(i) {
            if ($(this).index() == 0) return false;
            aLi.find('p').remove();
            $(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');

        });



//        aLi.mouseover(function() {
//            if ($(this.index() == '0')) return false;
//            aLi.find('p').remove();
//
//
//            $(this).append('<p style="width:'+ ($(this).width()-12) +'px; height:'+ ($(this).height()-12) +'px;">'+ arr[$(this).index()] +'</p>');
//        });
    })();


    var now = new Date();
    $('.now-date').text( (1900 + now.getYear()) +'.' + parseInt(now.getMonth()+1));
    $('.now-month').text( parseInt(now.getMonth()+1) );
    $('.now-day').text( parseInt(now.getDate()+1) );
})