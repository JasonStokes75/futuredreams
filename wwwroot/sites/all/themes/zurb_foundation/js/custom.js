(function ($) {
  Drupal.behaviors.zurbReveal = {
    attach: function(context, settings) {
      $('.view-marquees .views-field-field-marquee .field-content').slick({
        autoplay: true,
        autoplaySpeed : 3000,
        arrows : true,
        cssEase : 'ease',
        dots : true,
        fade : true
      });
      $('.view-front-marquee .view-content').slick({
        autoplay: true,
        autoplaySpeed : 3000,
        arrows : true,
        cssEase : 'ease',
        dots : true,
        fade : true
      });
    }
  }
})(jQuery);