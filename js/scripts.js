// JavaScript Document

<!----- JQUERY FOR SLIDING NAVIGATION --->   
//$(document).ready(function() {
//  $('a[href*=#]').each(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//    && location.hostname == this.hostname
//    && this.hash.replace(/#/,'') ) {
//      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
//      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//       if ($target) {
//         var targetOffset = $target.offset().top;
//
//<!----- JQUERY CLICK FUNCTION REMOVE AND ADD CLASS "ACTIVE" + SCROLL TO THE #DIV--->   
//         $(this).click(function() {
//            $("#nav li a").removeClass("active");
//            $(this).addClass('active');
//           $('html, body').animate({scrollTop: targetOffset}, 300);
//           return false;
//         });
//      }
//    }
//  });
//
//});

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');


img.onclick = function(){
    modal.style.display = "block";

};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};

// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    modalImg2.alt = this.alt;
    captionText2.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};

// Get the modal
var modal3 = document.getElementById('myModal3');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    modalImg3.alt = this.alt;
    captionText3.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}