/* EVENTS */

function createMainInterfaceDomEvents()
{
  // MAIN WORK AREA 
  var MWA = $('#mainWorkArea');
  
  MWA.click(function(e){ 
    if (interfaceActionOfLinking.isActive)
    {
      var newScreenData = createNewScreen(e);
      attachLinkToScreen( newScreenData.number );
    }
    else
    {
      visualEffects_hideAllPopups(); // alternative exit from popup window    
    }
  });
  
  MWA.dblclick(function(e){ 
    removeSelection();
    createNewScreen(e);
  });  
  
  MWA.mousemove(function(e){ 
    if (interfaceActionOfLinking.isActive)
    {
      visualEffects_showSpiritOfScreen(e);
    }
  });
  
  MWA.mouseleave(function(e){ 
    if (interfaceActionOfLinking.isActive)
    {
      visualEffects_hideSpiritOfScreen();
    }
  }); 
  
  /* PLAYER */
/*  
  $('#btnRunPlayer').click(function(){
    //runProjectPlayer();
    visualEffects_runProjectPlayer();
  });
*/  
  $('#btnDebugRun').click(function(){
    //runProjectPlayer();
    visualEffects_runProjectPlayer();
  });  
  
  $('#btnSlideShowRun').click(function(){
    runSlideShow();
  });  
}

function createDomEventsForScreen( objectOfThisScreen )
{
  var SCREEN = objectOfThisScreen.domObject;
  var numberOfThisScreen = objectOfThisScreen.number;

  SCREEN.click(function(){ 
    if (interfaceActionOfLinking.isActive)
    { 
      if (interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom == numberOfThisScreen) cancelActionOfLinking(false);
      else attachLinkToScreen( numberOfThisScreen );
    }
    else if ( SCREEN.hasClass(settings.cssClass.screenActive) )
    {
      visualEffects_hidePopup( numberOfThisScreen );
    }
    else
    {
      visualEffects_showPopup( numberOfThisScreen );
    }
  });
  
  SCREEN.mousemove(function(){ 
    if (interfaceActionOfLinking.isActive)
    {
      if (interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom != numberOfThisScreen) $(this).addClass(settings.cssClass.linkTo);
    }
  }); 
    
  SCREEN.mouseleave(function(e){ 
    if (interfaceActionOfLinking.isActive)
    {  
      $(this).removeClass(settings.cssClass.linkTo);
    }
  });    
}

function createDomEventsForScreensPopup( objectOfThisScreen )
{
  var SCREEN = objectOfThisScreen.domObject;
  var numberOfThisScreen = objectOfThisScreen.number;
  var POPUP =  findDomOfPopup( numberOfThisScreen );
  var popupChildrens = getDomForEachPopupChildrens( POPUP );
  
  var CLOSE_BUTTON      = popupChildrens.closeButton;
  var DELETE_BUTTON     = popupChildrens.deleteButton;
  var NEWLINK_BUTTON    = popupChildrens.newLinkButton;
  var CAPTION_INPUT     = popupChildrens.captionInput;
  var TEXT_INPUT     = popupChildrens.textInput;
  
  POPUP.click(function(){
    // prevent closing of popup
    return false;
  });
  
  CLOSE_BUTTON.click(function(){
    visualEffects_hidePopup( numberOfThisScreen );
    return false;
  });
  
  NEWLINK_BUTTON.click(function(){
    addNewLinkToScreen( numberOfThisScreen );
    return false;
  });

  DELETE_BUTTON.click(function(){
    deleteScreenFromProject( numberOfThisScreen );
    return false;
  }); 

  CAPTION_INPUT.blur(function(){
    savePopupInputValues( numberOfThisScreen );
  }); 
  
  TEXT_INPUT.blur(function(){
    savePopupInputValues( numberOfThisScreen );
  });   
}

function createDomEventsForLink( objectOfThisLink )
{
  var LINK = objectOfThisLink.domObject;
  var DELETE_BUTTON = LINK.children('.delete');
  var ATTACH_SCREEN_BUTTON = LINK.children('.makeLink');
  var LINK_INPUT = LINK.children('.answer').children('input');
  var numberOfThisScreen = objectOfThisLink.numberOfScreen;
  
  DELETE_BUTTON.click(function(){
    deleteLinkFromScreen( objectOfThisLink );
    return false;
  });
  
  ATTACH_SCREEN_BUTTON.click(function(){
    runActionOfLinking( objectOfThisLink );
    return false;
  });  
  
  LINK_INPUT.blur(function(){
    savePopupInputValues( numberOfThisScreen );
  });   
}



function addEventsForPlayerScreen( SCREEN )
{
  var LINK = SCREEN.children('ul').children('li').children('a');
  
  LINK.click(function(){
    var numberOfTargetScreen = $(this).attr('href');
    //$('#PlayerArea .playerScreen').hide();
    //$('#PlayerScreen-'+numberOfTargetScreen).show();
    //$(this).parent().children('a').css('background','none');
    $(this).parent().css('background','rgba(255,255,255,.5)');


    var NEW_SCREEN = $('#PlayerScreen-'+numberOfTargetScreen).clone();
    NEW_SCREEN.prependTo('#PlayerArea').slideDown();
    addEventsForPlayerScreen( NEW_SCREEN );
    
    return false;
  });    
}