$(() => {
  if ($(window).width() < 992) {
    $('#nav-menu, #nav-button i:last-child').hide();
    $('#nav-button').change(function () {
      $('#nav-menu').slideToggle();
      $('#nav-button i').toggle();
    });
    $('.nav-menu__item').on('tap click', function (event) {
      event.preventDefault();
      $('#nav-menu').slideToggle();
      $('#nav-button i').toggle();
      $('html, body').animate({scrollTop: $(this.hash).offset().top - $('.grid-item-1').height()}, 2000, 'swing', function() {});
    });
  } else {
    $('.nav-menu__item').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: $(this.hash).offset().top}, 2000, 'swing', function() {});
    });
  }
});
