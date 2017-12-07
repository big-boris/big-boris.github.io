$(document).ready(function() {

  // mask for phone field
  $('input[type="tel"]').inputmask('+7 (999) 999 99 99', {
    clearMaskOnLostFocus: true,
  });

  $('#burger-mobile').click(function(){
    $(this).toggleClass('open');
    // event.preventDefault();
    $('body').toggleClass('overflow-hide');
    $('.mobile-menu__overlay').slideToggle(600);
    $('#nav-mobile').slideToggle(600);
    $('.nav-burger__line').toggleClass('nav-burger__line--white');
  });

  $('.dropdown-mobile').click(function(){
    $(this).find('.dropdown-mobile__list').slideToggle();
    $(this).toggleClass('active');
    // return false;
   });

  // form - validation of required fields
  var req_check = {
    phone:  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
    mail:   /^[\w0-9\._-]+@\w+\.\w{2,4}$/,
  }
  $('.js-form_validate').submit(function () {
    var form = $(this),
      action = $(this).attr('action');

    form.find('*[data-reqfield]').each(function () {
      var name = $(this).attr('name'),
        field = $(this).closest('.form__field'),
        value = $(this).val();

      if(req_check[name] === undefined) {
        req_check[name] = /^.+$/; // любой символ
      }
      if(req_check[name].test(value)) {
        field.removeClass('form__field--invalid');
      }
      else {
        field.addClass('form__field--invalid');
        $('html, body').animate({
          scrollTop: $('.form__field--invalid:eq(0)').offset().top - 30,
        }, 300);
      }
    });

    if(form.find('.form__field--invalid').length) {
      if(window.innerWidth <= 768) {
        $('html, body').animate({
          scrollTop: $('.form__field--invalid:eq(0)').offset().top - 30,
        }, 300);
      }
      return false;
    }
  });
  // form - validation of required fields when entering
  $('.js-form_validate').on('keydown, change', '.form__field--invalid *[data-reqfield]', function () {
    var name = $(this).attr('name'),
      value = $(this).val(),
      field = $(this).closest('.form__field');
    if(req_check[name].test(value)) {
      field.removeClass('form__field--invalid');
    }
  });

  // aligning the height of the Turnkey-services
  function equalHeight () {
    $('.js-equal_height').height('auto');

    if(window.innerWidth >= 577) {
      var maxHeight = [ 0, 0];
      $('.js-equal_height').each(function () {
        var h = $(this).outerHeight(),
          i = 0;
        if(h > maxHeight[i]) {
          maxHeight[i] = h;
        }
      });
      $('.js-equal_height').each(function () {
        var i = 0;
        $(this).outerHeight(maxHeight[i]);
      });
    }
  }
  equalHeight();

  // aligning the height of the Outadv-services
  function equalOutadvHeight () {
    $('.js-equal_outadvh').height('auto');

    if(window.innerWidth >= 577) {
      var maxHeight = [ 0, 0];
      $('.js-equal_outadvh').each(function () {
        var h = $(this).outerHeight(),
          i = 0;
        if(h > maxHeight[i]) {
          maxHeight[i] = h;
        }
      });
      $('.js-equal_outadvh').each(function () {
        var i = 0;
        $(this).outerHeight(maxHeight[i]);
      });
    }
  }
  equalOutadvHeight();

  $(window).resize(function () {
    equalHeight();
    equalOutadvHeight();
  });

  // scroll through the page
  $('.js-scroll_to').click(function (e) {
    var scroll_to = $(this).attr('data-scroll_to'),
      offsetTop = scroll_to === '#' ? 0 : $(scroll_to).offset().top;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
  });

});