jQuery(document).ready(function() {

    $('.page_container').children('.page:first-of-type').addClass('page_active');

    setTimeout(function() {
        $('.page_lbls').fadeIn();
    }, 500)

    // $('.tip_escape').click(function() {
    //     $('.landing').removeClass('page_tip');
    //     $('.land_back').css("-webkit-transition-delay", "none");
    //         $('.land_back').css("-moz-transition-delay", "none");
    //         $('.land_back').css("-ms-transition-delay", "none");
    //         $('.land_back').css("transition-delay", "none");
    // })

// MENU WIDE 
    $('.open_menu').click(function() {
        $('.menu').toggleClass('menu_wide');
        $(this).toggleClass('open_men_on');
        close_expansive_list();
    })

// PAGE SCROLL
    $('.page_container').on({
        'mousewheel DOMMouseScroll MozMousePixelScroll': function(e) {
                // $( '.addwor li' ).css("left", "");
            var dire = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
            page_move(dire);
        }
    })

// PAGE SELECT
    $('.menu li').click(function() {
        // $( '.addwor li' ).css("left", "");
        if($('.menu_wide').length == 0) {
            reset_page_itens();
            $('.rip_rep').removeClass('ripple');

            $('.main').removeClass('page_tip');
            var i = $(this).index() + 1;
            $('.page_active').removeClass('page_active');
            $('.page_previous').removeClass('page_previous');

            $('.plbl_on').removeClass('plbl_on');
            $('.plbl_prev').removeClass('plbl_prev');

            $('.menu_name').removeClass('menu_on');
            $(this).children('.menu_name').addClass('menu_on');

            var e = 0;
            $('.page').each(function() {
                e++;
                if(e < i) {
                    $(this).addClass('page_previous');
                } else if(e == i) {
                    $(this).addClass('page_active');
                }
            })

            var e2 = 0;
            $('.page_label').each(function() {
                e2++;
                if(e2 < i) {
                    $(this).addClass('plbl_prev');
                } else if(e2 == i) {
                    $(this).addClass('plbl_on');
                }
            })

            setTimeout(function () {
                $('.rip_rep').addClass('ripple');
            }, 800);
        }
    })

// MAIN EFFECT
    $('.down_in').click(function() {
        $('.page_active').prevAll('.page').addClass('page_previous');
        $('.page_active').addClass('page_previous');
        $('.page_active').removeClass('page_active');
        $('.page_previous').next('.page:not(.page_previous)').addClass('page_active');

        $('.plbl_on').prevAll('.page_label').addClass('plbl_prev');
        $('.plbl_on').addClass('plbl_prev');
        $('.plbl_on').removeClass('plbl_on');
        $('.plbl_prev').next('.page_label:not(.plbl_prev)').addClass('plbl_on');
        
        var i = $('.page_previous').length + 1;
        $('.menu_on').removeClass('menu_on');
        $('.menu li:nth-of-type('+i+')').children('.menu_name').addClass('menu_on');
        $(this).hide();
    })

    $('.main').mousemove(function(e){

        var wx = $(window).width();
        var wy = $(window).height();
        
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        
        var newx = x - wx/2;
        var newy = y - wy/2;
        
        // $('span').text(newx + ", " + newy);
        
        $(this).children('div').each(function(){
            var speed = $(this).attr('data-speed');
            if($(this).attr('data-revert')) speed *= -1;
            $(this).css({
                "transform": "translate3d("+(1 - newx*speed)+"px, "+(1 - newy*speed)+"px, 0px)"
            })
            // TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
            
        });
    });

// WEB
    $('.btn').click(function() {
        $('.other_right').toggleClass('other_right_all');
        if($('.other_right_all').length > 0) {
            $(this).html('Um a um <i class="fa fa-angle-right"></i>');
        } else {
            $(this).html('Todos <i class="fa fa-angle-right"></i>');
        }
        $('.direction').fadeToggle();
    })

// OTHER
    $('.fa-angle-down').click(function(){
        // var t = parseInt($('.other_item').css('top'));
        // var h = $('.other_item').innerHeight();
        // var t = t - h;

        // var c = $('.other_item').length * h - h;
        // var c = c - (c * 2);
        // if (t < c) {
        //     t = 0;
        // };

        var to = $('.other_item').length;
        var t = $('.web_color').find('.other_right').find('input').val();
        t++;
        var c = t * 100;
        if (to == t) { c = '0'; t = '0';}
        $('.web_color').find('.other_right').find('input').val(t);

        $('.other_item').css('top', '-'+c+'%');
        $('.other_item').removeClass('other_item_on');
        $('.other_item:eq('+t+')').addClass('other_item_on');
        go_percent();      
    })

    $('.fa-angle-up').click(function(){
        
        // var t = parseInt($('.other_item').css('top'));
        // var h = $('.other_item').innerHeight();
        // var t = t + h;

        // var c = $('.other_item').length * h - h;
        // var c = c - (c * 2);
        // if (t == 480) {
        //     t = c;
        // };

        var to = $('.other_item').length;
        var t = $('.web_color').find('.other_right').find('input').val();
        t--;
        if(t < 0) { t = to; t--;}
        var c = (t * 100) ;
        $('.web_color').find('.other_right').find('input').val(t);


        $('.other_item').css('top', '-'+c+'%');
        $('.other_item').removeClass('other_item_on');
        $('.other_item:eq('+t+')').addClass('other_item_on');

        go_percent();       
    })

    $('.other_right').css('top', '0');
    $('.other_left').removeClass('ol_hid');
    go_percent();

// FORM
    // $('.formacao').mousemove(function(e){

    //     var wx = $(window).width();
    //     var wy = $(window).height();
        
    //     var x = e.pageX - this.offsetLeft;
    //     var y = e.pageY - this.offsetTop;
        
    //     var newx = x - wx/2;
    //     var newy = y - wy/2;
        
    //     // $('span').text(newx + ", " + newy);
        
    //     $(this).find('.rectangle').each(function(){
    //         var speed = $(this).attr('data-speed');
    //         if($(this).attr('data-revert')) speed *= -1;
    //         var rot = (1 - newx*speed) + (1 - newy*speed);
    //         $(this).css({
    //             "transform": "rotate("+rot+"deg)"
    //         })
    //     });
    // });

    $('.cur_arrow_right').click(function() {
        $('.cur_arrow').addClass('cur_arrow_off');
        $('.curso_area_on').addClass('curso_area_on_temp');
        if ($('.curso_area_on').next().hasClass('curso_area')) {
            $('.curso_area_on').next('.curso_area').addClass('curso_area_on');
        } else{
            $('.curso_area_zone').children('.curso_area:first-child').addClass('curso_area_on');
        };
        
        $('.curso_area_on_temp').removeClass('curso_area_on');
        $('.curso_area_on_temp').removeClass('curso_area_on_temp');
        setTimeout(function () {
            $('.cur_arrow').removeClass('cur_arrow_off');
        }, 500);
    })
    $('.cur_arrow_left').click(function() {
        $('.cur_arrow').addClass('cur_arrow_off');
        $('.curso_area_on').addClass('curso_area_on_temp');
        if ($('.curso_area_on').prev().hasClass('curso_area')) {
            $('.curso_area_on').prev('.curso_area').addClass('curso_area_on');
        } else{
            $('.curso_area_zone').children('.curso_area:last-child').addClass('curso_area_on');
        };
        $('.curso_area_on_temp').removeClass('curso_area_on');
        $('.curso_area_on_temp').removeClass('curso_area_on_temp');
        setTimeout(function () {
            $('.cur_arrow').removeClass('cur_arrow_off');
        }, 500);
    })

// QUEM SOU
    $('.wright').click(function() {
        scrollWorks('r');
    })
    $('.wleft').click(function() {
        scrollWorks('l');
    })

// PROJECTOS
    $(document).on("click", ".sq", function() {
        if($(this).next('.sq_under').hasClass('sq_on')) {
            $('.sq_under').removeClass('sq_on');
            $('.sq').removeClass('sq_r_on');
            
        } else {
            $('.sq').removeClass('sq_r_on');
            $('.sq_under').removeClass('sq_on');
            $(this).next('.sq_under').addClass('sq_on');
            $(this).addClass('sq_r_on');
        }
    })
    $(document).on("click", ".close_inner_proj", function() {
        $('.sq_under').removeClass('sq_on');
        $('.sq').removeClass('sq_r_on');
    })
    
    $(document).on("click", ".ip_pics span img", function() {
        $('.p_img_on').removeClass('p_img_on');
        $(this).parent('span').addClass('p_img_on');
    })

    $(document).on("click", ".p_img_on", function() {
        $('.p_img_on').removeClass('p_img_on');
    })

// CONTACT
    $('.inn_feedback').find('.feed_send').find('input').click(function() {
        var n = $('.form_left').children('input:nth-of-type(1)').val();
        var e = $('.form_left').children('input:nth-of-type(2)').val();
        var c = $('.form_left').next('textarea').val();

        $.ajax({
          context: this,
          url: 'edit_pages/index_edit.php',
          data: { new_contact: '' , n: n, e: e, c: c },
          type: 'post',
          success: function(data) {
            if (data == 'good') {
                my_alert("Obrigado, entrarei em contacto o mais depressa possível", "good");
                $('.form_left').children('input').val('');
                $('.form_left').next('textarea').val('');

            } else if(data == 'email') {
                my_alert("Por favor insira um email válido", "info");
            } else if(data == 'empty')  {
                my_alert("Por favor preencha todos os campos", "info");
            } else{
                my_alert("Peço desculpa, ocorreu um erro. Por favor use os meus dados para entrar em contacto", "bad");
            };
          }
        });

        event.preventDefault();
    })

// LIST EXPAND
    $(document).on('click', '.expand .close_list_ext', function(){
        close_expansive_list();
    })

    $(document).on("click", ".menu_wide .list_exp_bar", function(){
        var t = $(this).offset().top;
        var l = $(this).offset().left;
        var w = $(this).width();
        var u = $('.list_exp_area').offset().top + 60;

        var to = u - t;
        var that = $(this);
        
        $(this).parents('.l_exp').addClass('list_exp_active');

        var len = $('.list_exp_bar').length;
        $('.list_exp_bar').each(function(index){
              var self = this
              setTimeout(function () {
                    $(self).addClass('l_exp_off');

                    len--;
                    if (len == 0) {
                        setTimeout(function () {
                            that.parents('.l_exp').children('.expand').css({
                                "top": to+"px",
                                "height": "calc(100vh - 120px)"
                            })
                            that.parents('.l_exp').children('.expand').children('.xpand_area').hide();
                            that.parents('.l_exp').children('.expand').children('.xpand_area').fadeIn('slow');

                        }, 200);
                    };

              }, index*20);
        });

    })

// DOC READY
    setTimeout(function () {
        $('.open_menu').addClass('ripple');
        $('.cv').addClass('ripple');
    }, 800);
})

$(window).scroll(function() {

	var scrol = $(this).scrollTop();

    // my_alert(scrol)
    if (scrol < $(".page:nth-of-type(2)").offset().top ) {
        // $('html, body').animate({
        //     scrollTop: $(".page:nth-of-type(1)").offset().top
        // }, 300);
    } else if(scrol > 0 && scrol < $(".page:nth-of-type(3)").offset().top) {
        // $('html, body').animate({
        //     scrollTop: $(".page:nth-of-type(2)").offset().top
        // }, 300);
    } else if(scrol > $(".page:nth-of-type(2)").offset().top && scrol < $(".page:nth-of-type(4)").offset().top) {
        // $('html, body').animate({
        //     scrollTop: $(".page:nth-of-type(3)").offset().top
        // }, 300);
    } else if(scrol < 400) {
        // $('html, body').animate({
        //     scrollTop: $(".page:nth-of-type(4)").offset().top
        // }, 300);
    } else if(scrol < 500) {
        // $('html, body').animate({
        //     scrollTop: $(".page:nth-of-type(5)").offset().top
        // }, 300);
    } 
});

// SWIPE
    $("body").swipe("enable");

    $(function() {      
        
        $("body").swipe( { fingers:'all', swipeDown:swipe1, swipeUp:swipe1, allowPageScroll:"auto"} );
   
        function swipe1(event, direction, distance, duration, fingerCount) {
            // alert(direction)
            
            '-1 down / 1 up'
            if(direction == 'up') {
                dire = '-1';
            } else if(direction == 'down'){
                dire = '1';
            }
            if($('.open_men_on').length == 0) {
                page_move(dire);
            }
        }

    });


function my_alert(t, u) {
    if(typeof u === 'undefined') {
        u = 'info';
    }
    $('.my_alert').remove();
    if(u == 'good') {
        s = '<i class="fa fa-check-circle"></i>';
        c = 'my_alert_green';
    } else if(u == 'bad') {
        s = '<i class="fa fa-ban"></i>';
        c = 'my_alert_red';
    } else if(u == 'info') {
        s = '<i class="fa fa-info"></i>';
        c = 'my_alert_blue';
    } 
    $('body').append('<div class="my_alert '+c+'">'+s+'<span>'+t+'</span></div>');
    setTimeout(function () {
        $('.my_alert').css('right', '-3%');
        $('.my_alert').css('opacity', '1');
    }, 20);

    setTimeout(function () {
        remove_myalert();
    }, 5000);
}

function remove_myalert() {
    $('.my_alert').css('right', '');
    $('.my_alert').css('opacity', '');
    setTimeout(function () {
        $('.my_alert').remove();
    }, 20);
}


function go_percent() {
    $('.otbar_in').removeClass('otbi');
    $('.otbar_in').css('width', '0');
    
    setTimeout(function () {
        $('.otbar_in').each(function(e){
            var w = $(this).children('span').text();

            $(this).addClass('otbi');
            $(this).css('width', w+'%');
        })
    }, 700);
}

function scrollWorks(dir) {
    // var left = $( '.addwor li' ).css( "left" );
    var left = $( '.addwor li' )[0].style.left;
    left = left.replace("px", "");
    left = left.replace("%", "");

    var n = left.replace("00", "");
    var n = n.replace("-", "");  
    var n = parseInt(n);
    // my_alert(left)

    
    if(left == '') {
        var n = 0;
    }
    if(dir == 'l') {
        if( left == 0) {
            left = '-400';
            $( '.addwor li' ).css("left", left+"%");
            var n = 5;
        } else {
            left = parseInt(left) + 100;
            $( '.addwor li' ).css("left", left+"%");
            // var n = n - 1;
        }
    }

    if(dir == 'r') {
        if( left == '-400') {
            left = '0';
            $( '.addwor li' ).css("left", left+"%");
            var n = 1;
        } else {
            left = left - 100;
            $( '.addwor li' ).css("left", left+"%");
            var n = n + 2;
        }
    }
    $('.works').removeClass('works_color_1');
    $('.works').removeClass('works_color_2');
    $('.works').removeClass('works_color_3');
    $('.works').removeClass('works_color_4');
    $('.works').removeClass('works_color_5');
    $('.works').addClass('works_color_'+n);


    if (left == '-300' || left == '-400') {
        $('.tskill').removeClass('type_on');
        $('.twork').addClass('type_on');
    } else {
        $('.twork').removeClass('type_on');
        $('.tskill').addClass('type_on');

    }

    $('.addwor li').removeClass('desani');
    $('.addwor li:nth-of-type('+n+')').addClass('desani');
}

function close_expansive_list() {
    $('.xpand_area').fadeOut('fast', function() {
        // $('.xpand_area').html('');
    })
    var len = $('.list_exp_bar').length;
    $('.l_exp').children('.expand').css({
      "top": "",
      "height": ""
    })

    $('.list_exp_bar').each(function(index){
          var self = this
          setTimeout(function () {
                $(self).removeClass('l_exp_off');
                
                len--;
                if (len == 0) {
                    setTimeout(function () {
                        $('.l_exp').removeClass('list_exp_active');
                        // $('.list_exp_shadow').removeClass('list_exp_noshad');
                        
                    }, 180);
                };
          }, index*15);
    });     
}

function reset_page_itens() {
    $('.landing').removeClass('page_tip');
    $('.sq_under').removeClass('sq_on');
    $('.sq').removeClass('sq_r_on');
    $('.p_img_on').removeClass('p_img_on');
}

function page_move(dire) {
    if($('.scrolling').length == 0) {
        $('.page_container').addClass('scrolling');
        reset_page_itens();
        $('.rip_rep').removeClass('ripple');
    
        
        // my_alert(dire)
        '-1 down / 1 up'
        if(dire < 0) {
            if($('.page_active').next('.page').length > 0) {
                $('.page_active').prevAll('.page').addClass('page_previous');
                $('.page_active').addClass('page_previous');
                $('.page_active').removeClass('page_active');
                $('.page_previous').next('.page:not(.page_previous)').addClass('page_active');
            }

            if($('.plbl_on').next('.page_label').length > 0) {
                $('.plbl_on').prevAll('.page_label').addClass('plbl_prev');
                $('.plbl_on').addClass('plbl_prev');
                $('.plbl_on').removeClass('plbl_on');
                $('.plbl_prev').next('.page_label:not(.plbl_prev)').addClass('plbl_on');
            }
            
        } else {
            if($('.page_active').prev('.page').length > 0) {
                $('.page_active').prev('.page_previous').removeClass('page_previous');
                $('.page_active').removeClass('page_active');
                if($('.page_previous').length > 0) {
                    $('.page_previous').next('.page:not(.page_previous)').addClass('page_active');
                } else {
                    $('.page_container').children('.page:first-of-type').addClass('page_active');
                }
            }

            if($('.plbl_on').prev('.page_label').length > 0) {
                $('.plbl_on').prev('.plbl_prev').removeClass('plbl_prev');
                $('.plbl_on').removeClass('plbl_on');
                if($('.plbl_prev').length > 0) {
                    $('.plbl_prev').next('.page_label:not(.plbl_prev)').addClass('plbl_on');
                } else {
                    $('.page_lbls').children('.page_label:first-of-type').addClass('plbl_on');
                }
            }
        }
        var i = $('.page_previous').length + 1;
        $('.menu_on').removeClass('menu_on');
        $('.menu li:nth-of-type('+i+')').children('.menu_name').addClass('menu_on');

        setTimeout(function () {
            $('.page_container').removeClass('scrolling');
            $('.rip_rep').addClass('ripple');
        }, 800);
    } 
}