'use strict';

// categories
var LUNCH = 'lunch';
var DESERT = 'desert';
var LAZYSUNDAY = 'lazysunday';
var ALCOHOL = 'alcohol';

var LUNCHABLES = [{
  name: '46. Slow smoked brisket // Hoover\'s',
  image: './images/slow-smoked-brisket-hoovers.jpg',
  categories: [LUNCH]
}, {
  name: '45. Filet Mignon Pho // PhoNatic',
  image: './images/filet-mignon-pho-phonatic.jpg',
  categories: [LUNCH]
}, {
  name: '60. Cochinita Pibil // El Chilito',
  image: './images/cochinita-pibil-el-chilito.jpg',
  categories: [LUNCH]
}, {
  name: '72. Hongos y huitlacoche // La Condesa ',
  image: './images/hongos-y-huitlacoche-la-condesa-.jpg',
  categories: [LUNCH]
}, {
  name: '2. Croque Madame // Epicerie',
  image: './images/croque-madame-epicerie.jpg',
  categories: [LUNCH]
}, {
  name: '9. Banana Bourbon Pie // Cake &amp; Spoon',
  image: './images/banana-bourbon-pie-cake-spoon.jpg',
  categories: [DESERT]
}, {
  name: '42. The Love Cleanse // Daily Juice',
  image: './images/the-love-cleanse-daily-juice.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '74. Crab Cake Mache &amp; Frisee Salad // Clark\'s Oyster Bar',
  image: './images/crab-cake-mache-frisee-salad-clarks-oyster-bar.jpg',
  categories: [LUNCH]
}, {
  name: '19. Puffy tacos // El Chilito',
  image: './images/puffy-tacos-el-chilito.jpg',
  categories: [LUNCH]
}, {
  name: '29. Creme brûlée steamer // The Steeping Room',
  image: './images/creme-brulee-steamer-the-steeping-room.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '63. Grilled Lamb Chops // Corazon at Castle Hill',
  image: './images/grilled-lamb-chops-corazon-at-castle-hill.jpg',
  categories: [LUNCH]
}, {
  name: '87. Dipping Ramen // Ramen Tatsu-ya',
  image: './images/dipping-ramen-ramen-tatsu-ya.jpg',
  categories: [LUNCH]
}, {
  name: '22. Lomo Saltado // Llama\'s Food Trailer',
  image: './images/lomo-saltado-llamas-food-trailer.jpg',
  categories: [LUNCH]
}, {
  name: '64. Blueberry Danish // Quack\'s Bakery',
  image: './images/blueberry-danish-quacks-bakery.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '34. Farm egg // Olive &amp; June',
  image: './images/farm-egg-olive-and-june.jpg',
  categories: [LUNCH, LAZYSUNDAY]
}, {
  name: '84. East Side Hero // Whisler\'s',
  image: './images/east-side-hero-whislers.jpg',
  categories: [LAZYSUNDAY, ALCOHOL]
}, {
  name: '31. Iced Vietnamese Coffee // Thunderbird Coffee',
  image: './images/iced-vietnamese-coffee-thunderbird-coffee.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '18. Patbingsu // Tour Les Jour',
  image: './images/patbingsu-tour-les-jour.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '4. Pan Roasted Hamburger // Clark\'s Oyster Bar',
  image: './images/pan-roasted-hamburger-clarks-oyster-bar.jpg',
  categories: [LUNCH]
}, {
  name: '36. Spiked frozen custard // Yeti Frozen Custard',
  image: './images/spiked-frozen-custard-yeti-frozen-custard.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '91. Fruit Salad // Cenote',
  image: './images/fruit-salad-cenote.jpg',
  categories: [LUNCH]
}, {
  name: '20. Paloma // Hillside Farmacy',
  image: './images/paloma-hillside-farmacy.jpg',
  categories: [ALCOHOL, LAZYSUNDAY]
}, {
  name: '89. Korean Bulgogi Burger // Chi\'Lantro BBQ',
  image: './images/korean-bulgogi-burger-chilantro-bbq.jpg',
  categories: [LUNCH]
}, {
  name: '58. Shrimp Chelada // El Alma\'s',
  image: './images/shrimp-chelada-el-almas.jpg',
  categories: [LUNCH]
}, {
  name: '30. Doughnut burger // Gourdough\'s',
  image: './images/doughnut-burger-gourdoughs.jpg',
  categories: [LUNCH, LAZYSUNDAY, DESERT]
}, {
  name: '33. Oyster Tacos // Garrido\'s',
  image: './images/oyster-tacos-garridos.jpg',
  categories: [LUNCH]
}, {
  name: '54. Indian Cuisine // G\'Raj Mahal',
  image: './images/indian-cuisine-graj-mahal.jpg',
  categories: [LUNCH]
}, {
  name: '95. Mango Sticky Rice // Thai Passion',
  image: './images/mango-sticky-rice-thai-passion.jpg',
  categories: [DESERT]
}, {
  name: '83. Strawberry Jalapeño Profiteroles  // Mulberry',
  image: './images/strawberry-jalapeno-profiteroles-mulberry.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '86. Nutella Milkshake // Hopdoddy',
  image: './images/nutella-milkshake-hopdoddy.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '50. Roasted Tomato Soup // Trento Austin',
  image: './images/roasted-tomato-soup-trento-austin.jpg',
  categories: [LUNCH]
}, {
  name: '92. Cinnamon Rolls // Contigo',
  image: './images/cinnamon-rolls-contigo.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '53. Lobster Rolls // Garbos Lobster Truck',
  image: './images/lobster-rolls-garbos-lobster-truck.jpg',
  categories: [LUNCH]
}, {
  name: '47. Ice Cream Sandwiches // Coolhaus',
  image: './images/ice-cream-sandwiches-coolhaus.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '75. Hazelnut Chocolate Budino // Backspace',
  image: './images/hazelnut-chocolate-budino-backspace.jpg',
  categories: [DESERT]
}, {
  name: '55. Who Dat Sammie // Austin Daily Press',
  image: './images/who-dat-sammie-austin-daily-press.jpg',
  categories: [LUNCH]
}, {
  name: '51. Chicken BLT // Bacon Restaurant',
  image: './images/chicken-blt-bacon-restaurant.jpg',
  categories: [LUNCH]
}, {
  name: '11. Primetime burger // Hopdoddy',
  image: './images/primetime-burger-hopdoddy.jpg',
  categories: [LUNCH]
}, {
  name: '97. Blanco Mule // Clark\'s Oyster Bar',
  image: './images/blanco-mule-clarks-oyster-bar.jpg',
  categories: [ALCOHOL]
}, {
  name: '14. Beers and tacos // Papi Tino\'s',
  image: './images/beers-and-tacos-papi-tinos.jpg',
  categories: [LUNCH, ALCOHOL, LAZYSUNDAY]
}, {
  name: '62. Crispy Spicy Chicken Wings with Yogurt Sauce // Say La V',
  image: './images/crispy-spicy-chicken-wings-with-yogurt-sauce-say-la-v.jpg',
  categories: [LUNCH]
}, {
  name: '35. Honey rosemary fried chicken // Salty Sow',
  image: './images/honey-rosemary-fried-chicken-salty-sow.jpg',
  categories: [LUNCH]
}, {
  name: '49. Chai French Toast // The Steeping Room',
  image: './images/chai-french-toast-the-steeping-room.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '93. Hawaiian Pork Belly Bites // The Peached Tortilla',
  image: './images/hawaiian-pork-belly-bites-the-peached-tortilla.jpg',
  categories: [LUNCH]
}, {
  name: '61. Gourmet Grilled Cheese Sandwiches // Burro Cheese Kitchen',
  image: './images/gourmet-grilled-cheese-sandwiches-burro-cheese-kitchen.jpg',
  categories: [LUNCH]
}, {
  name: '94. Pimms Cup// Clark\'s Oyster Bar',
  image: './images/pimms-cup-clarks-oyster-bar.jpg',
  categories: [ALCOHOL]
}, {
  name: '81. Wagyu Beef Hot Rock // Uchi',
  image: './images/wagyu-beef-hot-rock-uchi.jpg',
  categories: [LUNCH]
}, {
  name: '5. Texas-style brisket // Franklin\'s BBQ',
  image: './images/texas-style-brisket-franklins-bbq.jpg',
  categories: [LUNCH]
}, {
  name: '98. Kimchi Ramen // Kome Austin',
  image: './images/kimchi-ramen-kome-austin.jpg',
  categories: [LUNCH]
}, {
  name: '77. Lobster Rolls // Dock and Roll',
  image: './images/lobster-rolls-dock-and-roll.jpg',
  categories: [LUNCH]
}, {
  name: '80. Aperol Spritz // Olive &amp; June',
  image: './images/aperol-spritz-olive-june.jpg',
  categories: [ALCOHOL]
}, {
  name: '43. Fajitas On The Grill // Benji\'s Cantina',
  image: './images/fajitas-on-the-grill-benjis-cantina.jpg',
  categories: [LUNCH]
}, {
  name: '69. Flan Latte // Dominican Joe',
  image: './images/flan-latte-dominican-joe.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '23. Crawfish tacos // Turf and Surf',
  image: './images/crawfish-tacos-turf-and-surf.jpg',
  categories: [LUNCH]
}, {
  name: '71. Miso Marinated Mero // The Carillon',
  image: './images/miso-marinated-mero-the-carillon.jpg',
  categories: [LUNCH]
}, {
  name: '100. Fresh Fruit &amp; FroYo // Yogurtland',
  image: './images/fresh-fruit-froyo-yogurtland.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '48. Chicken Fried Egg // Barley Swine',
  image: './images/chicken-fried-egg-barley-swine.jpg',
  categories: [LUNCH]
}, {
  name: '6. Pork belly tacos // The Peached Tortilla',
  image: './images/pork-belly-tacos-the-peached-tortilla.jpg',
  categories: [LUNCH]
}, {
  name: '37. Brazilian Empanadas // Rio\'s Brazilian Cafe',
  image: './images/brazilian-empanadas-rios-brazilian-cafe.jpg',
  categories: [LUNCH]
}, {
  name: '3. Grilled Texas Peaches // Swift\'s Attic',
  image: './images/grilled-texas-peaches-swifts-attic.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '12. Fried milk at Uchiko',
  image: './images/fried-milk-at-uchiko.jpg',
  categories: [LUNCH, LAZYSUNDAY]
}, {
  name: '65. Ahi Tuna Salad // Snap Kitchen',
  image: './images/ahi-tuna-salad-snap-kitchen.jpg',
  categories: [LUNCH]
}, {
  name: '88. Mexican Vanilla Ice Cream // Amy\'s Ice Cream',
  image: './images/mexican-vanilla-ice-cream-amys-ice-cream.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '68. Pork belly slider // Lucky Robot',
  image: './images/pork-belly-slider-lucky-robot.jpg',
  categories: [LUNCH]
}, {
  name: '32. Caraibe terrine // The Carillon',
  image: './images/caraibe-terrine-the-carillon.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '38. Iced Coconut Oolong Tea // Zhi Tea',
  image: './images/iced-coconut-oolong-tea-zhi-tea.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '78. Mexican Brunch // Julio\'s',
  image: './images/mexican-brunch-julios.jpg',
  categories: [LUNCH]
}, {
  name: '82. Thai Ice Cream // Thrice Bakery',
  image: './images/thai-ice-cream-thrice-bakery.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '79. Fried Calamari // NoRTH',
  image: './images/fried-calamari-north.jpg',
  categories: [LUNCH]
}, {
  name: '99. Takoyaki // Love Balls Bus',
  image: './images/takoyaki-love-balls-bus.jpg',
  categories: [LUNCH]
}, {
  name: '10. Iced vanilla lattes // Patika Coffee',
  image: './images/iced-vanilla-lattes-patika-coffee.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '21. Crispy polenta cakes // Winflo Osteria',
  image: './images/crispy-polenta-cakes-winflo-osteria.jpg',
  categories: [LUNCH]
}, {
  name: '1. Steelhead Crisp // Lenoir',
  image: './images/steelhead-crisp-lenoir.jpg',
  categories: [LUNCH]
}, {
  name: '41. Son In Law // Sway Thai',
  image: './images/son-in-law-sway-thai.jpg',
  categories: [LUNCH]
}, {
  name: '28. Vietnamese spring rolls // Thanh Nhi',
  image: './images/vietnamese-spring-rolls-thanh-nhi.jpg',
  categories: [LUNCH]
}, {
  name: '70. Zucchini Chips // NoRTH',
  image: './images/zucchini-chips-north.jpg',
  categories: [LUNCH]
}, {
  name: '15. Cacio e Pepe // Patrizi\'s Austin',
  image: './images/cacio-e-pepe-patrizis-austin.jpg',
  categories: [LUNCH]
}, {
  name: '59. Brussels Sprout Caesar Salad // Salty Sow',
  image: './images/brussels-sprout-caesar-salad-salty-sow.jpg',
  categories: [LUNCH]
}, {
  name: '25. Seafood cerviche // La Condesa',
  image: './images/seafood-cerviche-la-condesa.jpg',
  categories: [LUNCH]
}, {
  name: '13. The Salty Sweet // Cow Tipping Creamery',
  image: './images/the-salty-sweet-cow-tipping-creamery.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '16. Kimchi fries // Chi\'Lantro BBQ',
  image: './images/kimchi-fries-chilantro-bbq.jpg',
  categories: [LUNCH]
}, {
  name: '24. Grilled blackened redfish // TRACE',
  image: './images/grilled-blackened-redfish-trace.jpg',
  categories: [LUNCH]
}, {
  name: '76. Seared Foie Gras Nigiri // Uchi',
  image: './images/seared-foie-gras-nigiri-uchi.jpg',
  categories: [LUNCH]
}, {
  name: '85. Butcher\'s Burger // Salt and Time',
  image: './images/butchers-burger-salt-and-time.jpg',
  categories: [LUNCH]
}, {
  name: '56. Sweet Potato Donut Holes // Say La V',
  image: './images/sweet-potato-donut-holes-say-la-v.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '96. Tom Kha // Thai Passion',
  image: './images/tom-kha-thai-passion.jpg',
  categories: [LUNCH]
}, {
  name: '26. Roast marshmallows // Halcyon',
  image: './images/roast-marshmallows-halcyon.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '57. Butter Coffee // Picnik Austin',
  image: './images/butter-coffee-picnik-austin.jpg',
  categories: [LAZYSUNDAY]
}, {
  name: '90. Korokee // Fresh Off the Truck',
  image: './images/korokee-fresh-off-the-truck.jpg',
  categories: [LUNCH]
}, {
  name: '40. Thai Tea Affogato // Sway Thai',
  image: './images/thai-tea-affogato-sway-thai.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '67. Mt Everest Snow Ice Dessert // Teapioca Lounge',
  image: './images/mt-everest-snow-ice-dessert-teapioca-lounge.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '7. Fried Brussels Sprouts Salad // East Side King',
  image: './images/fried-brussels-sprouts-salad-east-side-king.jpg',
  categories: [LUNCH]
}, {
  name: '39. Iced Vanilla Lattes // Vintage Heart Coffee',
  image: './images/iced-vanilla-lattes-vintage-heart-coffee.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '17. Bianca pizza // Backspace Pizza',
  image: './images/bianca-pizza-backspace-pizza.jpg',
  categories: [LUNCH]
}, {
  name: '44. Cheesecake Sopapillas // Benji\'s Cantina',
  image: './images/cheesecake-sopapillas-benjis-cantina.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '66. Tiramisu French Toast // Winflo Osteria',
  image: './images/tiramisu-french-toast-winflo-osteria.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '8. Sno cones // Sno Beach',
  image: './images/sno-cones-sno-beach.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '27. Beef tongue hash // Contigo',
  image: './images/beef-tongue-hash-contigo.jpg',
  categories: [LUNCH]
}, {
  name: '52. Goat Cheese Thyme &amp; Honey Ice Cream // Lick Ice Creams',
  image: './images/goat-cheese-thyme-honey-ice-cream-lick-ice-creams.jpg',
  categories: [DESERT, LAZYSUNDAY]
}, {
  name: '73. Lobster &amp; Farm Egg En Cocottee // Clark\'s Oyster Bar',
  image: './images/lobster-farm-egg-en-cocottee-clarks-oyster-bar.jpg',
  categories: [LUNCH]
}];

var TEMPLATE = function (lunch) {
  return [
    '<div class="item col-xs-4 col-sm-3 col-md-2 ',
    lunch.categories.join(' '),
    '">',
    '<img class="media-object" src="', lunch.image,
    '" title="', lunch.name,
    '"></div>'
  ].join('');
};

var $container = $('.row.marketing');
$container.empty();
var els = [];

for (var i = LUNCHABLES.length - 1; i >= 0; i--) {
  els.push(TEMPLATE(LUNCHABLES[i]));
}

$container.html(els.join(''));

// isotope after window.load
$(window).load(function () {
  $container
    .isotope({
      itemSelector: '.item'
    });
});

var $pills = $('.nav-pills');
var $listItems = $pills.find('li');
$pills.on('click', 'a', function (e) {
  e.preventDefault();
  var $this = $(this);
  $listItems.removeClass('active');
  $this.closest('li').addClass('active');
  $container.isotope({
    filter: $(this).data('filter')
  });
});

// random lunch on button click
$('.btn-success').on('click', function (e) {

  e.preventDefault();

  var timeout;
  var $lunchables = $('.item:visible');
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

      var $els = $('.item:visible');

      console.log($els.length);

      if ($els.length === 1) {
        window.clearInterval(timeout);
        window.ga('send', 'event', 'lunch', 'random', $chosenOne.find('img').attr('title'));
        window.alert($chosenOne.find('img').attr('title'));
        $container.isotope('off', 'layoutComplete', removeItems);
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
