// JavaScript Document
function screenResize() {
    var w = $('body').width();
    if (!w) return;
    $('body').attr('class', w > 1024 ? 'default' : 'lt-default');
}
$(function () {
    window.screenResize();
    window.onresize = screenResize;

    jQuery("#weixinclk").click(function () {
        jQuery("#weixinbox").fadeIn();
    })
    jQuery("#wcloses").click(function () {
        jQuery("#weixinbox").fadeOut();
    })

})
