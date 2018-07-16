"use strict"
// appName 123.0002

$(document).ready(function(){
});

$(function(){
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

/* ---------------------------------------------- */ // performance

function makeChange( time ) {
  // Animation logic here

  // Call requestAnimationFrame recursively inside the callback function
  requestAnimationFrame( makeChange ):
}

// Call requestAnimationFrame again outside the callback function
requestAnimationFrame( makeChange );


var latestKnownScrollY = 0;

function onScroll() {
	latestKnownScrollY = window.scrollY;
}

/* ---------------------------------------------- */ // console functions

console.table(data, ['collumn','collumn'])
console.table(data)


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
/**/


// ---------------------------------------------- // trick functions


// named while

charloop:while(c=getc()){
    for (i=0; i<quitchars.length; i++){
        if (c==quitchars[i]) break charloop
    }
}





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

// ---------------------------------------------- // ARRAYS

// true or false
const array2 = array.filter(char => char.length < 2);
// update elements
const array2 = array.map(elem =>elem ** 2);

const array = ['Olga', 't', 'e', 'x', 't'];
const [name, ...restElement] = array;
const array2 = restElement;
//array без изменения, name = 'Olga', array2 = ['t', 'e', 'x', 't']


const array = [1, 2, 3];
const array2 = array.concat() 
//array2 [1, 2, 3]

Array.from(arrayLike[, mapFn[, thisArg]])



