$( document ).ready(function() {

    $('.burger-wrap').click(function () {
        $('.hide').toggle(500);
    });

    //    progress-bar
    $(window).scroll(function () {
        let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#progress-bar").width(ratio + '%');
    });

    //    progress-bar
    $(window).scroll(function () {
        let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#progress-bar").width(ratio + '%');
    });

    //back-to-top
    let btnTop = $(".back-to-top")
    $(window).on("scroll", function () {
        if($(window).scrollTop() >= 300){
            btnTop.fadeIn();
        }else {
            btnTop.fadeOut();
        }
    });

    btnTop.on("click", function () {
        $("html,body").animate({scrollTop:0},900)
    });

    let headerTop = $(".header-top");
    $(window).on("scroll", function () {
        if($(window).scrollTop() >= 800){
            headerTop.css({position: 'fixed', top: '0', width: '100%', background: '#000', opacity: 1, zIndex: 10});
        }else {
            headerTop.css({position: 'static', background: '#455057'});
        }
    });

});