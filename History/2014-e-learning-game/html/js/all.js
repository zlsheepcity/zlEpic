var intea = 'v3.4 / 2014-01-15';

//************************************************************************

function HiScorm_Please_DoUnlockRightNow(params)
{
	var gameName = params.gameName || 'default';
	switch (gameName)
	{
		case 'dialog':
		case 'interface':
		case 'anketa':
		case 'calculator':
		case 'objections':
			//
			//window.parent.processEvent('SCORMSETTER_1');
		break;
		default:
			//
		break;
	}	
}


function getGameScore(params)
{
	/*
		params.currentScore
		(params.firstStageCorrectAnswers)
		params.lastStoredBestScore
		params.gameName
	*/
	var moneyProfit = 0;
	
	switch ( params.gameName )
	{
		case 'dialog':
		case 'calculator':
		case 'objections':
		case 'interface':
		case 'anketa':
		
			moneyProfit = ( params.currentScore - params.lastStoredBestScore ) * 10;
			break;		
					
		default:
			return false;
	}
	
	if ( moneyProfit <= 0 ) moneyProfit = 0;
	return parseInt(moneyProfit);
}

function theMinimumGoalReached(params)
{
	var gameName = params.gameName || 'default';
	switch (gameName)
	{
		case 'dialog':
		case 'interface':
		case 'anketa':
		case 'calculator':
		case 'objections':
				window.parent.$('#OBJ_37_NextDisabled').hide();
				window.parent.$('#OBJ_37_NextEnabled').show();
      
			  // save locked value
			  var resultData =
			  {	
				currentScore:			    5, // constant
				lastStoredBestScore:	TheGame.bestResult,
				gameName:				      gameName
			  }
			  var moneyEarned = getGameScore(resultData);
			  resultData.moneyEarned = moneyEarned;
			  
			  // save
			  dbworks__saveGameResult(resultData);
      
		break;
		default:
			window.parent.$('#OBJ_37_NextDisabled').show();
			window.parent.$('#OBJ_37_NextEnabled').hide();
		break;
	}	
}




//************************************************************************

function all_onload()
{
   //console.log('TheGame', TheGame);
   if ( TheGame.theMinimumGoalReached ) 	theMinimumGoalReached(TheGame);
   else 									theMinimumGoalReached('lock-me-down');
  /*
	use global TheGame
	TheGame.gameName: 'calculator'
	TheGame.bestResult: 0
  */ 

	$('.jsCL-next').click(function(){
		// course lab | next page button
	});
}

function all_showWelcomePopup()
{
	// get current status
	var score = TheGame.bestResult;
	var currentGameStatus = 
	{
		isLocked: 			false,
		isUnlocked: 		false,
		isComplete:			false,		
		isNotComplete:		true,
		varToReplace:	
		[
			{ reg: /\%PercentCurrent\%/gi, 	val: String(        TheGame.bestResult   * 10 ) },
			{ reg: /\%MoneyToGo\%/gi, 		val: String( ( 10 - TheGame.bestResult ) * 10 ) }
		],
		varPercentCurrent:	String(        TheGame.bestResult   * 10 ),
		varMoneyToGo:		String( ( 10 - TheGame.bestResult ) * 10 )
	}
	switch ( TheGame.gameName )
	{
		case 'dialog':
		case 'interface':
		case 'calculator':
		case 'objections':
			if ( score *1 <  5  ) 	currentGameStatus.isLocked = true;
			else					currentGameStatus.isUnlocked = true;
			if ( score *1 >= 10 )	currentGameStatus.isNotComplete = false;
			break;
		case 'anketa':
			if ( score *1 <  10 )  currentGameStatus.isLocked = true;
			else				
			{
				currentGameStatus.isUnlocked = true;
				currentGameStatus.isNotComplete = false;
			}
			break;
	}
	currentGameStatus.isComplete = !currentGameStatus.isNotComplete;
	
	// ----------------------------------------------------------
	// construct popup
	var POPUP = $('#WelcomePopupV2');
	
	// replace
	var htmlToReplace;
	htmlToReplace = POPUP.html(); 
	POPUP.html( htmlToReplace.replace( /\%PercentCurrent\%/gi, 	currentGameStatus.varPercentCurrent ) );
	htmlToReplace = POPUP.html(); 
	POPUP.html( htmlToReplace.replace( /\%MoneyToGo\%/gi, 		currentGameStatus.varMoneyToGo ) );
	
	// set by status
	if ( currentGameStatus.isLocked ) 		$('#WelcomePopupV2 .isLocked').addClass('yes');
	if ( currentGameStatus.isUnlocked ) 	$('#WelcomePopupV2 .isUnlocked').addClass('yes');
	if ( currentGameStatus.isNotComplete ) 	$('#WelcomePopupV2 .isNotComplete').addClass('yes');
	if ( currentGameStatus.isComplete ) 	$('#WelcomePopupV2 .isComplete').addClass('yes');
	
	// display
	POPUP.bPopup({
		onOpen: function() { pauseTimer() },
		onClose: function() { resumeTimer() }
	});	

}

//************************************************************************

function dbworks__saveGameResult(result)
{
	//{currentScore: 2, lastStoredBestScore: 0, gameName: "dialog", moneyEarned: 200} 
	var params = 
	{
		s: parseInt(result.currentScore) >= parseInt(result.lastStoredBestScore) ? result.currentScore : result.lastStoredBestScore,
		g: result.gameName,
		m: result.moneyEarned
	};
	
	$.get("html/db/saveresult.html", params);
	return true;
}

function dbworks__loadBestResult()
{	
	return  zl__parseIntOrZero( $('.DB-bestScore').attr('score') );	
}

//************************************************************************

function zl__clearAnyTextSelection()
{
  if (navigator.appName != 'Microsoft Internet Explorer') 
  {    
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
}

function zl__parseIntOrZero(value)
{
  if ( !value ) return 0;
  var result = parseInt(value);
  if ( isNaN(result) ) return 0;
  else return parseInt(value);
}

function zl__shuffleArray(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}


//randomizes all children within given element
$.fn.randomize = function(selector){ 
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });

    return this;
};

function pauseTimer() {
	clearInterval(TheGame.timeVar);
}

function resumeTimer() {
	clearInterval(TheGame.timeVar);
	TheGame.timeVar = setInterval(gameTimer,1000);
}