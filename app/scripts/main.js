'use strict';

var template = [
    '<div class="lunch col-xs-4 col-sm-3 col-md-2">',
    '    <img class="media-object" src="IMG_SRC" title="MEDIA_HEADING">',
    // '  <div class="media-body">',
    // '  </div>',
    '</div>'
].join('\n');

// call from any page w/ jquery
$.get(
    'http://www.corsproxy.com/www.atasteofkoko.com/100-things-you-need-to-eat-this-summer-in-austin/'
).then(function (txt) {

    // var $txt = $(txt);
    var $meals = $('h1', txt).filter(function () {
        return /^\d+\./.test($.trim($(this).text()));
    });
    var $images = $meals.map(function (idx, el) {
        return $(el).nextUntil('h1').find('img');
    });

    // console.log($meals);
    // console.log($images);

    // console.log($items);

    var $items = $meals.map(function (idx, el) {
        return $(
            template.replace(/MEDIA_HEADING/g, $(el).text())
            .replace(/IMG_SRC/g, $images[idx].attr('src'))
        )[0].outerHTML;
    }).get().sort(function () {
        return Math.random() - 0.5;
    }).join('');

    // debugger;

    $('.row.marketing')
        .html($items) //;

    // window.setTimeout(function () {
    //     $('.row.marketing')
    .isotope({
        itemSelector: '.lunch'
    });
    // }, 1000);

    // $('.row.marketing').append($items);

    // alert($('h1', txt)[Math.floor(Math.random() * $('h1', txt).length)].innerText);
}, function (e) {
    window.alert(e);
});


$('.btn-success').on('click', function () {

    var timeout;

    timeout = window.setInterval(function () {
        var $lunch = $('.lunch');
        var length = $lunch.length;
        if (length === 1) {
            window.clearInterval(timeout);
            // window.alert('done!');
            return;
        }

        var $removeables = $lunch.filter(function () {
            return Math.random() > 0.8;
        });

        // don't remove everything!
        if ($removeables.length === $lunch.length) {
            return;
        }

        $('.row.marketing').isotope('remove', $removeables);
    }, 1000);

});
