$(function() {
    (function($) {

        var ost = 0;

        var s = 5;

        $(window).scroll(function() {
            var cOst = $(this).scrollTop();

            if((cOst - ost) > s && cOst > ost) {
                $('#hide-on-scroll').addClass('fixed').removeClass('default');
            }
            else if ((ost - cOst) > s) {
                $('#hide-on-scroll').addClass('default').removeClass('fixed');
            }

            ost = cOst;
        });

    })(jQuery);
});
