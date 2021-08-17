$(() => {

  let displayNavMobile = () => $('#nav-menu, #nav-button i:last-child').hide();
  let displayNavLaptop = () => $('#nav-menu').show();

  let toggleNavbar = () => {
    $('#nav-menu').slideToggle();
    $('#nav-button i').toggle();
  };

  let setScrollMobile = () => {
    $('.nav-menu__item').on('tap click', function (event) {
      event.preventDefault();
      toggleNavbar();
      let $hash = $(this.hash);
      $('html, body').animate({scrollTop: $hash.offset().top - ($('.grid-item-1').height()*0.3225)}, 1000, 'linear', function () {
        $hash.focus();
      });
    });
  };

  let setScrollLaptop = () => {
    $('.nav-menu__item').on('click', function (event) {
      event.preventDefault();
      let $hash = $(this.hash);
      $('html, body').stop().animate({scrollTop: $hash.offset().top}, 1000, 'linear', function() {
        $hash.focus();
      });
    });
  };

  let unsetScroll = () => {
    $('.nav-menu__item').off();
  };

  if ($(window).width() < 992) {
    displayNavMobile();
    setScrollMobile();
  } else {
    setScrollLaptop();
  };

  $('#nav-button').change(function () {
    toggleNavbar();
  });

  $(window).resize(function () {
    if ($(window).width() < 992) {
      unsetScroll();
      displayNavMobile();
      setScrollMobile();
    } else {
      unsetScroll();
      displayNavLaptop();
      setScrollLaptop();
    }
  });

});
