(function($){
    $.fn.rightClickEscape = function(options){

        var defaults = {
            url : 'http://www.yahoo.jp/'
        };

        var setting = $.extend(defaults,options);

        $(this).bind('contextmenu', function() {
            location.href=　setting.url;
            return false;
        });

    };
})(jQuery);

$(function(){
    $('body').rightClickEscape({
        url : 'http://webdrawer.net/'
    });
});
