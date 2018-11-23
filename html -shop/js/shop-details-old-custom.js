
/* ---------------------------- header navigation ----------------------------- */



/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
 /* -------------------------- document end ------------------ */       

  if ($('body').width() > 767){	    
    
var sidebar = new StickySidebar('#c-product-zoom-box', {
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 165,
        bottomSpacing: 0,
        resizeSensor: true,
        stickyClass: 'is-affixed',
        minWidth: 0
    }); 
    
    
        
    
  
    // mouce up down

var lastScrollTop = 0;
    $(window).on('scroll', function() {
        
      var stickyOffset = $('.v-header').next().offset().top;
//         var stickyOffset = $('.topbanner').offset().top;
        
        st = $(this).scrollTop();console.log(st +" "+ stickyOffset);
        if(st < lastScrollTop ) {
            console.log('up 1'); $(".v-header").removeClass('up-header');
        }
        else if( st >=stickyOffset){
            console.log('down 1');$(".v-header").addClass('up-header');
        }
        lastScrollTop = st;
    });
        
}  
    




  
    
    
  
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

jQuery(document).ready(function ($) {
    
   if ($('body').width() > 767){	 
  var parentElement = $('.sidebar-details');
  var stickyElement = $('.sticky-sidebar-details');
  var container = $('.zoom-pics');
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
            'top': '100',
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
            'top': '100',
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
       
       
       
   }
    
});
