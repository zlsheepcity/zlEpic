"use strict"
// appName 123.0002

/* ---------------------------------------------- */ // onload

window.onload = function(e){
    
}

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

/* ---------------------------------------------- */ // vanilla DOM
// https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/

const myElement = document.querySelector('#foo > div.bar')
const myElements = document.querySelectorAll('.bar')
const elements2 = document.getElementsByTagName('div')
const myChildElemet = myElement.querySelector('input[type="submit"]')
myElement.matches('div.bar') === true

const newElement = document.createElement('div')
document.body.appendChild(newElement)
// Append element1 as the last child of element2
element1.appendChild(element2)
// Insert element2 as child of element 1, right before element3
element1.insertBefore(element2, element3)

const link = document.createElement('a')
const text = document.createTextNode('continue reading...')
const hr = document.createElement('hr')

link.href = 'foo.html'
link.appendChild(text)
myElement.appendChild(link)
myElement.appendChild(hr)

myElement.classList.add('foo')
myElement.classList.remove('bar')
myElement.classList.toggle('baz')

// Using Array.from()
Array.from(myElements).forEach(doSomethingWithEachElement)
// Or prior to ES6
Array.prototype.forEach.call(myElements, doSomethingWithEachElement)

// Create a clone
const myElementClone = myElement.cloneNode()
myParentElement.appendChild(myElementClone)

// Remove element
myParentElement.removeChild(myElement)
// or
myElement.parentNode.removeChild(myElement)


function attachCssClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i=0; i<elements.length; i++) {
        elements[i].classList.add(myClass);
    }
}
function removeCssClass(selector, myClass) {
    elements = document.querySelectorAll(selector);
    for (var i=0; i<elements.length; i++) {
        elements[i].classList.remove(myClass);
    }
}


event.preventDefault()
event.stopPropagation()
addEventListener
removeEventListener
myElement.addEventListener('change', function listener (event) {
  console.log(event.type + ' got triggered on ' + this)
  this.removeEventListener('change', listener)
})




// this will kill all intervals and timeouts too in 3 seconds. 
// Change 3000 to anything larger than 10
var killId = setTimeout(function() {
  for (var i = killId; i > 0; i--) clearInterval(i)
}, 3000);



/* ---------------------------------------------- */ // performance

var latestKnownScrollY = 0;

function onScroll() {
	latestKnownScrollY = window.scrollY;
}


const start = window.performance.now()
const duration = 2000

window.requestAnimationFrame(function fadeIn (now)) {
  const progress = now - start
  myElement.style.opacity = progress / duration

  if (progress < duration) {
    window.requestAnimationFrame(fadeIn)
  }
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

// easy append css

Element.prototype.styles = function(attrs) {
  Object.keys(attrs).forEach(attr => {
    this.style[attr] = attrs[attr];
  });
}
node.styles({
  'color': 'red',
  'backgroundColor': 'black',
  'padding': '1rem'
});



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



