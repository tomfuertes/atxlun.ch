'use strict';

// isotope after window.load
$(window).load(function () {
    $('.row.marketing').show()
        .isotope({
            itemSelector: '.lunch'
        });
});

// random lunch on button click
$('.btn-success').on('click', function () {

    var timeout;

    (function removeItems() { // instant setInterval pattern

        var $lunch = $('.lunch');
        var length = $lunch.length;
        if (length === 1) {
            window.clearInterval(timeout);
            window.alert($lunch.first().find('img').attr('title'));
            return;
        }

        var $removeables = $lunch.filter(function () {
            return Math.random() > 0.5;
        });

        // don't remove everything!
        if ($removeables.length === $lunch.length) {
            return;
        }

        $('.row.marketing').isotope('remove', $removeables);

        timeout = window.setInterval(removeItems, 850); // has to be > animations / 800

    })();

});
