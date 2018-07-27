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

        $('[data-responsive-toggle]').on('click', function(e) {
            var $this = $(this),
                $otherToggles = $this.siblings('[data-responsive-toggle]'),
                $container = $html.find('.js-responsive-container');

            if ($this.data('responsive-toggle') == 'mobile') {
                $container
                    .removeClass('galaxies-preview__frame--desktop galaxies-preview__frame--tablet')
                    .addClass('galaxies-preview__frame--mobile');

            }
            else if ($this.data('responsive-toggle') == 'tablet') {
                $container
                    .removeClass('galaxies-preview__frame--desktop galaxies-preview__frame--mobile')
                    .addClass('galaxies-preview__frame--tablet');
            }
            else {
                $container
                    .removeClass('galaxies-preview__frame--tablet galaxies-preview__frame--mobile')
                    .addClass('galaxies-preview__frame--desktop');
            }

            $this.addClass('is-active').blur();
            $otherToggles.removeClass('is-active');
        });

    });

}(jQuery));
