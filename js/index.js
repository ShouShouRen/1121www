$(document).ready(function () {
    $('nav').find('a').click(function () {
        let target = $(this).data('target');
        let o = $(target).offset().top - 86;
        $('html,body').animate({
            scrollTop: o
        }, 300);
    })
    $(window).scroll(function () {
        $(window).scroll(function () {
            $("#navtoggle").collapse('hide');
        })
    })
    $('.gotop').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 600)
    })
    $(window).scroll(function (e) {
        let h = $(window).scrollTop();
        if (h > 650) {
            $('.gotop').addClass('active');
        } else {
            $('.gotop').removeClass('active');
        }
    })
    $('.robot').click(function () {
        $('#chat').fadeToggle();
    })
    $('#cartsubmit').click(function () {
        alert("感謝您的訂購，7日內將會抵達訂購地點。")
        location.reload();
    })
    $('#contactsubmit').click(function () {
        alert("感謝您的來信，客服會儘速回覆您！！！")
        location.reload();
    })
})