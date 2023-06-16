
var swiper = new Swiper(".workSlider", {
  slidesPerView: 1,
    spaceBetween: 30,
    // centeredSlides: true,
    loop: true,
    autoplay: {
  delay: 2000, 
},
    breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
      spaceBetween: 30,
      // centeredSlides: true,
      loop: true,
      autoplay: {
    delay: 2000, 
  },
      breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        },
  
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });



var swiper = new Swiper(".roadMapSlider", {
    slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
    delay: 2000, 
  },
      breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    $('.faq-heading').click(function () {
  
  $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});

var rellax = new Rellax('.rellax');

$(document).ready(function() {
  // Attach click event handler to the copy button
  $('#copy-button').on('click', function() {
    // Select the text to be copied
    $('#text-to-copy').select();

    try {
      // Execute the copy command
      var successful = document.execCommand('copy');
      var message = successful ? 'Contract Copied!' : 'Unable to copy text.';

      // Display the copy status message
      // alert(message);
      $('.response').text(message)
    } catch (err) {
      // If an error occurs, display an error message
      console.error('Unable to copy text:', err);
      alert('Unable to copy text. Please try again.');
    }
  });
});


$(".s-more").hover(function() {
  var $content = $(this).parent('.show-box').find(".s-content");
  $content.slideDown();
  $(this).text("View less");
}, function() {
  var $content = $(this).parent('.show-box').find(".s-content");
  $content.slideUp(function() {
    $(this).prev('.s-more').text($content.is(":visible") ? "View less" : "View more");
  });
});


ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  },
  targets: ".scrollable-pane",
});

  ScrollOut({
	targets: ".features-list .media",
  });

  ScrollOut({
	targets: ".reveal-text",
  });
  ScrollOut({
	targets: ".fade-in-left",
  });
  ScrollOut({
	targets: ".fade-in-right",
  });
  ScrollOut({
	targets: ".fade-in",
  });
  ScrollOut({
	targets: ".target-this",
  });
  

$(window).scroll(function(){
	var sticky = $('.sticky-header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 100) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
  });


$(function() {
    $('a.page').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });
});

