var Q = 
{
  Feedback: $('#GameFeedback-v2'),
  ScoreBar: $('.ScoreBar'),
  Output: $('.jsOutput'),
  Timer: $('.Timer > span'),
  DB: $('.DB-dialogues'),
  DB_BestScore: function() { return $('.DB-bestScore').attr('score'); },
  tmpl:
  {
    happy:'<span class="smile happy"></span>',
    sad:'<span class="smile sad"></span>',
	unset:'<span class="smile unset"></span>'
  }
}

var TheGame =
{
	gameName:'objections',  
	bestResult:0,

	numberOfQuestions:10,
	timer:601,
	randomDialogs:true,
	randomOptions:true,

	dialoguesCompleted: 0,
	dialoguesCompletedSuccessful: 0,
	listOfDialogues: [],
	timeVar:false,
  
    theMinimumGoalReached:false,
	loadUnlock: function()
	{
		return this.theMinimumGoalReached = this.bestResult >= 5;
	},
	isUnlockNow: function()
	{
		if (this.theMinimumGoalReached) return false; // already
		if (this.dialoguesCompletedSuccessful >= 5)
		{
			this.theMinimumGoalReached = true;
			theMinimumGoalReached(TheGame);
			HiScorm_Please_DoUnlockRightNow(TheGame);
			/*
			$('#ScreenUnlock').bPopup({
			onOpen: function() { pauseTimer() },
			onClose: function() { resumeTimer() }
			});
			*/
		}
		return this.theMinimumGoalReached;
	}
  
  }

var CD = 
{ // current dialog
  DOM:false,
  currentLevel:0,
  maxLevel:0,
  previousReplic:false,
  noErrors:true
};

// ---------------------------------------------------------------------------------------

$(document).ready(function(){

	$('.SERVER').load('html/db/preload.html?g='+TheGame.gameName, function(){
		initTheGame();
		TheGame.loadUnlock();
		all_onload();
		nextDialog();
		all_showWelcomePopup();			
	});
	
}); 


// ---------------------------------------------------------------------------------------

function initTheGame()
{
  TheGame.bestResult = dbworks__loadBestResult();
  Q.Feedback.hide();
  Q.DB.children('div').each(function(){ TheGame.listOfDialogues.push( $(this).attr('id') ) });
  TheGame.timeVar = setInterval(gameTimer,1000);
  gameTimer(); //update immediately
  for ( i=0;i<10;i++) Q.ScoreBar.append(Q.tmpl.unset);
}


function loadDialog( dialogID )
{
  if ( dialogID )
  {
    CD.DOM = $('#'+dialogID);  
    CD.currentLevel = 1;
    CD.maxLevel = CD.DOM.children('blockquote').length;
    CD.previousReplic = false;
	CD.noErrors = true;
    runDialogStep();
  }
  else finishTheGame('nocontent');
}

function runDialogStep()
{
  var CL = CD.DOM.children('blockquote:nth-of-type('+CD.currentLevel+')');
  Q.Output.empty();
  Q.Output.append( CD.DOM.children('h1').clone() );
  if ( CD.previousReplic ) Q.Output.append('<div class="PreviousMsg">'+CD.previousReplic+'</div>');
  Q.Output.append( CL.children('h2').clone() );
  Q.Output.append( CL.children('ul').clone() );
  //randomize
  TheGame.randomOptions ? $('.Output ul').randomize() : false;
  //enable clicks
  Q.Output.children('ul').children('li').click(clickAnswer);
  //animate
  //Q.Output.children('h2').css('display', 'none').fadeIn(); -----> тут надо хвост отрезать, а то он не анимируется
  Q.Output.children('ul').children('li').each( function (i) {
	$(this).css('display', 'none').delay((i+1)*200).fadeIn();
  });
}

function clickAnswer(e)
{
  var LI = $(e.currentTarget);
  CD.previousReplic = LI.html();
  //*/
  if ( LI.hasClass('correct') )
  {
    CD.currentLevel++;
    if ( CD.currentLevel > CD.maxLevel )  finishDialog(true);
    else                                  runDialogStep();
	TheGame.isUnlockNow();
	
  }
  else finishDialog(false);

  return false;
}


function finishDialog( theResultWasGood )
{
  var SMILE, NEXT, H2;
  var FEEDBACK = $('<div class="EndOfCall"></div>');
  
  TheGame.dialoguesCompleted++;
  Q.Output.empty();
  Q.Output.append( CD.DOM.children('h1').clone() );
  
  if (theResultWasGood)
  {
    TheGame.dialoguesCompletedSuccessful++;
    //SMILE = Q.tmpl.happy;
	Q.ScoreBar.children('.unset').first().removeClass('unset').addClass('happy');
	H2 = $('<h2></h2>').append(CD.DOM.children('div.good').clone());
	Q.Output.append(H2);
    FEEDBACK.append('<div class="result good">Звонок завершен успешно!</div>');
  }
  else
  {
    //SMILE = Q.tmpl.sad;
	Q.ScoreBar.children('.unset').first().removeClass('unset').addClass('sad');
	H2 = $('<h2></h2>').append(CD.DOM.children('div.bad').clone());
	Q.Output.append(H2);
    FEEDBACK.append('<div class="result bad">Клиент положил трубку!</div>');
  }
  
  if ( TheGame.dialoguesCompleted < TheGame.numberOfQuestions )
  {
    NEXT = $('<button class="y-button">Следующий звонок</button>');
    NEXT.click(nextDialog);
  }
  else
  {
    NEXT = $('<button class="y-button">Закрыть тренажёр</button>');
    NEXT.click(finishTheGame);  
  }
  
  Q.ScoreBar.append(SMILE);
  if ( CD.previousReplic ) Q.Output.append('<div class="PreviousMsg">'+CD.previousReplic+'</div>');  
  FEEDBACK.append(NEXT);
  Q.Output.append(FEEDBACK);
}

function nextDialog()
{
  loadDialog( getRandomDialogID() );
}

function getRandomDialogID()
{
  if ( TheGame.listOfDialogues.length <= 0 ) return false;
  var randomIndex = 0;
  TheGame.randomDialogs ? randomIndex = Math.floor( Math.random()* TheGame.listOfDialogues.length ) : randomIndex = 0;
  var randomDialogID = TheGame.listOfDialogues[randomIndex];
  TheGame.listOfDialogues.splice(randomIndex,1);
  return randomDialogID;
}

// -----------------------------------------------------------

function gameTimer()
{
  TheGame.timer--;
  Q.Timer.html(secondsToTime(TheGame.timer));
  if ( TheGame.timer <= 15 ) $('.Timer').css('background', 'red');
  if ( TheGame.timer <= 0 ) finishTheGame('timeout');
}

function finishTheGame( reason )
{    
  // CLS
  clearInterval(TheGame.timeVar);
  Q.Output.hide();

  // SAVE RESULT  
  
  // claculate values
  var resultData =
  {	
		currentScore:			TheGame.dialoguesCompletedSuccessful,
		lastStoredBestScore:	TheGame.bestResult,
		gameName:				'dialog'
  }
  var moneyEarned = getGameScore(resultData);
  resultData.moneyEarned = moneyEarned;
  
  // save
  dbworks__saveGameResult(resultData);
  
  
	// SHOW FINAL FEEDBACK  
  Q.Feedback = $('#GameFeedback-v2');
  var curScore = resultData.currentScore;
  
  // select header
  if ( reason && reason == 'timeout' )  Q.Feedback.children('.caption').children('.ifTaskover').hide();
  else                                  Q.Feedback.children('.caption').children('.ifTimeout').hide();  
  
  // select feedback
  Q.Feedback.children('.content').children('.ifThisIsMaster').hide();
  Q.Feedback.children('.content').children('.ifResultIsNotImproved').hide();
  Q.Feedback.children('.content').children('.ifResultIsImproved').hide();  
  Q.Feedback.children('.content').children('.ifThisIsMasterNow').hide();
  Q.Feedback.children('.content').children('.ifResultIsWorst').hide();
  
  if ( moneyEarned > 0 ) Q.Feedback.children('.content').children('.ifResultIsImproved').show();
  if ( TheGame.theMinimumGoalReached && curScore < 10 && TheGame.bestResult < 10 ) Q.Feedback.children('.content').children('.ifResultIsNotImproved').show();
  if ( !TheGame.theMinimumGoalReached ) Q.Feedback.children('.content').children('.ifResultIsWorst').show();  
  if ( TheGame.bestResult >= 10 && curScore >= 10 )  Q.Feedback.children('.content').children('.ifThisIsMaster').show();
  if ( TheGame.bestResult < 10 && curScore >= 10 )  Q.Feedback.children('.content').children('.ifThisIsMasterNow').show();
  
  /*
  if ( TheGame.bestResult >= 10 )  Q.Feedback.children('.content').children('.ifThisIsMaster').show();
  else if ( moneyEarned>0 )        Q.Feedback.children('.content').children('.ifResultIsImproved').show();
  else                             Q.Feedback.children('.content').children('.ifResultIsNotImproved').show();
  */
  
  // replace values
  var values =
  {
    CurResult           : TheGame.dialoguesCompletedSuccessful,
    MaxResult           : TheGame.numberOfQuestions,
    CurResultProcent    : (TheGame.dialoguesCompletedSuccessful * 10).toString() + '%',
    PrevResultProcent   : (TheGame.bestResult * 10).toString() + '%',
    MoneyEarned         : moneyEarned
  }
  var replacedHtml;
  replacedHtml = Q.Feedback.html().replace( /\%CurResult\%/gi,           values.CurResult );
  Q.Feedback.html(replacedHtml);
  replacedHtml = Q.Feedback.html().replace( /\%MaxResult\%/gi,           values.MaxResult );
  Q.Feedback.html(replacedHtml);
  replacedHtml = Q.Feedback.html().replace( /\%CurResultProcent\%/gi,    values.CurResultProcent );
  Q.Feedback.html(replacedHtml);
  replacedHtml = Q.Feedback.html().replace( /\%PrevResultProcent\%/gi,   values.PrevResultProcent );
  Q.Feedback.html(replacedHtml);
  replacedHtml = Q.Feedback.html().replace( /\%MoneyEarned\%/gi,         values.MoneyEarned );
  Q.Feedback.html(replacedHtml);
  
  // display feedback
  Q.Feedback.bPopup({modalClose: false});
  
  /*
  // FINAL FEEDBACK

  // select header
  if ( TheGame.timer <= 0 )   Q.Feedback.children('.ifTaskover').hide();
  else                        Q.Feedback.children('.ifTimeout').hide();  
  
  // display biathlon
  Q.Feedback.children('.BiathlonBarCopy').append( Q.ScoreBar.html() );
  
  // tell about reward
  if (moneyEarned>0) Q.Feedback.children('.ifReward').children('.reward').html(moneyEarned);
  else Q.Feedback.children('.ifReward').hide();
  
  // DISPLAY FINAL FEEDBACK
  Q.Feedback.bPopup({modalClose: false});
  */
}


function secondsToTime (seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds - (minutes * 60);
    var time = "";

    minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
    time += minutes+":";
	time += (seconds < 10) ? "0"+seconds : String(seconds);
    return time;
}

//-------------------
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


