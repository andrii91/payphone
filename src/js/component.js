$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });
  var $use_case = $('.use_case-carousel');
  $use_case.owlCarousel({
    center: true,
    loop: true,
    margin: 34,
    'nav': true,
    responsive: {
      600: {
        items: 3
      }
    }
  });

  $use_case.on('changed.owl.carousel', function (event) {
    var index = event.item.index;
    if(index == 3){
       index = event.item.count + 3;
    }
    console.log(index);
    $('.use_case-nav li').removeClass('active');
    $($('.use_case-nav li')[index-4]).addClass('active');
  });

  $('.use_case-carousel .owl-stage-outer').css({
    'max-height': $('.owl-item.active.center').height() + 38,
  });
  
  $('.use_case-nav li').click(function(){
    $($('.use_case-carousel .owl-dot')[$(this).data('slide')]).trigger('click');
  });
  
  $('.founders-item').click(function(){
    $('#team_modal .founders-item img').attr('src', $(this).find('img').attr('src'));
    $('#team_modal .founders-item h4').text($(this).find('h4').text());
    $('#team_modal .founders-item .founders-social').html($(this).find('.founders-social').html());
//    $('#team_modal .founders-social a').attr('href', $(this).find('.founders-social a').attr('href'));
    $('#team_modal p').html($(this).data('full_info'));
  });
  
  $('.faq-item').click(function(){
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
});