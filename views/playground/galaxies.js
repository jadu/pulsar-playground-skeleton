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