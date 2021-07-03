var DB_TheQuestions;
var DB_TheBonusQuestions;
var TheQuestions;

var TheGame =
{
	gameName:'interface',
	bestResult:0,
	
	numberOfQuestions:10,
	timer:601,
	randomTasks:true,
	
	currentIndex:0,
	correctAnswers:0,
  totalNumberOfQuestions: 0,
  totalCorrectAnswers: 0,
	thisIsSecondStage:false,
	timeVar:false,	
	theMinimumGoalReached:false,
	theMinGoalThisSession:false,
	loadUnlock: function()
	{
		return this.theMinimumGoalReached = this.bestResult >= 5;
	},
	doUnlockNow: function()
	{
		this.theMinimumGoalReached = true;
		this.theMinGoalThisSession = true;
		theMinimumGoalReached(TheGame);
		HiScorm_Please_DoUnlockRightNow(TheGame);
		/*
		$('#ScreenUnlock').bPopup({
			onOpen: function() { pauseTimer() },
			onClose: function() { resumeTimer() }
		});
		*/
		return true;
	}
};

var Q = 
{
  Content:			$('.CurrentContent'),
  Timer:	  		$('.Timer'),
  ScoreBar:			$('.ScoreBar'),
  GameFeedback:		$('#GameFeedback-v2'),
  InterfaceOption:	$('.blInterfaceOption'),
  DefaultEndOfCall:	$('.DefaultEndOfCall'),
  DefaultEndOfCallCorrect:		$('.DefaultEndOfCall-correct'),
  DefaultEndOfCallIncorrect:	$('.DefaultEndOfCall-incorrect')
}


///////////////////////////////////////////////////////////////////////

$(document).ready(function(){

	$('.SERVER').load('html/db/preload.html?g='+TheGame.gameName, function(){
		load_dataFromDOM();
		TheGame.loadUnlock();
		all_onload();
		runGame();
		all_showWelcomePopup();
	});
	$('.hint').click(function(){return false;});
});

function endGame(reason)
{
	// cls
	Q.Content.empty();
	$('.blInterfaceOption').empty();
	redrawScoreBar();
	Q.ScoreBar.hide();
	clearInterval(TheGame.timeVar);
	
	// SAVE RESULT  

	// claculate values
	var curScore = Math.floor( TheGame.correctAnswers / 2 );
	if ( TheGame.thisIsSecondStage ) curScore += 5;

	var resultData = 
	{	
		currentScore:			curScore,
		lastStoredBestScore:	TheGame.bestResult,
		gameName:				TheGame.gameName
	}	
	var moneyEarned = getGameScore(resultData);
	resultData.moneyEarned = moneyEarned;
	
	// save
	dbworks__saveGameResult(resultData);
	
	// SHOW FINAL FEEDBACK  
  Q.Feedback = $('#GameFeedback-v2');
  
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

  
  // replace values
  var values =
  {
    CurResult           : TheGame.totalCorrectAnswers,
    MaxResult           : TheGame.totalNumberOfQuestions,
    CurResultProcent    : (curScore * 10).toString() + '%',
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
  
	// select header
	if ( reason && reason == 'timeout' )   	Q.GameFeedback.children('.ifTaskover').hide();
	else                        			Q.GameFeedback.children('.ifTimeout').hide();
	
	// display biathlon
	Q.GameFeedback.children('.BiathlonBarCopy').append( Q.ScoreBar.html() );
	
	// tell about reward
	if (moneyEarned>0) Q.GameFeedback.children('.ifReward').children('.reward').html(moneyEarned);
	else Q.GameFeedback.children('.ifReward').hide();
	
	// display
	Q.GameFeedback.bPopup({modalClose: false});
  
  */
}

function endStage()
{
  TheGame.totalNumberOfQuestions    += TheGame.numberOfQuestions;
  TheGame.totalCorrectAnswers       += TheGame.correctAnswers;
	if ( TheGame.thisIsSecondStage ) endGame('questionlimit');
	else if ( TheGame.correctAnswers < TheGame.numberOfQuestions ) endGame('firstfail');
	else
	{
		TheGame.thisIsSecondStage = true;
		TheGame.doUnlockNow();
		runStage();
	}
}

function runGame()
{
	TheGame.thisIsSecondStage = TheGame.theMinimumGoalReached;
	
	// define events
	$('.thisIsAnswer').click(clickAnswer);
	$('.openGroup').click(function(e){
		if ( $('.blInterfaceOption').hasClass('freeze') ) return false;
		var groupName = 'intStyle-OptGroup-' + $(e.currentTarget).attr('value');
		$('.blInterfaceOption .hint').hide();
		$('.intStyle-OptGroup').slideUp();
		$('.'+groupName).slideDown(function(){ $('.blInterfaceOption .hint').show(); });
	});
	
	// set timer
	clearInterval(TheGame.timeVar);
	TheGame.timeVar = setInterval(gameTimer,1000);
	gameTimer(); //update immediately
	
	// go go go
	runStage();
}

function runStage()
{
	// clear stats
	TheGame.currentIndex = 0;
	TheGame.correctAnswers = 0;
	
	// prepare game data
	var currentQuestions = TheGame.thisIsSecondStage ? DB_TheBonusQuestions : DB_TheQuestions;
	TheGame.randomTasks ? TheQuestions = zl__shuffleArray(currentQuestions) : TheQuestions = currentQuestions;
	
	// go go go
	runQuestion();
}

function clickAnswer(e)
{
	if ( $('.blInterfaceOption').hasClass('freeze') ) return false;
	
	// cls
	zl__clearAnyTextSelection();
	$('.thisIsAnswer input').prop('checked', false);
	$(e.currentTarget).children('input').prop('checked', true);
	
	// get params of answer
	var currentAnswer = $(e.currentTarget).attr('value');
	var correctAnswer = TheQuestions[TheGame.currentIndex].answer;
	if (!currentAnswer) return false;
	
	// reaction
	TheQuestions[TheGame.currentIndex].recieved 	= true;
	if ( currentAnswer == correctAnswer ) clickAnswerWasCorrect()
	
	
	answerFeedback(e);
	// next step	
	//nextQuestion();
	return false;
}

function answerFeedback(e)
{
	$('.blInterfaceOption').addClass('freeze');
	
	var ANSWER = $(e.currentTarget);
	var CORRECT = $('.blInterfaceOption [value="'+TheQuestions[TheGame.currentIndex].answer+'"]');
	ANSWER.addClass( TheQuestions[TheGame.currentIndex].passed ? 'correct' : 'error' );
	
	
	var FEEDBACK = TheQuestions[TheGame.currentIndex].passed ? TheQuestions[TheGame.currentIndex].FEEDBACK_CORRECT : TheQuestions[TheGame.currentIndex].FEEDBACK_INCORRECT;
	//if ( !FEEDBACK ) FEEDBACK = Q.DefaultEndOfCall.clone().removeClass('DefaultEndOfCall');
	FEEDBACK.children('.correctAnswerCaption').html(
	'<b>'+
		( CORRECT.parent().hasClass('intStyle-OptGroup') ? $('.blInterfaceOption [value="'+CORRECT.parent().attr('for')+'"]').html() + ' > ' : '') +
		$('.blInterfaceOption .thisIsAnswer[value="'+TheQuestions[TheGame.currentIndex].answer+'"]').html()
	+ '</b>'
	);
	var BUTTON = $('<div style="padding:8px 0;text-align:center;"><span class="y-button b-close">Продолжить</span></div>');
	BUTTON.click(function(){
		$('.blInterfaceOption').removeClass('freeze');
		$('.blInterfaceOption .thisIsAnswer').removeClass('correct').removeClass('error');
		nextQuestion();
	});
	BUTTON.appendTo(FEEDBACK);
	Q.Content.children('.blPhoneDialog').append(FEEDBACK);
	redrawScoreBar();
	
}


function clickAnswerWasCorrect()
{
	TheQuestions[TheGame.currentIndex].passed 	= true;
	TheGame.correctAnswers++;
}

function nextQuestion(e)
{
	TheGame.currentIndex++;
	if ( TheGame.currentIndex == TheGame.numberOfQuestions ) endStage();
	else runQuestion();
}

function runQuestion()
{
	redrawScoreBar();
	Q.Content.empty();
	Q.Content.append( TheQuestions[TheGame.currentIndex].DIALOG );
	//animate dialog
	Q.InterfaceOption.addClass('freeze');
	$('.thisIsAnswer input').prop('checked', false);
	var counter = Q.Content.children('.blPhoneDialog').children('blockquote').length;
	Q.Content.children('.blPhoneDialog').children('blockquote').each( function (i) {
		$(this).css('display', 'none').delay((i+1)*400).fadeIn(function(){
			counter--;
			//console.log('fff',counter);
			if (counter <= 0) Q.InterfaceOption.removeClass('freeze');
		});
		
		//console.log(counter);
		//if (counter <= 0) Q.InterfaceOption.removeClass('freeze');
	});
	//Q.InterfaceOption.delay(1600).removeClass('freeze');

	$('.intStyle-OptGroup').slideUp();
}

function redrawScoreBar()
{
	Q.ScoreBar.empty();
	var SMILE;
	for ( var i=0; i < TheGame.numberOfQuestions; i++ )
	{
		if (!TheQuestions[i].recieved) SMILE = $('<span class="smile unset"></span>');
		else if (TheQuestions[i].passed) SMILE = $('<span class="smile happy"></span>');
		else SMILE = $('<span class="smile sad"></span>');
		Q.ScoreBar.append(SMILE);
	}
}

function load_dataFromDOM()
{
	var counter = 0;
	var current;
	DB_TheQuestions = [];
	DB_TheBonusQuestions = [];
	$('.DB-interface').children('div').each(function(){
				
		current 				= {};
		current.DIALOG 			= $(this).children('.blPhoneDialog').clone();
		current.FEEDBACK		= $(this).children('.EndOfCall').length > 0 ? $(this).children('.EndOfCall').clone() : false;
		current.FEEDBACK_CORRECT	= $(this).children('.EndOfCall-correct').length > 0 ? $(this).children('.EndOfCall-correct').clone() : Q.DefaultEndOfCallCorrect.clone().removeClass('DefaultEndOfCall');
		current.FEEDBACK_INCORRECT	= $(this).children('.EndOfCall-incorrect').length > 0 ? $(this).children('.EndOfCall-incorrect').clone() : Q.DefaultEndOfCallIncorrect.clone().removeClass('DefaultEndOfCall');
		current.answer 			= $(this).attr('answer');
		current.caption 		= $(this).attr('caption');
		current.passed 			= false;
		current.recieved		= false;
		current.originalIndex	= counter;
		counter++;
		
		if ( $(this).hasClass('critical') ) 	DB_TheQuestions.push(current);
		else									DB_TheBonusQuestions.push(current);
	
	});	
	TheGame.bestResult = dbworks__loadBestResult();

}

function gameTimer()
{
  TheGame.timer--;
  Q.Timer.html(secondsToTime(TheGame.timer));
  if ( TheGame.timer <= 15 ) Q.Timer.css('background', 'red');
  if ( TheGame.timer <= 0 ) endGame('timeout');
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