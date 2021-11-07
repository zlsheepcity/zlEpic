function removeSelection()
{
  // this shit happends on double click
  // we want to fix it
  
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {  // IE?
    document.selection.empty();
  }  
}



/* DOM SHORTCUTS */

function findDomOfScreen(number)
{
  return $('#' + settings.jsId.screenPrefix + number);
}



function findDomOfPopup( numberOfScreen )
{
  var SCREEN = findDomOfScreen(numberOfScreen);
  var POPUP =  SCREEN.children('.' + settings.cssClass.screenPopup);
  return POPUP;
}



function findDomOfLink( numberOfScreen, numberOfLink )
{
  var LINK = $('#' + settings.jsId.screenLink + numberOfScreen + '-' + numberOfLink);
  return LINK;
}



function getNumberOfScreenForThisPopup( POPUP )
{
  return POPUP.attr( 'data-number');
}



function getDomForEachPopupChildrens( POPUP )
{
  var popupChildrens = {
    closeButton:        POPUP.children('.btnClose'),
    deleteButton:       POPUP.children('.btnDelete'),
    newLinkButton:      POPUP.children('.btnNewLink'),
    captionArea:        POPUP.children('.caption'),
    captionInput:       POPUP.children('.caption').children('input'),
    textArea:           POPUP.children('.text'),
    textInput:          POPUP.children('.text').children('textarea'),
    linksArea:          POPUP.children('.linkList'),
    linkInputs:         {},
    textArea:           POPUP.children('.text')
  }
  
  // get list of links
  var LINK_LIST = popupChildrens.linksArea;
  var LINK = LINK_LIST.children('.link').children('.answer').children('input');
  LINK.each(function(){
    var linkNumber = $(this).parent().parent().attr('data-linknumber');    
    var linkObject = {
      number: linkNumber,
      DOM:    $(this)      
    };
    popupChildrens.linkInputs[linkNumber] = linkObject;
  });
  
  return popupChildrens;
}



function getPopupInputValues( numberOfScreen )
{
  var POPUP =  findDomOfPopup( numberOfScreen );
  var popupChildrens = getDomForEachPopupChildrens( POPUP );
  var CAPTION_INPUT = popupChildrens.captionInput;
  var TEXT_INPUT = popupChildrens.textInput;
  var popupInputValues = {
    caption:      CAPTION_INPUT.val(),
    text:         TEXT_INPUT.val(),
    links:        {}
  };
  
  for ( keyOfLink in popupChildrens.linkInputs )
  {
    var LINK = popupChildrens.linkInputs[keyOfLink].DOM;
    var linkObject = {
      number:   popupChildrens.linkInputs[keyOfLink].number,
      caption:  LINK.val()
    };
    popupInputValues.links[linkObject.number] = linkObject;
  }
  
  return popupInputValues;
}

