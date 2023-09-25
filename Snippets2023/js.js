//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ common snippets

const fAsync = new Promise(
    function PromiseTemplate (resolve, reject) {
        try {
            resolve({});
        } catch(err) {
            reject(err);
        };
    }
);
let result = function DemoPromise (resolve, reject) {
    try {
        resolve({})
    } catch(err) {
        reject(err)
    };
};
return new Promise(result)


//~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// before 23.9.5

"use strict"

JSON.stringify(data, null, 0)
JSON.stringify(data, null, 2)


// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Section

// ---------------------------------------------- Page Visibility

console.log(document.visibilityState + ': ' + Date())
document.onvisibilitychange =
    () => console.log(document.visibilityState + ': ' + Date())

// OUTPUT when switch browser tab
// hidden: Mon Jan 03 2022 13:22:20
// visible: Mon Jan 03 2022 13:22:21


// ---------------------------------------------- // programming
// ---------------------------------------------- // programming
// ---------------------------------------------- // programming


/* принимает в качестве аргументов список выполняемых функций,
   превращает их в массив, сохраняет его в замыкании и возвращает функцию,
   которая ожидает начальное значение */
const compose = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

 const curry = fn => (...args) => {
   if (fn.length > args.length) {
     const f = fn.bind(null, ...args);
     return curry(f);
   } else {
     return fn(...args)
   }
 }

 /* принимает функцию и первый аргумент, возвращает лямбду,
    которая ожидает остальные и выполняет функцию */
 const party = (fn, ...args) => (...rest) => fn(...args.concat(rest));

   const sum = (a,b,c,d) => a+b+c+d;
   const fn = curry(sum);
   const r1 = fn(1,2,3,4);//очевидно, рабочий пример
   const r2 = fn(1, 2, 3)(4);//этот и все последующие также будут работать
   const r3 = fn(1, 2)(3)(4);
   const r4 = fn(1)(2)(3)(4);


// ---------------------------------------------- PROMISE syntax


let result = function DemoPromise (resolve, reject) {
    reject(data)
    try {
        /*timeout...*/resolve({token:'xToken'})
    }
    catch(err) { reject(err) }
}
return new Promise(result)
	
	// ...
	
	Backend_Axios.post({url,data})
		.then(responce=>{})
		.catch(responce=>{})


// ---------------------------------------------- MODULE syntax //ES6 Version


export function isNull(val){
  return val === null;
}
export function isUndefined(val) {
  return val === undefined;
}
export function isNullOrUndefined(val) {
  return isNull(val) || isUndefined(val);
}

import * as helpers from './helpers.js'; // helpers is an object
// or
import { isNull, isUndefined, isNullOrUndefined as isValid } from './helpers.js';



// ---------------------------------------------- CLASS syntax //ES6 Version

class Person {
    constructor(firstName, lastName, age, address){
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.address = address;
    }

    static self() {
       return this;
    }

    toString(){
       return "[object Person]";
    }

    getFullName(){
       return `${this.firstName} ${this.lastName}`;
    }
}
class Employee extends Person { //Inherits from "Person" class
  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {
    super(firstName, lastName, age, address);
    this.jobTitle = jobTitle;
    this.yearStarted = yearStarted;
  }

  describe() {
    return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
  }

  toString() { // Overriding the "toString" method of "Person"
    return "[object Employee]";
  }
}
  const s = new Employee(...dna);


/* ---------------------------------------------- */ // events click touch key press

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


const activateEscape = e => {
    e = e || window.event
    if (e.key==='Escape' || e.key==='Esc') Api.close()
}
document.addEventListener('keyup', activateEscape)
document.removeEventListener('keyup', activateEscape)


/* ---------------------------------------------- */ // onload

document.addEventListener('DOMContentLoaded', function(event) {})

window.onload = function(e){

}

// alternative to load event
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    initApplication();
  }
}
// alternative to DOMContentLoaded event
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
}

$(document).ready(function(){
});

$(function(){
});


/* waits until everything is loaded, not just DOM is ready */
$(window).load(function() {
    $('.bg-image').addClass('hd');
});

/* ---------------------------------------------- */ // vanilla DOM
// https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/

const myElement = document.querySelector('#foo > div.bar')
const myChildElemet = myElement.querySelector('input[type="submit"]')
const parent = document.querySelector('p').closest('div')

// возвращает статический NodeList
const myElements = document.querySelectorAll('.bar')
const arr = [...document.querySelectorAll('.bar')]

// Возвращают живую HTMLCollection
const elements2 = document.getElementsByTagName('div')
const elements3 = document.getElementsByClassName('.bar')


myElement.matches('div.bar') === true

const newElement = document.createElement('div')
document.body.appendChild(newElement)
// Append element1 as the last child of element2
element1.appendChild(element2)
// Insert element2 as child of element 1, right before element3
element1.insertBefore(element2, element3)
// Insert custom HTML
document.body.insertAdjacentHTML('beforeend','<a href="/home" class="active">Home</a>')
document.body.insertAdjacentElement('beforebegin', myElement);
/*
  <!-- beforebegin -->
  <p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
  </p>
  <!-- afterend -->
*/

// будет перемещен, а не скопирован!
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
h1.insertAdjacentElement('afterend', h2)

// будет перемещен и заменён
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
h1.replaceWith(h2)


const link = document.createElement('a')
const text = document.createTextNode('continue reading...')
const hr = document.createElement('hr')

// ======================== ATTRIBUTES

link.href = 'foo.html'

// keep perforamce while reading all attributes
for ( let name of el.getAttributeNames() ) {
  let value = el.getAttribute(name)
  other__element.setAttribute(name, value)
  console.log(name, value)
}
/*
  ELEMENT.attributes should be avoided in performance critical scenarios
  (it forces the creation of Attr objects which otherwise can stay hidden)
*/

// ======================== INSERT CONTENT

link.appendChild(text)
myElement.appendChild(link)
myElement.appendChild(hr)

myElement.classList.add('foo')
myElement.classList.remove('bar')
myElement.classList.toggle('baz')
myElement.classList.contains('myclass')

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


// ==================================== DATA

// Using fetch

const checkForError = response => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};

fetch("https://jsonplaceholder.typicode.com/todos/100000")
  .then(checkForError)
  .then(data => console.log("data", data))
  .catch(error => {
    console.log("error", error);
  });


// Get Query String Parameters

  // Assuming "?post=1234&action=edit"
  var urlParams = new URLSearchParams(window.location.search);

  console.log(urlParams.has('post')); // true
  console.log(urlParams.get('action')); // "edit"
  console.log(urlParams.getAll('action')); // ["edit"]
  console.log(urlParams.toString()); // "?post=1234&action=edit"
  console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"



/* ---------------------------------------------- */// Mutation Observer


const target = document.querySelector('#container');
const observer = new MutationObserver(callback);
observer.observe(target, options);

const callback = (mutations, observer) => {
  mutations.forEach(mutation => {
    switch (mutation.type) {
      case 'attributes':
        // the name of the changed attribute is in
        // mutation.attributeName
        // and its old value is in mutation.oldValue
        // the current value can be retrieved with
        // target.getAttribute(mutation.attributeName)
        break;
      case 'childList':
        // any added nodes are in mutation.addedNodes
        // any removed nodes are in mutation.removedNodes
        break;
    }
  });
};

/* ---------------------------------------------- */// web workers

if (typeof(Worker) !== "undefined") {
    worker = new Worker("worker.js");
}
>>> worker.js
    i = 0;
    while (i < 200000) {
        postMessage("Web Worker Counter: " + i);
        i++;
    }


/* ---------------------------------------------- */// performance

// some scroll

var latestKnownScrollY = 0;

function onScroll() {
	latestKnownScrollY = window.scrollY;
}



// requestAnimationFrame

const start = window.performance.now()
const duration = 2000

window.requestAnimationFrame(function fadeIn (now)) {
  const progress = now - start
  myElement.style.opacity = progress / duration

  if (progress < duration) {
    window.requestAnimationFrame(fadeIn)
  }
}



/* Значение 1e10 равно 1 с 10 нулями, поэтому цикл длится 10 миллиардов процессорных тактов (в принципе, так имитируется перегруженный процессор). */

setTimeout(
  () => console.log('Hello after 0.5 seconds. MAYBE!'),
  500,
);
for (let i = 0; i < 1e10; i++) {
  // Синхронно блокируем операции
}



// ---------------------------------------------- // trick functions

// Get Unique Values of an Array

const uniqueValues = [...new Set(myArray)];

  var j = [...new Set([1, 2, 3, 3])]
  >>> [1, 2, 3]

// Merge Objects

  const person     = { name: 'David Walsh', gender: 'Male' };
  const tools      = { computer: 'Mac', editor: 'Atom' };
  const attributes = { handsomeness: 'Extreme', hair: 'Brown', eyes: 'Blue' };

  const summary = {...person, ...tools, ...attributes};


// create or not create

const myObject = { ...myProperty && { propName: myProperty } };

{
  value1,
  value2,
  ...condition1 && {
    value3,
    value4,
  },
  ...condition2 && {
    value5,
  },
}

// if myProperty==false, then myObject = {}


// Immutable objects workflow example

const pureAddProp = (key, value, object) => ({
  ...object,
  [key]: value
});
const User= {
  name: 'Alex'
};
const Admin= pureAddProp ('isAdmin', true, User);


// url string animated with symbols

var f = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
var f = ['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'];

    function loop() {
        location.hash = f[Math.floor((Date.now()/100)%f.length)];

        setTimeout(loop, 50);
    }

var f = ['🌑', '🌘', '🌗', '🌖', '🌕', '🌔', '🌓', '🌒'],
        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        m = 0;

    function loop2() {
        var s = '', x = 0;

        if (!m) {
            while (d[x] == 4) x ++;
            if (x >= d.length) m = 1;
            else d[x] ++;
        }
        else {
            while (d[x] == 0)x ++;
            if (x >= d.length) m = 0;
            else {
                d[x] ++;

                if (d[x] == 8) d[x] = 0;
            }
        }

        d.forEach(function (n) {
            s += f[n];
        });

        location.hash = s;

        setTimeout(loop2, 50);
    }



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


// this will kill all intervals and timeouts too in 3 seconds.
// Change 3000 to anything larger than 10
var killId = setTimeout(function() {
  for (var i = killId; i > 0; i--) clearInterval(i)
}, 3000);


// ==================================== LAZY LOADING

// browser native 2020
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
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

Превращает NodeList в array
[...document.querySelectorAll('div')]

// ---------------------------------------------- // VARIOUS


function whoCalledMe() {
  console.log('Caller is', this);
}



function volume(h) {
    return (w) => {
        return (l) => {
            return l * w * h
        }
    }
}
volume(1)(2)(3)


// Template literals (Template strings)
`string text ${expression} string text`
`string text line 1
 string text line 2`


// --------------------------------------------- // JSON

const formatted = JSON.stringify(myObj, null, 2);
/*
Метод stringify принимает три параметра. Первый — это JavaScript-объект.
Второй, необязательный, представляет собой функцию, которую можно использовать для обработки JSON-кода,
получающегося в ходе преобразования объекта. Последний параметр указывает на то,
сколько пробелов нужно использовать при формировании отступов в JSON-коде. Если опустить последний параметр,
то весь полученный JSON-код будет представлять собой одну длинную строку.
Если в объекте myObj есть циклические ссылки, преобразовать его в формат JSON не удастся.
*/


// --------------------------------------------- // UI workers

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: 'smooth'
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: 'smooth'
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({
  behavior: 'smooth'
});
