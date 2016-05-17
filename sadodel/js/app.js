function myScrollTo(o) {
    var t = $("." + o).offset().top - 10;
    $("html, body").animate({
        scrollTop:t
    }, 1500);
};