/**
 * Created by zhaorui on 16/9/9.
 */
$(function(){
    var screenH = $(window).height();
    var screenW = $(window).width();
    if(screenW<767){

    }
    var left = $(".zc_new-aside");
    if(screenW>767){
        $(window).scroll(function(){
            if($(window).scrollTop()>51){
                left.addClass("fix");

            }else{
                left.removeClass("fix");

            }
        });
    };
});