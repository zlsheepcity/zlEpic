
var TheKirkwood = {
  screen: 1
}

$(document).ready(function(){

  $('.carolNext').on('click',carolNextClick);
  $('.carolBack').on('click',carolBackClick);
  $('.kirkwoodPopupCloser').on('click',function(e){
    var TARGET = $(e.currentTarget);
    var POPUP = TARGET.parent();
    POPUP.hide();
  });
  
  
  $('.kirkwoodPopup').hide();
  CarolKirkwood();
  
});

function carolNextClick(e) {
  TheKirkwood.screen++;
  CarolKirkwood();
}
function carolBackClick(e) {
  TheKirkwood.screen--;
  CarolKirkwood();
}

function CarolKirkwood() {
  $('.kirkwood').hide();
  $('#CarolKirkwood'+TheKirkwood.screen).show();

  
  if (TheKirkwood.screen==1) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 1;
    emuJebe();    
  }  
  
  if (TheKirkwood.screen==2) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 1;
    emuJebe();    
  }
  
  if (TheKirkwood.screen==3) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 1;
    emuJebe();    
    $('.kirkwoodPopup-3').show();
  }
  if (TheKirkwood.screen!=3) { $('.kirkwoodPopup-only-3').hide(); }
  if (TheKirkwood.screen==4) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 1;
    emuJebe();    
  }
  if (TheKirkwood.screen==5) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 2;
    emuJebe();    
  }  
  if (TheKirkwood.screen==6) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 2;
    emuJebe();    
  }    
  if (TheKirkwood.screen==7) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 3;
    emuJebe();    
  }    
  if (TheKirkwood.screen==8) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 3;
    emuJebe();    
  }      
  if (TheKirkwood.screen==9) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 4;
    emuJebe();    
  }      
  if (TheKirkwood.screen==10) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 4;
    emuJebe();    
  }        
  if (TheKirkwood.screen==11) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 5;
    emuJebe();    
  }     
  if (TheKirkwood.screen==12) {
    TheOrderNav.currentScreen = 'overview';
    navOrdnungScreenSet(TheOrderNav.currentScreen);
    TheEmu.jebe = 5;
    emuJebe();    
  }     
}
