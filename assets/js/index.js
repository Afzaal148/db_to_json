// Sticky navbar
// =========================
            $(document).ready(function () {
                // Custom function which toggles between sticky class (is-sticky)
                var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
                    var stickyHeight = sticky.outerHeight();
                    var stickyTop = stickyWrapper.offset().top;
                    if (scrollElement.scrollTop() >= stickyTop) {
                        stickyWrapper.height(stickyHeight);
                        sticky.addClass("is-sticky");
                    }
                    else {
                        sticky.removeClass("is-sticky");
                        stickyWrapper.height('auto');
                    }
                };

                // Find all data-toggle="sticky-onscroll" elements
                $('[data-toggle="sticky-onscroll"]').each(function () {
                    var sticky = $(this);
                    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
                    sticky.before(stickyWrapper);
                    sticky.addClass('sticky');

                    // Scroll & resize events
                    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                        stickyToggle(sticky, stickyWrapper, $(this));
                    });

                    // On page load
                    stickyToggle(sticky, stickyWrapper, $(window));
                });

                

    
    

    

/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
	function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('fa-plus fa-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

// Read More
// =========================         
    
    // Configure/customize these variables.
//     var showChar = 500;  // How many characters are shown by default
//     var ellipsestext = "...";
//     var moretext = "Show more >";
//     var lesstext = "Show less";
    

//     $('.more').each(function() {
//         var content = $(this).html();
 
//         if(content.length > showChar) {
 
//             var c = content.substr(0, showChar);
//             var h = content.substr(showChar, content.length - showChar);
 
//             var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
//             $(this).html(html);
//         }
 
//     });
 
//     $(".morelink").click(function(){
//         if($(this).hasClass("less")) {
//             $(this).removeClass("less");
//             $(this).html(moretext);
//         } else {
//             $(this).addClass("less");
//             $(this).html(lesstext);
//         }
//         $(this).parent().prev().toggle();
//         $(this).prev().toggle();
//         return false;
//     });

    $('.branding').siblings('#header').css("background", "#f4f633");
                    
        $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            $("#header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("#header").removeClass("active");
        }
    });
    $('.seo').siblings('#header').css("background", "#e7e7e7");
                    
        $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            $("#header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("#header").removeClass("active");
        }
    });
    
    $('.carousel').carousel()
    
});


 $(document).ready(function () {
    $('.read-more-trigger').click(function(){
      
      if($(this).siblings('.read-more-wrap').children('.read-more-target').hasClass("active")) {
            $(this).siblings('.read-more-wrap').children('.read-more-target').removeClass("active");
        } else {
            $(this).siblings('.read-more-wrap').children('.read-more-target').addClass("active");
        }
  });
 });
 
 
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
  
  
  
      // Home Scroll
// =========================             
    $('.homeslider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
    });
    
    
    // Logo Auto Scroll
// =========================             
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
    
});

           
           
       