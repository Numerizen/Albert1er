(function($) {
    $(document).ready(function() {
        $('#search-form').addClass('closed');

        $('.search-toggle').click(function() {
            $('#search-form').toggleClass('closed').toggleClass('open');
            if ($('#search-form').hasClass('open')) {
                $('#query').focus();
            }
        });
        // Numerizen 
        boutons = $('#sharing-buttons').detach();
        $('nav .nav-tabs').after(boutons);
    });
})(jQuery)