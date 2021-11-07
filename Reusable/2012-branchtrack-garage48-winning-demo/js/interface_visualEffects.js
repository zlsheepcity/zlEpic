/* VISUAL EFFECTS */
/*
  functions to display, create or hide visible html elements
*/

function visualEffects_loadProjectFromJson(projectObject)
{
  var objectOfThisScreen;
  var numberOfThisScreen;
  var objectOfThisLink;
  var SCREEN;
  var POPUP;
  
  // SHOW CONSTRUCTOR TAB
  $('.tabOfThisTool').hide(); // hide all tabs...
  $('#tabOfThisTool-constructor').show(); // ... and show target tab
  $('.tabSwitcher a').removeClass('active'); // remove active status from all tab-switchers ...
  $('.tabSwitcher a[href="#constructor"]').addClass('active'); // ... and set current tab-switcher to active status  
  
  // REMOVE OLD
  var NEW_SPIRIT = $('#spiritScreen').clone();
  $('.'+settings.cssClass.screenIcon).remove();  
  $('#arrowsUnderWorkArea').html('');
  
  // reborn spirit
  NEW_SPIRIT.appendTo('#mainWorkArea');
  
  
  for ( var keyOfScreenObject in projectObject.screensByNumber)
  {
    //create screen
    objectOfThisScreen = projectObject.screensByNumber[keyOfScreenObject];
    numberOfThisScreen = objectOfThisScreen.number;
    
    objectOfThisScreen.domObject = visualEffects_createNewScreen(false, objectOfThisScreen);
        
    //POPUP = visualEffects_createPopupWithDetailsForNewScreen( objectOfThisScreen );
    /**********************************************************/ 
    SCREEN = objectOfThisScreen.domObject;
    POPUP =  $('<div></div>');

    SCREEN.append(POPUP);
    POPUP.addClass(settings.cssClass.screenPopup);
    POPUP.append('<div class="btnClose">close</div>');
    POPUP.append('<div class="caption">Caption: <input type="text" value="'+objectOfThisScreen.caption+'"/></div>');
    POPUP.append('<div class="text"><textarea>'+objectOfThisScreen.text+'</textarea></div>');
    POPUP.append('<div class="linkList"></div>');
    POPUP.append('<div class="btnNewLink">add new link</div>');
    POPUP.append('<div class="btnDelete">delete</div>');

    // calculate position of popup
    var positionY = SCREEN.offset().top + 77;
    var positionX = SCREEN.position().left - 158;
    POPUP.show();
    POPUP.offset({ top: positionY, left: positionX });
    POPUP.hide();    
    /**********************************************************/
    
    createDomEventsForScreensPopup( objectOfThisScreen );
    createDomEventsForScreen( objectOfThisScreen );
        
    listOfScreens.screensByNumber[numberOfThisScreen].domObject = objectOfThisScreen.domObject;
  }  
  
  // CREATE LINKS
  for ( var keyOfScreenObject in projectObject.screensByNumber)
  {  
    objectOfThisScreen = projectObject.screensByNumber[keyOfScreenObject];
    numberOfThisScreen = objectOfThisScreen.number;  
    for ( var keyOfAnswer in objectOfThisScreen.links )
    {
      // create link
      objectOfThisLink = objectOfThisScreen.links[keyOfAnswer];
      objectOfThisLink.domObject = visualEffects_addNewLinkToScreen( numberOfThisScreen, objectOfThisLink.number, objectOfThisLink );
      createDomEventsForLink( objectOfThisLink );
      
      listOfScreens.screensByNumber[numberOfThisScreen].links[objectOfThisLink.number].domObject = objectOfThisLink.domObject;
      
      // create attachments
      if (objectOfThisLink.linkedTo)
      {
        interfaceActionOfLinking.isActive = true;
        interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom = numberOfThisScreen;
        interfaceActionOfLinking.numberOfLinkWeAttachFrom = objectOfThisLink.number;
        attachLinkToScreen( objectOfThisLink.linkedTo );
      }
    }
  }
}

function visualEffects_exportProjectToJsonField( projectJsonString )
{
  var JSON_TEXTAREA = $('#textareaForJsonExport');
  JSON_TEXTAREA.val(projectJsonString);
}

function getCoordinatesOfNewScreen(e, objectOfThisScreen)
{
  if ( !objectOfThisScreen.position.x || !objectOfThisScreen.position.y )
  {
    var MWS = $('#' + settings.jsId.MWS);
    var positionX = e.pageX - MWS.offset().left - 1;
    var positionY = e.pageY - MWS.offset().top - 1;
  }
  else
  {
    var positionX = objectOfThisScreen.position.x;
    var positionY = objectOfThisScreen.position.y;    
  }
  
  return {x: positionX, y: positionY}
}

function visualEffects_createNewScreen(e, objectOfThisScreen)
{
   // draw DIV
    var NEWSCREEN =  $('<div></div>');
    var MWS = $('#' + settings.jsId.MWS);
    MWS.append(NEWSCREEN);
    NEWSCREEN.attr('id',objectOfThisScreen.id);
    NEWSCREEN.attr('data-number',objectOfThisScreen.number);
    NEWSCREEN.addClass(settings.cssClass.screenIcon); 
    NEWSCREEN.css('left',objectOfThisScreen.position.x).css('top',objectOfThisScreen.position.y);
        
    // focus on new DIV
    NEWSCREEN.addClass(settings.cssClass.screenJustCreated);
    setInterval(function(){ NEWSCREEN.removeClass(settings.cssClass.screenJustCreated); }, 2000);
    
    return NEWSCREEN;
}



function visualEffects_deleteScreenFromProject( numberOfScreenToDelete )
{
  visualEffects_hideAllPopups();
  var SCREEN = findDomOfScreen(numberOfScreenToDelete);
  SCREEN.remove();
}



/* POPUP */

function visualEffects_createPopupWithDetailsForNewScreen( objectOfThisScreen )
{  
  var SCREEN = objectOfThisScreen.domObject;
  var POPUP =  $('<div></div>');
  
  SCREEN.append(POPUP);
  POPUP.addClass(settings.cssClass.screenPopup);
  POPUP.append('<div class="btnClose">close</div>');
  POPUP.append('<div class="caption">Caption: <input type="text" value="'+objectOfThisScreen.caption+'"/></div>');
  POPUP.append('<div class="text"><textarea>'+objectOfThisScreen.text+'</textarea></div>');
  POPUP.append('<div class="linkList"></div>');
  POPUP.append('<div class="btnNewLink">add new link</div>');
  POPUP.append('<div class="btnDelete">delete</div>');
  
  // calculate position of popup
  var positionY = SCREEN.offset().top + SCREEN.height();  
  var positionX = SCREEN.position().left + Math.floor( SCREEN.width() / 2 ) - Math.floor( POPUP.width() / 2 );
  if ( positionX < 0 ) positionX = 0;
  POPUP.show();
  POPUP.offset({ top: positionY, left: positionX });
  POPUP.hide();

  return POPUP;
}



function visualEffects_showPopup( numberOfScreen )
{
  visualEffects_hideAllPopups();
  var SCREEN = findDomOfScreen(numberOfScreen);
  var POPUP =  findDomOfPopup( numberOfScreen );
  SCREEN.addClass(settings.cssClass.screenActive);
  POPUP.show();
  removeSelection();
}



function visualEffects_hidePopup( numberOfScreen )
{
  var SCREEN = findDomOfScreen(numberOfScreen);
  var POPUP =  findDomOfPopup( numberOfScreen );
  savePopupInputValues( numberOfScreen );
  SCREEN.removeClass(settings.cssClass.screenActive);
  POPUP.hide();
}



function visualEffects_hideAllPopups()
{
  $('.' + settings.cssClass.screenIcon + '.' + settings.cssClass.screenActive).removeClass(settings.cssClass.screenActive);
  $('.' + settings.cssClass.screenIcon + ' .' + settings.cssClass.screenPopup).hide();
}



/* LINKS */

function visualEffects_addNewLinkToScreen( numberOfScreen, numberOfLink, objectOfThisLink )
{
  var SCREEN = findDomOfScreen(numberOfScreen);
  var POPUP =  findDomOfPopup( numberOfScreen );
  var popupChildrens = getDomForEachPopupChildrens( POPUP );
  var LINKS_AREA = popupChildrens.linksArea;
  var LINK = $('<div></div>');
  //var objectOfThisLink = listOfScreens.screensByNumber[numberOfScreen].links[numberOfLink];
  
  LINKS_AREA.append(LINK);
  LINK.attr('id', settings.jsId.screenLink + numberOfScreen + '-' + numberOfLink);
  LINK.attr('data-screenNumber', numberOfScreen);
  LINK.attr('data-linkNumber', numberOfLink);
  LINK.addClass(settings.cssClass.linkRow);
  LINK.append('<span class="answer">#'+numberOfLink+' <input type="text" value="'+objectOfThisLink.caption+'"/></span>');
  LINK.append('<span class="delete">[x]</span>');
  LINK.append('<span class="linked">no target</span>');
  LINK.append('<span class="makeLink">[link]</span>');
  
  return LINK;
}



function visualEffects_deleteLinkFromScreen( objectOfThisLink )
{
 var LINK = objectOfThisLink.domObject;
  LINK.remove();  
}



function visualEffects_resetLinkToEmptyAttachment( numberOfScreen, numberOfLink )
{
  var LINK = findDomOfLink( numberOfScreen, numberOfLink );
  var LINK_TARGET = LINK.children('.linked');
  LINK.removeClass(settings.cssClass.workingLink);
  LINK_TARGET.html('no target');
}



function visualEffects_runActionOfLinking( objectOfThisLink )
{
  var SCREEN = findDomOfScreen(objectOfThisLink.numberOfScreen);
  var LINK = objectOfThisLink.domObject;
  visualEffects_hidePopup( objectOfThisLink.numberOfScreen )
  SCREEN.addClass(settings.cssClass.linkFrom);
  LINK.addClass(settings.cssClass.linkFrom);
}




function visualEffects_cancelActionOfLinking( numberOfScreenWeMakeLinkFrom, numberOfScreenWeMakeLinkTo )
{
  if ( numberOfScreenWeMakeLinkFrom ) 
  {
    var SCREEN_FROM = findDomOfScreen(numberOfScreenWeMakeLinkFrom);
    var POPUP = findDomOfPopup( numberOfScreenWeMakeLinkFrom );
    var LINK = POPUP.children('.linkList').children('.'+settings.cssClass.linkFrom);
    SCREEN_FROM.removeClass(settings.cssClass.linkFrom);    
    LINK.removeClass(settings.cssClass.linkFrom);
  }
  if ( numberOfScreenWeMakeLinkTo )
  {
    var SCREEN_TO = findDomOfScreen(numberOfScreenWeMakeLinkTo);
    SCREEN_TO.removeClass(settings.cssClass.linkTo);
  }  
}



function visualEffects_attachLinkToScreen( numberOfScreenWeMakeLinkTo )
{
  var LINK = findDomOfLink( interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom, interfaceActionOfLinking.numberOfLinkWeAttachFrom );
  var LINK_TARGET = LINK.children('.linked');
  LINK.addClass(settings.cssClass.workingLink);
  LINK_TARGET.html('Linked To #' + numberOfScreenWeMakeLinkTo);
}



function visualEffects_showSpiritOfScreen(e)
{
  var SPIRIT = $('#' + settings.jsId.spiritOfScreen);
  SPIRIT.show();
  SPIRIT.offset({ top: e.pageY + 1, left: e.pageX + 1 });   
}



function visualEffects_hideSpiritOfScreen()
{
  var SPIRIT = $('#' + settings.jsId.spiritOfScreen);
  SPIRIT.hide();
}



/* PLAYER */
function visualEffects_runProjectPlayer()
{
  var PLAYER = $('#PlayerArea');
  var SCREEN;
  var html;
  var screenObject;
  var answerObject;
  var numberOfScreen;
  var flagOfFirstScreenAppended = false;
  
  PLAYER.html('');
  for ( var keyOfScreenObject in listOfScreens.screensByNumber)
  {
    screenObject = listOfScreens.screensByNumber[keyOfScreenObject];
    numberOfScreen = screenObject.number;
    SCREEN = $('<div></div>');
    PLAYER.append(SCREEN);
    SCREEN.addClass('playerScreen');
    SCREEN.attr('id', 'PlayerScreen-'+numberOfScreen);
    SCREEN.append('<h4><a name="#play'+numberOfScreen+'">SCREEN #'+numberOfScreen+': '+screenObject.caption+'</a></h4>');
    SCREEN.append('<p>'+screenObject.text+'</p>');
    
    html  = '<ul>';
    for ( var keyOfAnswer in screenObject.links )
    {
      answerObject = screenObject.links[keyOfAnswer];
      html += '<li>';
      html += '#'+answerObject.number+': ';
      if (answerObject.linkedTo) html += '<a href="'+answerObject.linkedTo+'">';
      html += answerObject.caption;
      if (answerObject.linkedTo) html += '</a>';
      html += '</li>';
    }
    html += '</ul>';
    SCREEN.append(html);
    addEventsForPlayerScreen( SCREEN );
    
    if (flagOfFirstScreenAppended) SCREEN.hide();
    else flagOfFirstScreenAppended = true;
  }
}

function visualEffects_runSlideShow()
{
  var projectObject = listOfScreens;
  var screenObject;
  var linkObject;
  var numberOfScreen;
  var numberOfLink;
  var PLAYER = $('#slideShowArea');
  var SCREEN;
  var SCREEN_LINKLIST;
  var LINK;
  var DECORATION_BACKGROUND = PLAYER.children('#back');
  var DECORATION_FRONTROUND = PLAYER.children('#front');
  var DECORATION_CHARACTERR = PLAYER.children('#char');  
  var flagOfFirstScreenAppended = false;  
  
  // set up decorations
  DECORATION_BACKGROUND.css('backgroundImage', projectObject.decorationImages.back);
  DECORATION_FRONTROUND.css('backgroundImage', projectObject.decorationImages.front);
  DECORATION_CHARACTERR.css('backgroundImage', projectObject.decorationImages.char);
  
  // delete old screens
  $('.slideShowAnyScreen').remove();
  
  // add fresh screens
  for ( var keyOfScreenObject in projectObject.screensByNumber)
  {
   
    screenObject = projectObject.screensByNumber[keyOfScreenObject];
    numberOfScreen = screenObject.number;
    SCREEN = $('<div></div>');
    PLAYER.append(SCREEN);
    SCREEN.addClass('slideShowAnyScreen');
    SCREEN.attr('id', 'SlideShowScreen-'+numberOfScreen);

    // insert links
    SCREEN_LINKLIST = $('<div></div>');
    SCREEN.append(SCREEN_LINKLIST);
    SCREEN_LINKLIST.addClass('buttons-holder');
    for ( var keyOfAnswer in screenObject.links )
    {
      linkObject = screenObject.links[keyOfAnswer];
      numberOfLink = linkObject.number;
      LINK = $('<div></div>');
      SCREEN_LINKLIST.append(LINK);
      LINK.addClass('player-button');
      LINK.attr('id','SlideShowScreen-'+numberOfScreen+'-link-'+numberOfLink);
      LINK.attr('data-linkto', linkObject.linkedTo);
      LINK.html(linkObject.caption);
      // CREATE EVENTS
      LINK.click(function(){
        var numberOfTargetScreen = $(this).attr('data-linkto');
        if (!numberOfTargetScreen) return false;
        var TARGET_SCREEN = $('#SlideShowScreen-'+numberOfTargetScreen);
        $('.slideShowAnyScreen').hide();
        TARGET_SCREEN.show();
      });
    }
    
    // insert question
    SCREEN.append('<div class="say-bubble">'+screenObject.caption+'</div>');
    SCREEN.append('<div class="client-bubble">'+screenObject.text+'</div>');
    
    
    if (flagOfFirstScreenAppended) SCREEN.hide();
    else flagOfFirstScreenAppended = true;
  }

}


