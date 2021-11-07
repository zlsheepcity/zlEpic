
var TheOrderNav = {

  screens: {
    'overview':       { name:'overview' },
    'orderform':      { name:'orderform' },
    'payments':       { name:'payments' },
    'vas':            { name:'vas' },
    'process':        { name:'process' },
    'result':         { name:'result' },
    'client':         { name:'client' },
    'events':         { name:'events' },
    'design':         { name:'design' }
  }
  
  , currentScreen: 'overview'
  , currentOrderformContent: 'summary'

};

var VAStool = {
    accepted: false
  , rejected: false
  , payment: false
  
  , DOM: 
    {
        all: $('.vastool')
      , buttonAccepted: $('#vastoolAceptButton')
      , markerAccepted: $('#vastoolAceptMarker')
      , buttonRejected: $('#vastoolRejectButton')
      , markerRejected: $('#vastoolRejectMarker')      
      , vastoolNewPayment: $('#vastoolNewPayment')      
    }
    
  , current:'1pagesummary'
}

function VAStoolRedraw() {
  VAStool.DOM.all.hide();
  if (VAStool.accepted===false) VAStool.DOM.buttonAccepted.show(); else VAStool.DOM.markerAccepted.show();
  if (VAStool.rejected===false) VAStool.DOM.buttonRejected.show(); else VAStool.DOM.markerRejected.show();
  if (VAStool.payment===true) VAStool.DOM.vastoolNewPayment.show();  
}


function openMopup(pop) {
  $('#ShadowTime').show();
  $('#'+pop).show();
}
function closeMopup() {
  $('#ShadowTime').hide();
  $('.middlePopup').hide();
}


/* ============================================================ */
$(function () {

  // VAS TOOL
  navUniversalInnerNavigation('VAS', VAStool.current);
  
  $('.jsVASLink').on('click',function(e){
    var TARGET = $(e.currentTarget);
    var screen = TARGET.attr('data-vas');
    VAStool.current = screen;
    navUniversalInnerNavigation('VAS', screen);  
  });   

  
  VAStoolRedraw();
  $('.vastoolAkt-accept').on('click',function(){ 
    VAStool.accepted = true;
    VAStool.rejected = false;
    VAStool.payment = true;
    VAStoolRedraw();
    $('.jsVASLink-1pagesummary').addClass('VASsuccessOffer');
    $('.jsVASLink-1pagesummary').removeClass('VASfailedOffer');
  });
  $('.vastoolAkt-reject').on('click',function(){ 
    VAStool.accepted = false;
    VAStool.rejected = true;
    VAStool.payment = false;
    VAStoolRedraw();
    $('.jsVASLink-1pagesummary').removeClass('VASsuccessOffer');
    $('.jsVASLink-1pagesummary').addClass('VASfailedOffer');
  });  
  $('.vastoolAkt-remove').on('click',function(){ 
    VAStool.accepted = false;
    VAStool.payment = false;
    VAStoolRedraw();
    $('.jsVASLink-1pagesummary').removeClass('VASsuccessOffer');
    $('.jsVASLink-1pagesummary').removeClass('VASfailedOffer');    
  });    

  
  // Pullers
  $('.NavPuller-link').on('click',function(e){
    var LINK = $(e.currentTarget);
    var MAMA = LINK.parent();
    MAMA.toggleClass('open');
  });



  // writer management
  $('.jsProcessWriterSearchconfirmButton').on('click',function(){
    $('.jsProcessWriterSearchconfirm').toggle();
    $('.jsProcessWriterSearching').toggle();
  });
  
  // popup
  $('.middlePopupOpener').on('click',function(e) {
    var TARGET = $(e.currentTarget);
    var pop = TARGET.attr('data-mopup');
    openMopup(pop);
  });
  $('.middlePopupCloser').on('click', closeMopup);  
  

  
  //navOrdnungScreenSet(TheOrderNav.currentScreen);
  // JEBE
  //$('.navLink').on('click', navOrdnungScreenKliker);
  
  /*
  $('.jsOrderformLink').on('click',function(e){
    var TARGET = $(e.currentTarget);
    var screen = TARGET.attr('data-orderform');
    navOrderformContent(screen);  
    //return false;    
  });
  navOrderformContent(TheOrderNav.currentOrderformContent);
  

  $('.jsPaimentsLink').on('click',function(e){
    var TARGET = $(e.currentTarget);
    var screen = TARGET.attr('data-payment');
    navUniversalInnerNavigation('Paiments', screen);  
    //return false;    
  });
  */  

});


function navUniversalInnerNavigation(base, item) {
  $('.js'+base+'Content').hide();
  $('.js'+base+'Content-'+item).show();
  $('.js'+base+'Link').removeClass('active');  
  $('.js'+base+'Link-'+item).addClass('active');  
}

function navOrderformContent(item) {
  $('.jsOrderformContent').hide();
  $('.jsOrderformContent-'+item).show();
  $('.jsOrderformLink').removeClass('active');  
  $('.jsOrderformLink-'+item).addClass('active');  
}

function navOrdnungScreenKliker(e) {
  var TARGET = $(e.currentTarget);
  var screen = TARGET.attr('data-goto');
  if ( TARGET.hasClass('jsOTIE-tirgger') ) emuJebe();
  navOrdnungScreenSet(screen);  
  //return false;  
}

function navOrdnungScreenSet(screen) {
  var oldScreen = TheOrderNav.currentScreen;
  var newScreen = screen;
  
  

  TheOrderNav.currentScreen = newScreen;  
  //if ( oldScreen == newScreen ) TheOrderNav.currentScreen = 'overview';
  if(TheOrderNav.currentScreen=='overview') {
      //emuJebe();   
  }
  
  
  // make view
  DOM.OrdnungNavMaman.attr('data-currentscreen', TheOrderNav.currentScreen);
}
