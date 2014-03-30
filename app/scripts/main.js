'use strict';

// isotope after window.load
$(window).load(function () {
    $('.row.marketing')
        .isotope({
            itemSelector: '.lunch'
        });
});

// random lunch on button click
$('.btn-success').on('click', function (e) {

    e.preventDefault();

    var timeout;
    var $lunchables = $('.lunch');
    var $container = $('.row.marketing');
    var chosenIndex = Math.floor(Math.random() * $lunchables.length);
    var $chosenOne = $($lunchables[chosenIndex]);
    var $removeables = $lunchables.filter(function (idx) {
        return idx === chosenIndex ? false : true;
    });

    $container.isotope('on', 'layoutComplete', removeItems);
    removeItems();


    /*jshint latedef:false*/
    var i = 0;
    function removeItems() { // instant setInterval pattern
        timeout = window.setTimeout(function () {

            var $els = $container.isotope('getItemElements');

            console.log($els.length);

            if ($els.length === 1) {
                window.clearInterval(timeout);
                window.ga('send', 'event', 'lunch', 'random', $chosenOne.find('img').attr('title'));
                window.alert($chosenOne.find('img').attr('title'));
                return;
            }

            // remove and layout
            $container
                .isotope('remove', $removeables.filter(function () {
                    return Math.random() > 0.75;
                }))
                .isotope({
                    sortBy: ++i % 2 ? 'random' : 'original-order'
                });
        }, 10);
    }
});
