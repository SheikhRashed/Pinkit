// $(document).ready(function(){
//   $(".nav-tabs .nav-item a").click(function(){
//       $(this).tab('show');
//   });
// });
$(function(){
    $(".nav-tabs .nav-item a").click(function(){
      $(this).tab('show');
  });
  new WOW().init();


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
    
    });
    
// Service slider
$('.tab_content').slick({
  draggable: false,
  autoplay: false,
});
$('.tab_slide_btn').slick({
  draggable: true,
  autoplay: false,
  arrows: false,
  
});


// client Slider
$('.client_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900,
  arrows: false,
  dots: false,
  infinite: true,
  responsive: [

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
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
  });
});


// toggler
const toggler = document.querySelector('.toggler_icon');
const nav_links = document.querySelector('.nav_links');
const nav_link = document.querySelectorAll('.nav_links li');
const div = document.querySelector('.none');
toggler.addEventListener('click',(x)=>{
  nav_links.classList.toggle("fade");
  nav_links.classList.toggle("pb");
  toggler.classList.toggle("change");
  console.log(`${open} is working.......`);
  
});