$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  var $use_case = $('.use_case-carousel');
  $use_case.owlCarousel({
    center: true,
    loop: true,
    margin: 34,
    nav: true,
    responsive: {
      0: {
        margin: 0,
        items: 1
      },
      600: {
        items: 3
      }
    }
  });

  $use_case.on('changed.owl.carousel', function (event) {
    var index = event.item.index;
    if (index == 3) {
      index = event.item.count + 3;
    }
    console.log(index);
    $('.use_case-nav li').removeClass('active');
    $($('.use_case-nav li')[index - 4]).addClass('active');
  });
  setTimeout(function () {
    $('.use_case-carousel .owl-stage-outer').css({
      'max-height': $('.owl-item.active.center').height() + 48,
    });
  }, 300);


  $('.use_case-nav li').click(function () {
    $($('.use_case-carousel .owl-dot')[$(this).data('slide')]).trigger('click');
  });

  $('.founders-item').click(function () {
    $('#team_modal .founders-item img').attr('src', $(this).find('img').attr('src'));
    $('#team_modal .founders-item h4').text($(this).find('h4').text());
    $('#team_modal .founders-item .founders-social').html($(this).find('.founders-social').html());
    //    $('#team_modal .founders-social a').attr('href', $(this).find('.founders-social a').attr('href'));
    $('#team_modal p').html($(this).data('full_info'));
  });

  $('.faq-item').click(function () {
    $(this).toggleClass('active');
    $(this).find('.more').slideToggle(200);
  });

  $('.menu a').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

  $('input[name="thankyou_url"]').val(window.location.href + 'success.html')
  if ($('.ok').length == 3) {
    $('.submit').removeAttr('disabled');
  } else {
    $('.submit').attr('disabled', 'disabled');

  }
  $('#name').change(function () {

    console.log($('.ok').length);
    if ($(this).val() == '' || $(this).val() == ' ') {
      console.log('error');
      $(this).parent().find('.ok').remove();
      $(this).parent().addClass('error');
      $('.submit').attr('disabled', 'disabled');

    } else {
      console.log('ok');
      $(this).parent().removeClass('error');
      $(this).parent().append('<span class="ok"><svg viewBox="0 0 139 139" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#00c48d" stroke-width="6" stroke-miterlimit="10" d="M38.5 67.3L60.6 90l39.9-41"/></svg></span>');
      if ($('.ok').length == 3) {
        $('.submit').removeAttr('disabled');
      }

    }

  });

  $('#phone').change(function () {
    var $phone = parseInt($(this).val());
    var index = $(this).val().indexOf('+');
    if ($phone == '' || $phone == ' ' || $phone == NaN || index !== 0) {
      $(this).parent().find('.ok').remove();
      $(this).parent().addClass('error');
      $('.submit').attr('disabled', 'disabled');

    } else {
      console.log('ok');
      $(this).parent().removeClass('error');
      $(this).parent().append('<span class="ok"><svg viewBox="0 0 139 139" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#00c48d" stroke-width="6" stroke-miterlimit="10" d="M38.5 67.3L60.6 90l39.9-41"/></svg></span>');

      if ($('.ok').length == 3) {
        $('.submit').removeAttr('disabled');
      }

    }
  })

  $('#email').change(function () {
    var $email = $(this).val().indexOf('@');
    var index = $(this).val().indexOf('.')
    if ($email == '' || $email == ' ' || $email == NaN || $email < 0 || index < 0) {
      $(this).parent().find('.ok').remove();
      $(this).parent().addClass('error');
      $('.submit').attr('disabled', 'disabled');

    } else {
      console.log('ok');
      $(this).parent().removeClass('error');
      $(this).parent().append('<span class="ok"><svg viewBox="0 0 139 139" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#00c48d" stroke-width="6" stroke-miterlimit="10" d="M38.5 67.3L60.6 90l39.9-41"/></svg></span>');
      if ($('.ok').length == 3) {
        $('.submit').removeAttr('disabled');
      }
    }
  })
});