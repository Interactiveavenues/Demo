
/* ---------------------------- header navigation ----------------------------- */



/* -------------------------- document Start ------------------ */

    
$(document).ready(function () {
    
 /* -------------------------- document end ------------------ */    


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


// This function will be executed when the user scrolls the page.
 if ( $(window).width() > 991 ) {  
$(window).scroll(function(e) {
	// Get the position of the location where the scroller starts.
	var scroller_anchor = $(".scroller_anchor").offset().top;

	// Check if the user has scrolled and the current position is after the scroller's start location and if its not already fixed at the top
	if ($(this).scrollTop() >= scroller_anchor && $('.scroller').css('position') != 'fixed')
	{    // Change the CSS of the scroller to hilight it and fix it at the top of the screen.
		$('.scroller').css({
			'position': 'fixed',
			'top': '100px',
           
		});
        
        $('.c-accordian').css({
			'width': '13.8%',
		});
        
		// Changing the height of the scroller anchor to that of scroller so that there is no change in the overall height of the page.
		$('.scroller_anchor').css('height', '50px');
	}
	else if ($(this).scrollTop() < scroller_anchor && $('.scroller').css('position') != 'relative')
	{    // If the user has scrolled back to the location above the scroller anchor place it back into the content.

		// Change the height of the scroller anchor to 0 and now we will be adding the scroller back to the content.
		$('.scroller_anchor').css('height', '0px');

		// Change the CSS and put it back to its original position.
		$('.scroller').css({
			'position': 'relative',
            
		});
        $('.c-accordian').css({
			'width': 'auto',
		});
	}
});
 }