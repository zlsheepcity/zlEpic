var Q = 
{
	Content:		$('.CurrentContent'),
	Timer:			$('.Timer'),
	ScoreBar:		$('.ScoreBar'),
	Button:			$('.Button .y-button'),
	DB:				$('.DB-Calculator'),
	GameFeedback:	$('#GameFeedback-v2'),
	DefaultEndOfCallCorrect: $('.DefaultEndOfCall.correct'),
	DefaultEndOfCallIncorrect: $('.DefaultEndOfCall.incorrect'),
	feedbackAlreadyDisplayed: false
}

var TheQuestions;
var TheGame = 
{
	gameName:'calculator',
	bestResult:0,
	
	randomTasks:true,
	
	currentIndex:0,
	countOfQuestions: 10,
	correctAnswers:0,
	
	timer:901,
	timeVar: 0,
	
	theMinimumGoalReached:false,
	loadUnlock: function()
	{
		return this.theMinimumGoalReached = this.bestResult >= 5;
	},
	isUnlockNow: function()
	{		
		if (this.theMinimumGoalReached) return false; // already
		if (this.correctAnswers >= 5)
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


///////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	
	var gameName = 'calculator';
	$('.SERVER').load('html/db/preload.html?g='+gameName, function(){
		loadDataFromHtml();	
		TheGame.loadUnlock();
		all_onload();
		runGame();
		all_showWelcomePopup();	
	});
});

function endGame(reason)
{
	redrawScoreBar();
	Q.Content.empty();
	Q.Button.hide();
	clearInterval(TheGame.timeVar);
		
	// claculate values
	var resultData = 
	{	
		currentScore:				TheGame.correctAnswers,
		lastStoredBestScore:		TheGame.bestResult,
		gameName:					'calculator'
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
    CurResult           : TheGame.correctAnswers,
    MaxResult           : TheGame.countOfQuestions,
    CurResultProcent    : (TheGame.correctAnswers * 10).toString() + '%',
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
	
	// display header
	if ( reason && reason == 'timeout' )   	Q.GameFeedback.children('.complete').remove();
	else                        			Q.GameFeedback.children('.timeout').remove();
	
	// tell about reward
	if (moneyEarned>0) Q.GameFeedback.children('.ifReward').children('.reward').html(moneyEarned);
	else Q.GameFeedback.children('.ifReward').hide();

	// DISPLAY FINAL FEEDBACK
	Q.GameFeedback.bPopup({modalClose: false});
  
  */
}

function runGame()
{
	TheGame.currentIndex = 0;
	TheGame.correctAnswers = 0;
	runQuestion();
	Q.Button.click(answerClick);
	gameTimer(); //update immediately
	TheGame.timeVar = setInterval(gameTimer,1000);
}

function answerClick(e)
{
	var gotAnswer = Q.Content.children('.blOperatorAnswer').children('.input').children('.answer').val().toString();
	if ( !gotAnswer || gotAnswer == '' || Q.feedbackAlreadyDisplayed) return false;
	TheQuestions[TheGame.currentIndex].recieved = true;

	
	answerReaction(gotAnswer);
	//nextQuestion();
}

function answerReaction(gotAnswer)
{
	var FEEDBACK;
  var answerIsCorrect = false;
  
  // get answer status
  answerIsCorrect = gotAnswer == TheQuestions[TheGame.currentIndex].correctAnswer;
  answerIsCorrect = answerIsCorrect || gotAnswer.replace(",",".") == TheQuestions[TheGame.currentIndex].correctAnswer;
  answerIsCorrect = answerIsCorrect || gotAnswer.replace(" ","") == TheQuestions[TheGame.currentIndex].correctAnswer;
	
	if ( answerIsCorrect )
	{
		TheQuestions[TheGame.currentIndex].passed = true;
		TheGame.correctAnswers++;
		
		TheGame.isUnlockNow();
		FEEDBACK = Q.DefaultEndOfCallCorrect.clone();
	} 
	else
	{
		FEEDBACK = Q.DefaultEndOfCallIncorrect.clone();
	}
	Q.feedbackAlreadyDisplayed = true;
	var BUTTON = $('<div style="padding:8px 0;text-align:center;"><span class="y-button b-close">Продолжить</span></div>');
	BUTTON.click(function(){
		nextQuestion();
	});
	BUTTON.appendTo(FEEDBACK);
	FEEDBACK.removeClass('DefaultEndOfCall');
	Q.Content.append(FEEDBACK);
	Q.Button.hide(); //hide answer button
	redrawScoreBar();
}

function nextQuestion()
{
	TheGame.currentIndex++;
	if ( TheGame.currentIndex >= TheGame.countOfQuestions )  endGame();
	else runQuestion();
}

function runQuestion(questionIndexOrFalseIfCurrent)
{
	if (!questionIndexOrFalseIfCurrent) questionIndexOrFalseIfCurrent = TheGame.currentIndex;
	var data = TheQuestions[questionIndexOrFalseIfCurrent];
	var ANSWER = data.DOM.children('.blOperatorAnswer').clone();
	var INPUT = $('<input type="text" class="answer" value="">');
	INPUT.enterKey(answerClick);
	ANSWER.children('.input').empty();
	ANSWER.children('.input').append(INPUT);	
	// big cheat
	//ANSWER.append('<span>'+TheQuestions[TheGame.currentIndex].correctAnswer+'</span>');
	Q.feedbackAlreadyDisplayed = false;
	Q.Content.empty();
	Q.Content.append( data.DOM.children('.blClientInfo').clone() );
	Q.Content.append( data.DOM.children('.blPhoneDialog').clone() );
	Q.Content.append( ANSWER );
	Q.Button.show();
	redrawScoreBar();
	//animate stuff
	Q.Content.children('.blPhoneDialog').children('blockquote').each( function (i) {
	    $(this).css('display', 'none').delay((i+1)*400).fadeIn();
	});
	Q.Content.children('.blOperatorAnswer').css('display', 'none').delay(1500).fadeIn(
		'slow', 
		function()
		{ 
			Q.Content.children('.blOperatorAnswer').children('.input').children('input').focus();
		} 
	);
}

function redrawScoreBar()
{
	Q.ScoreBar.empty();
	var SMILE;
	for ( var i in TheQuestions )
	{
		if (!TheQuestions[i].recieved) SMILE = $('<span class="smile unset"></span>');
		else if (TheQuestions[i].passed) SMILE = $('<span class="smile happy"></span>');
		else SMILE = $('<span class="smile sad"></span>');
		Q.ScoreBar.append(SMILE);
	}
}


function loadDataFromHtml()
{
	TheQuestions = [];
	var currentLoad;
	var counter = 0;
	Q.DB.children('div').each(function(){
		currentLoad = {};
		currentLoad.DOM = $(this);
		currentLoad.originalIndex = counter;
		currentLoad.correctAnswer = $(this).children('.blOperatorAnswer').children('.input').html().toString();
		currentLoad.passed = false;
		currentLoad.recieved = false;
		counter++;
		TheQuestions.push(currentLoad);
	});
	//TheGame.countOfQuestions = counter;
	TheQuestions = TheQuestions.slice(0,TheGame.countOfQuestions);
	TheGame.randomTasks ? TheQuestions = zl__shuffleArray(TheQuestions) : false;
	
	TheGame.bestResult = dbworks__loadBestResult();
}

function gameTimer()
{
  TheGame.timer--;
  Q.Timer.html(secondsToTime(TheGame.timer));
  if ( TheGame.timer <= 15 ) $('.Timer').css('background', 'red');
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