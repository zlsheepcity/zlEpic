// TERMINOLOGY
/*
  
  VARIABLES_IN_CAPITAL_LETTERS = jQuery dom objects
  
  Vocabulary:
  
  - Main Work Area 
    Area for creation and displacing screens of project.
  
  - Screen
    One screen in the project. Storage data or visual icon at Main Work Area.
    
  - Popup
    Visual window with screen info and settings.
    
  - Action Of Linking
    

*/


// INIT

// the main storage object for scenario
var listOfScreens = {
  numberOfLastScreen: 0,
  screensByNumber: {},
  decorationImages: {
    back: '',
    front: '',
    char: ''
  }
};

// a flag for action, when we choosing a target to link with current screen
var interfaceActionOfLinking = {
  isActive: false,
  numberOfScreenWeMakeLinkFrom: false
};

var settings = {
  cssClass: {
    screenIcon:                 'screenIconOnMainWorkArea',
    screenJustCreated:          'justCreated',
    screenPopup:                'details',
    screenActive:               'focusedScreen',
    linkFrom:                   'linkFrom',
    linkTo:                     'linkTo',
    linkRow:                    'link',
    workingLink:                'workingLink'
  },
  jsId: {
    screenPrefix:               'ScreenIcon-', // + number
    screenLink:                 'ScreenLink-', // + number
    MWA:                        'mainWorkArea',
    MWS:                        'mainWorkScreens',
    spiritOfScreen:             'spiritScreen',
  },
  texts: {
    defaultScreenCaption:       'Screen #', // + screen number
    defaultScreenText:          'The question',
    defaultLinkCaption:         'Answer #' // +link number
  }
};

$(document).ready(function(){

  initializationForPageEngine();  
  createMainInterfaceDomEvents();
  builderOnLoadInitialization();
  //resizeCanvas();
  
  // DEMO
  //listOfScreens = loadProjectFromJson(demoData.testProject_B);
  $('.project-list li').click(function(){
    var demoObjectName = $(this).attr('data-objectname');
    if (!demoObjectName) return false;
    listOfScreens = {};
    listOfScreens = loadProjectFromJson(demoData[demoObjectName]);
  });
  
});