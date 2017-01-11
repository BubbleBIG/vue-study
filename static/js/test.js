$(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() >= 45){
            $('.boardName').addClass('transitionIn');
            $('.boardName').removeClass('transitionOut');

        }else{
            $('.boardName').removeClass('transitionIn');
            $('.boardName').addClass('transitionOut');;
        }
    });
})