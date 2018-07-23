(function ($) {

    // Protect IE8 from any erroneous console.log uses which would break everything
    if (!window.console) {
        console = { log: function() {} }
    };

    var $html = $('html'),
        lt10 = $html.hasClass('lt-ie10');

    $html.removeClass('no-js');

    pulsar.navMain = new pulsar.NavMainComponent($html, window);

    $(function () {
        pulsar.navMain.init();

        $('.d-example-nav__link').on('click', function() {
            var $this = $(this),
                $parent = $(this).closest('.d-example'),
                lang = $this.data('toggle');

                $parent.find('.d-example-nav__link').removeClass('is-active');
                $this.addClass('is-active');
            
                $parent.find('.js-' + lang).show();
                $parent.find('.d-example__code:not(.js-' + lang + ')').hide();
        });
    });

}(jQuery));
