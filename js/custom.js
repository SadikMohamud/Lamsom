(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    //Navigation Section
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });


    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })


    // PARALLAX EFFECT
    $.stellar();  


    // SMOOTHSCROLL
    $(function() {
      $('.navbar-default a, #home a, footer a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);


const timelineItems = document.querySelectorAll('.timeline-item');
let revertTimeout;

// Initially hide all items except the first one
timelineItems.forEach((item, index) => {
  if (index !== 0) {
    item.classList.remove('visible');
  } else {
    item.classList.add('visible');
  }
});

// Add event listener to body for click interaction
document.body.addEventListener('click', function () {
  // Show all timeline items by adding the 'visible' class
  timelineItems.forEach((item, index) => {
    if (index !== 0) {
      item.classList.add('visible');
    }
  });

  // Clear any existing timeout
  clearTimeout(revertTimeout);

  // Set timeout to hide items after 1 minute
  revertTimeout = setTimeout(() => {
    timelineItems.forEach((item, index) => {
      if (index !== 0) {
        item.classList.remove('visible');
      }
    });
  }, 60000); // 1 minute
});

