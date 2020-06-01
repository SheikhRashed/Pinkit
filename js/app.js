// Slick Slider

$(document)
.mousemove(function(e) {
$('.cursor')
.eq(0)
.css({
    left: e.clientX,
    top: e.clientY
});
setTimeout(function() {
$('.cursor')
    .eq(1)
    .css({
    left: e.clientX,
    top: e.clientY
    });
}, 100);
});




$(document).ready(function() {
    $('#full_page').fullpage({
      //options here
      autoScrolling:true,
      navigation:true,
      showActiveToolip:true,
      controlArrows:false,
      scrollOverflow:false,
      scrollingSpeed: 800,
      verticalCentered: true,
      continuousVertical: true,
      afterLoad: function(anchorLink, index){
            console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
        },
        onLeave: function(index, nextIndex, direction){
            console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);

        },
      // css3: true,
      fitToSection: true,
      //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
      // css3:false,
      licenseKey: '786EA650-72B5435C-8FA02511-4D1E8B65'
    
    });
    //methods
    //$.fn.fullpage.setAllowScrolling(false);
    });
    
// Service slider
$('.tab_content').slick();

// client Slider
$('.client_slider').slick({
    dots: false,
    arrows:false,
    infinite: true,
    autoplay:true,
    draggable:true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll:2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// Case Slider
$('.case_slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    autoplay:false,
    draggable:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll:1,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    //   // You can unslick at a given breakpoint now by adding:
    //   // settings: "unslick"
    //   // instead of a settings object
    // ]
  });