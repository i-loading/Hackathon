$(document).ready(function () {

  // Слайдер на главной
  $(".owl-carousel_first").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1200,
    margin: 100,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  // Menu toggle
  $('.menu_toggle').click(function (e) {
    e.preventDefault();
    $('.owl-carousel').css("z-index", "0");
    
    $('.menu').css("opacity", "1");
    $('.menu').css("z-index", "100");
    $('.menu_wrap').css("z-index", "100");
    $('.menu').addClass('translate');

    $('.grey-bg').css("background", "rgba(0,0,0, 0.5)");
    $('.grey-bg').css("display", "block");

    $(this).css("opacity", "0");
    $('body').css("overflow", "hidden");

    $('.arduino, .kompas').css("z-index", "-1");
    $('.folders').css("z-index", "-1");

    // $('.owl-carousel_arduino, .owl-carousel_kompas').css("z-index", "-1");
    // $('.slider_wrapper').css("z-index", "-1");
    // $('.table_wrapper').css("z-index", "-1");
  });
  $('.close').click(function (e) {
    e.preventDefault();
    $('.menu').css("opacity", "0");
    $('.menu').css("z-index", "-1");
    $('.menu').removeClass('translate');
    $('.menu_wrap').css("z-index", "-1");
    $('.menu .phone').css("z-index", "-1");
    
    $('.grey-bg').css("background", "unset");
    $('.grey-bg').css("display", "none");

    $('.menu_toggle').css("opacity", "1");
    $('body').css("overflow", "auto");
    
    $('.arduino, .kompas').css("z-index", "10");
    $('.folders').css("z-index", "10");

    // $('.menu_wrapper').css("z-index", "-1");
    // $('.menu_wrapper-table').css("z-index", "-1");
    // $('.owl-carousel_arduino, .owl-carousel_kompas').css("z-index", "10");
    // $('.choose').css("z-index", "10000");
    // $('.table_wrapper').css("z-index", "100000");
    // $('.select').css("z-index", "100000");
    // $('.select select').css("z-index", "100000");
  });

  // Слайдера на вкладе с Видеоуроками
  $('.owl-carousel_arduino').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText : ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
    responsive:{
      0:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
  $('.owl-carousel_kompas').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    navText : ["<i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>","<i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>"],
    responsive:{
      0:{
        items:1
      },
      700:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
  // Слайдера на вкладе с Видеоуроками

  // Появление/скрытие видосов по нажатию
  $('.owl-carousel_kompas').fadeOut();
  $('.kompas').click(function (e) { 
    e.preventDefault();
    $('.owl-carousel_arduino').fadeOut();
    $('.owl-carousel_kompas').fadeIn();
  });
  $('.arduino').click(function (e) { 
    e.preventDefault();
    $('.owl-carousel_kompas').fadeOut();
    $('.owl-carousel_arduino').fadeIn();
  });


  // Lazy loading video's in slider's
  // selector of all videos on the page
  const videos = document.querySelectorAll('.video');

  // generate video url
  let generateUrl = function(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  };

  // creating iframe
  let createIframe = function(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('src', generateUrl(id));

    return iframe;
  };

  // main code
  videos.forEach((el) => {
    let videoHref = el.getAttribute('data-video');

    let deletedLength = 'https://youtu.be/'.length;

    let videoId = videoHref.substring(deletedLength, videoHref.length);

    let img = el.querySelector('img');
    let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
    img.setAttribute('src', youtubeImgSrc);

    el.addEventListener('click', (e) => {
      e.preventDefault();

      let iframe = createIframe(videoId);
      el.querySelector('img').remove();
      el.appendChild(iframe);
      el.querySelector('button').remove();
    });
  });
  
});
