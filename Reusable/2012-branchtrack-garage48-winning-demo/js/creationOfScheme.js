function loadProjectFromJson(projectDataInJsonFormat)
{
  if (!projectDataInJsonFormat) return false;
  var projectObject = projectDataInJsonFormat;
  listOfScreens = projectObject;
  visualEffects_loadProjectFromJson(listOfScreens);
  return projectObject;
}

function exportProjectToJsonField()
{
  var projectJsonObject = listOfScreens;
  for ( var keyOfScreenObject in projectJsonObject.screensByNumber)
  {
    projectJsonObject.screensByNumber[keyOfScreenObject].domObject = false; // delete SCREEN
    for ( var keyOfAnswer in projectJsonObject.screensByNumber[keyOfScreenObject].links )
    {
      projectJsonObject.screensByNumber[keyOfScreenObject].links[keyOfAnswer].domObject = false;
    }
  }  
  var projectJsonString = makeJsonStringOfProject( projectJsonObject );
  
  visualEffects_exportProjectToJsonField( projectJsonString );
}

function makeJsonStringOfProject( projectObject )
{
  return JSON.stringify( projectObject );
}


function runSlideShow()
{
  visualEffects_runSlideShow();
}

function createNewScreen(e)
{

    // create new object
    listOfScreens.numberOfLastScreen++;
    var numberOfThisScreen = listOfScreens.numberOfLastScreen;
    var objectOfThisScreen = 
    {
      type:       'userScreen',
      number:     numberOfThisScreen,
      id:         settings.jsId.screenPrefix + numberOfThisScreen,
      caption:    settings.texts.defaultScreenCaption + numberOfThisScreen,
      text:       settings.texts.defaultScreenText,
      position:   { x: false, y: false },
      domObject:  false,
      linksCount: 0,
      links:      {}
    };    
    
    objectOfThisScreen.position = getCoordinatesOfNewScreen(e, objectOfThisScreen);
    objectOfThisScreen.domObject = visualEffects_createNewScreen(e, objectOfThisScreen);
    var POPUP = visualEffects_createPopupWithDetailsForNewScreen( objectOfThisScreen );
    createDomEventsForScreensPopup( objectOfThisScreen );
    createDomEventsForScreen( objectOfThisScreen );
    visualEffects_showPopup( numberOfThisScreen );
        
    listOfScreens.screensByNumber[numberOfThisScreen] = objectOfThisScreen;
    return objectOfThisScreen;
}



function deleteScreenFromProject( numberOfScreenToDelete )
{
  // reset links asisted to this screen
  for ( var keyOfCheckedScreen in listOfScreens.screensByNumber )
  {
    for ( var keyOfCheckedLink in listOfScreens.screensByNumber[keyOfCheckedScreen].links )
    {
      if ( listOfScreens.screensByNumber[keyOfCheckedScreen].links[keyOfCheckedLink].linkedTo == numberOfScreenToDelete )
      {
        resetLinkToEmptyAttachment( listOfScreens.screensByNumber[keyOfCheckedScreen].number, listOfScreens.screensByNumber[keyOfCheckedScreen].links[keyOfCheckedLink].number );
      }
    }
  }
  
  delete listOfScreens.screensByNumber[numberOfScreenToDelete];
  visualEffects_deleteScreenFromProject( numberOfScreenToDelete );
}



/* POPUP */

function savePopupInputValues( numberOfScreen )
{
  var popupInputValues = getPopupInputValues( numberOfScreen );
  
  listOfScreens.screensByNumber[numberOfScreen].caption = popupInputValues.caption;
  listOfScreens.screensByNumber[numberOfScreen].text = popupInputValues.text;
  
  for ( var keyOfLinkValue in popupInputValues.links )
  {
    var linkNumber = popupInputValues.links[keyOfLinkValue].number;
    var linkCaption = popupInputValues.links[keyOfLinkValue].caption;
    listOfScreens.screensByNumber[numberOfScreen].links[linkNumber].caption = linkCaption;
  }
}



/* LINKS */

function addNewLinkToScreen( numberOfThisScreen )
{
  listOfScreens.screensByNumber[numberOfThisScreen].linksCount++;
  var objectOfThisLink = {
    number:             listOfScreens.screensByNumber[numberOfThisScreen].linksCount,
    numberOfScreen:     numberOfThisScreen,
    caption:            settings.texts.defaultLinkCaption + listOfScreens.screensByNumber[numberOfThisScreen].linksCount,
    domObject:          false,
    linkedTo:           false
  };
  objectOfThisLink.domObject = visualEffects_addNewLinkToScreen( numberOfThisScreen, objectOfThisLink.number, objectOfThisLink );
  createDomEventsForLink( objectOfThisLink );
  
  listOfScreens.screensByNumber[numberOfThisScreen].links[objectOfThisLink.number] = objectOfThisLink;
  return objectOfThisLink;
}



function deleteLinkFromScreen( objectOfThisLink )
{
  delete listOfScreens.screensByNumber[objectOfThisLink.numberOfScreen].links[objectOfThisLink.number];
  visualEffects_deleteLinkFromScreen( objectOfThisLink );
  canvas_deleteArrow( objectOfThisLink );
}



function runActionOfLinking( objectOfThisLink )
{
  interfaceActionOfLinking.isActive = true;
  interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom = objectOfThisLink.numberOfScreen;
  interfaceActionOfLinking.numberOfLinkWeAttachFrom = objectOfThisLink.number;
  visualEffects_runActionOfLinking( objectOfThisLink );
}



function cancelActionOfLinking( numberOfSecondScreenIfExists )
{
  visualEffects_cancelActionOfLinking( interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom, numberOfSecondScreenIfExists );
  visualEffects_hideSpiritOfScreen();
  visualEffects_hideAllPopups(); //visualEffects_showPopup( interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom );  
  interfaceActionOfLinking.isActive = false;
  interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom = false;
  interfaceActionOfLinking.numberOfLinkWeAttachFrom = false;
}



function attachLinkToScreen( numberOfScreenWeMakeLinkTo )
{
  if ( !numberOfScreenWeMakeLinkTo ) return false;
  //console.log(interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom + ' - ' + numberOfScreenWeMakeLinkTo + ' - ' + interfaceActionOfLinking.numberOfLinkWeAttachFrom);
  canvas_drawConnector(interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom,numberOfScreenWeMakeLinkTo,interfaceActionOfLinking.numberOfLinkWeAttachFrom);
  
  listOfScreens.screensByNumber[interfaceActionOfLinking.numberOfScreenWeMakeLinkFrom].links[interfaceActionOfLinking.numberOfLinkWeAttachFrom].linkedTo = numberOfScreenWeMakeLinkTo;
  visualEffects_attachLinkToScreen( numberOfScreenWeMakeLinkTo );
  cancelActionOfLinking( numberOfScreenWeMakeLinkTo );  
}



function resetLinkToEmptyAttachment( numberOfScreen, numberOfLink )
{
  listOfScreens.screensByNumber[numberOfScreen].links[numberOfLink].linkedTo = false;
  visualEffects_resetLinkToEmptyAttachment( numberOfScreen, numberOfLink );
}

function storeDecorationData(nameOfDecorationType, imageSrcString)
{
  listOfScreens.decorationImages[nameOfDecorationType] = imageSrcString;
}
