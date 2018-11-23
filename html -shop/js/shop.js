
/* ---------------------------- header navigation ----------------------------- */



/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
 /* -------------------------- document end ------------------ */    

    
 $(".accor-scroll").mCustomScrollbar({
//        setHeight:250,
        theme:"dark-3"
    });   
    
    

if ( $(window).width() < 768 ) { 

   $(".c-description-box").each(function(){
            $(this).hide();
            if($(this).attr('id') == "desc") {
            $(this).show();
        }
    });
    
    
    $('.c-mob-product-details li').on( "click", function(e) {
    $(".c-mob-product-details li").removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
    var id = $(this).attr('data-target'); 
        $(".c-description-box").each(function(){
            $(this).hide();
            if($(this).attr('id') == id) {
            $(this).show();
        }
    });
}); 

}



$('.zoom-big-slider').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
lazyLoad: 'ondemand',
asNavFor: '.zoom-thumb-slider'
});
$('.zoom-thumb-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
asNavFor: '.zoom-big-slider',
dots: false,
centerMode: true,
focusOnSelect: true,
lazyLoad: 'ondemand',
});  


// tabbing //   

$('#mob-tab-select').on('change', function (e) {
$('.nav-tabs li a').eq($(this).val()).tab('show');
});    
 
    
  /* -------------------------- accordian filetr ------------------ */     
    
    
$('.accor-title').click(function (){
        if($(this).hasClass("open")){
            $(this).removeClass("open");
            $(this).next(".accor-content").removeClass("showng");
            $(this).next(".accor-content").slideUp();
        }
        else{
            $(this).next(".accor-content").slideDown();
            $(this).addClass("open");
            $(this).parent().siblings().find(".accor-content").slideUp();
            $(this).next(".accor-content").addClass("showng");
            $(this).parent().siblings().find(".accor-title").removeClass("open");
        }   
    });    
    
    
 
    
  jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");
    jQuery(".lightbox-close").click(function() {
      // changes the iframe src to prevent playback or stop the video playback in our case
      $('.youtube-iframe').each(function(index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
      });
      
//click function
    });   
       
    


$("#sortby").click(function(){
    $(".c-sort-list").addClass("c-sort-list-mob-show");
    $(".c-accordian").removeClass("c-accordian-mob-show");
    
    $(".cart-panel").removeClass("open");
    $(".search").removeClass("open");
    $(".login").removeClass("open");
    $("#nav-icon4").removeClass('open');
    $("nav").removeClass('open');
    $(".nav-bg").removeClass('open');
    $(".drop-list-flag").removeClass('open');
    
        $(".sort-close").click(function(){
           $(".c-sort-list").removeClass("c-sort-list-mob-show");
       });  
}); 
    
    
$("#filters").click(function(){
    $(".c-accordian").addClass("c-accordian-mob-show");
    $(".c-sort-list").removeClass("c-sort-list-mob-show");
    
    $(".cart-panel").removeClass("open");
    $(".search").removeClass("open");
    $(".login").removeClass("open");
    $("#nav-icon4").removeClass('open');
    $("nav").removeClass('open');
    $(".nav-bg").removeClass('open');
    $(".drop-list-flag").removeClass('open');
    
        $(".filter-close").click(function(){
           $(".c-accordian").removeClass("c-accordian-mob-show");
       });  
});    
    
 $('.write-product-review').click(function() {  
$(".c-all-reviews-list").slideDown();
return false;
});    
  
}); 


/* -------------------------- function starts increse value and decrese value ------------------ */ 

function increaseValue() {
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('number').value = value;
}

function decreaseValue() {
var value = parseInt(document.getElementById('number').value, 10);
value = isNaN(value) ? 0 : value;
value < 1 ? value = 1 : '';
value--;
document.getElementById('number').value = value;
}



/* -------------------------- sticky filter starts here ------------------ */ 

//jQuery(document).ready(function ($) {
//
//  var parentElement = $('.sidebar');
//  var stickyElement = $('.sticky-sidebar');
//  var container = $('.filter');
//  var header = $('.header');
//  var containerHeight = container.height() + 'px';
//  var mediaBreakPoint = '(max-width: 767px)';
//  var height = stickyElement.height();
//  var heightString = height + 'px';
//  var widthString = stickyElement.width() + 'px';
//  var headerHeight = header.height() + 'px';
//
//  function scrollStickySidebar($) {
//    $(window).scroll(function () {
//      var scroll = $(this).scrollTop();
//
//      setParentOrContainerHeight();
//      setStickyElementScrollDefaultStyles();
//
//      var length = parentElement.height() - stickyElement.height() + parentElement.offset().top;
//
//      if (!window.matchMedia(mediaBreakPoint).matches) {
//        if (scroll < parentElement.offset().top) {
//          stickyElement.css({
//            'position': 'absolute',
//            'top': '100',
//            'bottom': 'auto'
//          });
//        }
//        else if (scroll > length) {
//          stickyElement.css({
//            'position': 'absolute',
//            'top': 'auto',
//            'bottom': '0'
//          });
//        }
//        else {
//          stickyElement.css({
//            'position': 'fixed',
//            'top': '100',
//            'bottom': 'auto'
//          });
//        }
//      }
//      else {
//        setStickyElementMobileDefaultStyles();
//      }
//    }
//  )};
//
//
//  function setStickyElementScrollDefaultStyles() {
//    stickyElement.css({
//      'height': heightString,
//      'width': widthString,
//      'max-width': widthString
//    });
//  }
//
//  function setStickyElementMobileDefaultStyles() {
//    setParentToAutoHeight();
//
//    stickyElement.css({
//      'position': 'relative',
//      'top': 'auto',
//      'bottom': 'auto',
//      'height': 'auto',
//      'width': '100%',
//      'max-width': '16.688em'
//    });
//  }
//
//  function setParentOrContainerHeight() {
//    if (height < container.height()) {
//      parentElement.css({
//        'height': containerHeight
//      });
//    }
//    else {
//      parentElement.css({
//        'height': heightString
//      });
//      container.css({
//        'height': heightString
//      });
//    }
//  }
//
//  function setParentToAutoHeight() {
//    parentElement.css({
//      'height': 'auto'
//    });
//  }
//  
//  scrollStickySidebar($);
//  
//  $(window).resize(scrollStickySidebar);
//    
//});

jQuery(document).ready(function ($) {

  var parentElement = $('.sidebar');
  var stickyElement = $('.sticky-sidebar');
  var container = $('.body');
  var header = $('.header');
  var containerHeight = container.height() + 'px';
  var mediaBreakPoint = '(max-width: 767px)';
  var height = stickyElement.height();
  var heightString = height + 'px';
  var widthString = stickyElement.width() + 'px';
  var headerHeight = header.height() + 'px';

  function scrollStickySidebar($) {
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();

      setParentOrContainerHeight();
      setStickyElementScrollDefaultStyles();

      var length = parentElement.height() - stickyElement.height() + parentElement.offset().top;

      if (!window.matchMedia(mediaBreakPoint).matches) {
        if (scroll < parentElement.offset().top) {
          stickyElement.css({
            'position': 'absolute',
            'top': '0',
            'bottom': 'auto'
          });
        }
        else if (scroll > length) {
          stickyElement.css({
            'position': 'absolute',
            'top': 'auto',
            'bottom': '0'
          });
        }
        else {
          stickyElement.css({
            'position': 'fixed',
            'top': '0',
            'bottom': 'auto'
          });
        }
      }
      else {
        setStickyElementMobileDefaultStyles();
      }
    }
  )};


  function setStickyElementScrollDefaultStyles() {
    stickyElement.css({
      'height': heightString,
      'width': widthString,
      'max-width': widthString
    });
  }

  function setStickyElementMobileDefaultStyles() {
    setParentToAutoHeight();

    stickyElement.css({
      'position': 'relative',
      'top': 'auto',
      'bottom': 'auto',
      'height': 'auto',
      'width': '100%',
      'max-width': '16.688em'
    });
  }

  function setParentOrContainerHeight() {
    if (height < container.height()) {
      parentElement.css({
        'height': containerHeight
      });
    }
    else {
      parentElement.css({
        'height': heightString
      });
      container.css({
        'height': heightString
      });
    }
  }

  function setParentToAutoHeight() {
    parentElement.css({
      'height': 'auto'
    });
  }
  
  scrollStickySidebar($);
  
  $(window).resize(scrollStickySidebar);
    
});