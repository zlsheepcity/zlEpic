var TheOrderNav = {

  screens: {
    'overview':       { name:'overview' },
    'orderform':      { name:'orderform' },
    'payments':       { name:'payments' },
    'vas':            { name:'vas' },
    'process':        { name:'process' },
    'result':         { name:'result' }
  },
  
  currentScreen: 'overview'

};



function OrderNavGoto(name) {
  var oldScreen = TheOrderNav.currentScreen;
  var newScreen = name;
  
  TheOrderNav.currentScreen = newScreen;
}


/* ============================================================ */
$(function () {

  jqOrderNavInit();

  //$('.goto').on('click', jqOrderNavGoto);
  $('.navLink').on('click', navOrdnungScreenKliker);

});


function navOrdnungScreenKliker(e) {
  var TARGET = $(e.currentTarget);
  var screen = TARGET.attr('data-goto');
  navOrdnungScreenSet(screen);
  return false;
}

function navOrdnungScreenSet(screen) {
  var oldScreen = TheOrderNav.currentScreen;
  var newScreen = screen;

  TheOrderNav.currentScreen = newScreen;  
  
  // make view
  DOM.OrdnungNavMaman.attr('data-currentscreen', newScreen);
  console.log('kliker', newScreen);
}


function jqOrderNavInit() {
  viewShowOrderScreen();
}

function jqOrderNavGoto(e) {
  var TARGET = $(e.currentTarget);
  var name = TARGET.attr('data-goto');
  OrderNavGoto(name);
  viewShowOrderScreen();
  return false;
}

function viewShowOrderScreen() {
  DOM.OrderNav.children('.goto').removeClass('current');
  DOM.OrderNav.children('.goto[data-goto="'+TheOrderNav.currentScreen+'"]').addClass('current');  
  
  DOM.OrderScreens.children('.jsOrderScreen').hide();
  DOM.OrderScreens.children('.jsOrderScreen[data-goto="'+TheOrderNav.currentScreen+'"]').show();
}


