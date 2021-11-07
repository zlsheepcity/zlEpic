var DB_TheQuestions;
var TheQuestions;

var TheGame =
{
	gameName:'anketa',
	bestResult:0,

	questionCount:0, 
	questionCountOnFirstStage:0, 
	timeLimit:1201,
	randomTasks:true,
	randomOptions:true,

	currentIndex:0,
	correctAnswers:0,
	firstStageCorrectAnswers:0,

	timer:false,

	timeVar:false,
	thisIsSecondStage:false,
	theMinimumGoalReached:false,
	loadUnlock: function()
	{
		return this.theMinimumGoalReached = this.bestResult >= 10;
	},
	doUnlockNow: function()
	{
		this.theMinimumGoalReached = true;
		theMinimumGoalReached(TheGame);
		HiScorm_Please_DoUnlockRightNow(TheGame);
		/*
		$('#ScreenUnlock').bPopup({
			onOpen: function() { pauseTimer() },
			onClose:function()
			{
				resumeTimer()
				$('#FinalPopup').bPopup({modalClose: false})
			}
		});
		*/
		$('#FinalPopup').bPopup({modalClose: false});
		return true;
	}
};

var Q = 
{
	Anketa:     				$('.Anketa'),
	Timer:	  					$('.Timer'),
	ProgressC:  				$('.Progress .c'),
	ProgressT:  				$('.Progress .t'),
	ExerciseAnketa: 			$('.ExerciseAnketa'),
	AnketaImage:				$('.AnketaImage'),
	AnketaOptions:				$('.AnketaOptions'),
	DefaultEndOfCallCorrect: 	$('.DefaultEndOfCall.correct'),
	DefaultEndOfCallIncorrect: 	$('.DefaultEndOfCall.incorrect')
}


///////////////////////////////////////////////////////////////////////

$(document).ready(function(){

	$('.SERVER').load('html/db/preload.html?g='+TheGame.gameName, function(){
  
	  db__loadDomlist();
	  
	  TheGame.bestResult = dbworks__loadBestResult();
	  TheGame.loadUnlock();
	  
	  all_onload();
	  
	  TheGame.timer = TheGame.timeLimit;
	  TheGame.timeVar = setInterval(gameTimer,1000);
	  gameTimer(); //update immediately
	  
	  organizeQuestions();
	  runCurrentQuestion();
	  
	  all_showWelcomePopup();	
	  
	  
	});
});

function gameTimer()
{
  TheGame.timer--;
  Q.Timer.html(secondsToTime(TheGame.timer));
  if ( TheGame.timer <= 15 ) Q.Timer.css('background', 'red');
  if ( TheGame.timer <= 0 ) finishCurrentStage('timeout');
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

///////////////////////////////////////////////////////////////////////

function db__loadDomlist()
{
	var currentTheQuestion;
	var counter = 0;
	DB_TheQuestions = [];
	$('.DB-Anketas').children('div').each(function(){
		currentTheQuestion =
		{
			dom: $(this),
			isPassed: false,
			indexOfThis: counter
		}
		counter++;
		DB_TheQuestions.push(currentTheQuestion);
	});
	TheGame.questionCount = counter;
  TheGame.questionCountOnFirstStage = counter;
	TheGame.correctAnswers = 0;
}

function organizeQuestions()
{
  var TheUnsortedQuestions = [];
  var question;
  var counter = 0;
  for ( var i in DB_TheQuestions ) if ( !DB_TheQuestions[i].isPassed ) 
  {
    question = DB_TheQuestions[i];
    question.originalIndex = i;
    TheUnsortedQuestions.push(question);
    counter++;
  }
  TheGame.randomTasks ? TheQuestions = shuffle(TheUnsortedQuestions) : TheQuestions = TheUnsortedQuestions;
  TheGame.currentIndex = 0;
  TheGame.questionCount = counter;
}

function runCurrentQuestion()
{
  CurQue = TheQuestions[TheGame.currentIndex];
  
  // show anketa
  Q.AnketaImage.empty();
  var anketaImageID = CurQue.dom.children('.placeAnketa').attr('anketa');
  var ANKETA = $('.DB-Anketa-Types').children('#'+anketaImageID).clone();
  Q.AnketaImage.append( ANKETA ); 
  Q.ProgressC.html( TheGame.currentIndex + 1 );
  Q.ProgressT.html( TheGame.questionCount );
  
  // show dialog
  Q.Anketa.empty();
  Q.Anketa.append( CurQue.dom.children('.blPhoneDialog').clone() );

  // show options
  Q.AnketaOptions.empty();  
  Q.AnketaOptions.append( CurQue.dom.children('.taskAnketa').clone() );  
  Q.AnketaOptions.append( CurQue.dom.children('.PlayerOptions').clone() );  
TheGame.randomOptions ? Q.AnketaOptions.children('.PlayerOptions').children('ul').randomize() : false;
  Q.AnketaOptions.children('.PlayerOptions').children('ul').children('li').click(clickAnswer);
  
  //animate
  Q.Anketa.children('.blPhoneDialog').children('blockquote').each( function (i) {
	$(this).css('display', 'none').delay((i+1)*400).fadeIn();
  });
  Q.AnketaOptions.children('.PlayerOptions').children('ul').children('li').delay(1000).each( function (i) {
	$(this).css('display', 'none').delay((i+1)*200).fadeIn();
  });
}

function clickAnswer(e)
{
  var FEEDBACK;
  var correct = $(e.currentTarget).hasClass('correct');  
  if ( correct ) 
  {
    var originalIndex = TheQuestions[TheGame.currentIndex].originalIndex;
    DB_TheQuestions[originalIndex].isPassed = true;
    TheGame.correctAnswers++;
	FEEDBACK = Q.DefaultEndOfCallCorrect.clone();
  }
  else
  {
	FEEDBACK = Q.DefaultEndOfCallIncorrect.clone();
  }
  
  
	
	var BUTTON = $('<div style="padding:8px 0;text-align:center;"><span class="y-button b-close">Продолжить</span></div>');
	BUTTON.click(function(){
	  TheGame.currentIndex++;
	  if ( TheGame.currentIndex < TheQuestions.length ) runCurrentQuestion();
	  else                                              finishCurrentStage();
	});
	BUTTON.appendTo(FEEDBACK);
	Q.AnketaOptions.empty();
	Q.AnketaOptions.append(FEEDBACK);
  
  /*

  */
  return false;
  
}


function finishCurrentStage(reason)
{
  var POPUP;
  Q.ExerciseAnketa.hide();
  Q.Anketa.empty();
  
  if ( !TheGame.thisIsSecondStage) TheGame.firstStageCorrectAnswers = TheGame.correctAnswers;
  
  var skipSecondStage = false;
  if ( TheGame.thisIsSecondStage || reason == 'timeout' || TheGame.correctAnswers == TheGame.questionCount ) skipSecondStage = true;
  
  if ( !skipSecondStage )
  {	
	POPUP = $('#HalftimePopup');
    TheGame.thisIsSecondStage = true;
	POPUP.html( POPUP.html().replace( /\%CA\%/gi, TheGame.correctAnswers + ' из ' + TheGame.questionCount ) );
	POPUP.bPopup({
		onOpen: function() { pauseTimer() },
		onClose: function(){
			resumeTimer();
			Q.ExerciseAnketa.show();
			organizeQuestions();
			runCurrentQuestion();
		}
	});
  }
  else	endGame(reason);
}

function endGame(reason)
{
	clearInterval(TheGame.timeVar);
	
	// SAVE RESULT  	

	// claculate values
	var POPUP = $('#FinalPopup');
	var curScore = Math.floor( ( TheGame.firstStageCorrectAnswers / TheGame.questionCountOnFirstStage ) * 10 );
	var resultData =
	{
		currentScore:				curScore,
		firstStageCorrectAnswers:	TheGame.firstStageCorrectAnswers,
		lastStoredBestScore:		TheGame.bestResult,
		gameName:					'anketa'	
	}
	var moneyEarned = getGameScore(resultData);	
	resultData.moneyEarned = moneyEarned;

	// save
	dbworks__saveGameResult(resultData);	
  
  
  // DO UNLOCK
  if ( TheGame.correctAnswers == TheGame.questionCount && !TheGame.theMinimumGoalReached ) TheGame.doUnlockNow();
  
  
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
  
  /*
  if ( TheGame.bestResult >= 10 )  Q.Feedback.children('.content').children('.ifThisIsMaster').show();
  else if ( moneyEarned>0 )        Q.Feedback.children('.content').children('.ifResultIsImproved').show();
  else                             Q.Feedback.children('.content').children('.ifResultIsNotImproved').show();
  */
  
  
  
  // replace values
  var values =
  {
    CurResult           : TheGame.firstStageCorrectAnswers, // this is not a score
    MaxResult           : TheGame.questionCountOnFirstStage,
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
	if ( reason && reason == 'timeout' )   	POPUP.children('.content').children('.ifTaskover').hide();
	else                        			POPUP.children('.content').children('.ifTimeout').hide();
	
	// tell about reward
	if (moneyEarned>0) POPUP.children('.content').children('.ifReward').children('.reward').html(moneyEarned);
	else POPUP.children('.ifReward').hide();
	
	// DISPLAY FINAL FEEDBACK
	
	if ( TheGame.correctAnswers == TheGame.questionCount && !TheGame.theMinimumGoalReached ) TheGame.doUnlockNow();
	else POPUP.bPopup({modalClose: false});
  
  */
		
}



///////////////////////////////////////////////////////////////////////


function shuffle(array) {
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