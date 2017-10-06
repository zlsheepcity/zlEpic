"use strict"
// appName 123.0002

$(document).ready(function(){
});

$(function(){

    // eventClick
    $('.element').on( 'click', klikerAction );
    function klikerAction(e){
        var kliker = $(e.currentTarget);
    }

    // eventKeypress
    $('input.pressEnter').keydown(function(e) {
        if(e.keyCode === 13) {
            //
        }
    });

});

/* waits until everything is loaded, not just DOM is ready */
$(window).load(function() {
    $('.bg-image').addClass('hd');
});

$(function(){
});

/* ---------------------------------------------- // console functions

console.time('zlTimer');
console.timeEnd('zlTimer');

console.group();
console.log( 'ooo', ooo );
console.groupEnd();

console.log('%c zl', 'background: #222; color: #bada55');

// console commands

$0
getEventListeners($0)
document.body.contentEditable=true
*/


// ---------------------------------------------- // trick functions

/* auto slideshow
http://mediatemple.net/blog/tips/carousels-dont-have-to-be-complicated/ 
*/
$('.aFadeinSlideshow img:gt(0)').hide();
setInterval(
    function(){
        $('.aFadeinSlideshow :first-child')
            .fadeOut()
            .next('img')
            .fadeIn()
            .end()
            .appendTo('.aFadeinSlideshow');
    }, 3000
);
/*
<div class="aFadeinSlideshow">
    <img src="image1.jpg">
    <img src="image2.jpg">
    <img src="image3.jpg">
</div>
*/

function zl__parseIntOrZero(value)
{
  if ( !value  ) return 0;
  var result = parseInt(value);
  if ( isNaN(result) ) return 0;
  else return parseInt(value);
}

function zl__clearAnyTextSelection()
{
  if (navigator.appName != 'Microsoft Internet Explorer') {
    if (window.getSelection) {
      if (window.getSelection().empty) { window.getSelection().empty(); } // Chrome
      else if (window.getSelection().removeAllRanges) { window.getSelection().removeAllRanges(); } // Firefox
    } else if (document.selection) { document.selection.empty(); } // IE?
  }
}
