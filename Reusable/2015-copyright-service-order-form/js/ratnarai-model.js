"use strict"

var RATNARAI = {
	
	'currentStep': 
		{
			'number':1
		},
	
	'fieldValues':
		{
			'doctype':
				{
					valStr: 'Essay'
				},
			'subject':
				{
					valStr: 'please select'
				},
			'topic':
				{
					valStr: ''
				}
		}
	
}



$(function () {
	
	
	// reset
	resteps();	
	updateFieldValues();
	
	$('.ratnarai-msg-error').hide();
	
	
	// pages
	$('#pwordPager-page-label').hide();
	$('#pwordPager-word-input').hide();
	$('#pwordPager-page-label .plink').on('click',function(){
		$('#pwordPager-page-label').hide();
		$('#pwordPager-word-input').hide();
		$('#pwordPager-page-input').show();
		$('#pwordPager-word-label').show();
	});
	$('#pwordPager-word-label .plink').on('click',function(){
		$('#pwordPager-page-label').show();
		$('#pwordPager-word-input').show();
		$('#pwordPager-page-input').hide();
		$('#pwordPager-word-label').hide();
	});
	
	

	
	
	
	// service levels
	$('.ratnarai-servicelevel-col .tile').on('click', function(e){
		$('.ratnarai-servicelevel-col .tile').removeClass('selected');
		$(e.currentTarget).addClass('selected');
	});
	
	
	
	
	// urgency calendar tip
	$('.ratnarai-urgency-list-item').on('mouseover', function(e){
		var TRIGER = $(e.currentTarget);
		$('.ratnarai-urgency-calendar').show();
		$('#urgency-calendared-value').empty().append( TRIGER.attr('data-cal') );
	});
	$('.ratnarai-urgency-list-item').on('mouseout', function(){
		//$('.ratnarai-urgency-calendar').hide();
	});
	
	
	// file uploader
	$('#field-filestobecontinue-kliker').on('click', function(e){
		$('.ratnarai-file-uploader').slideDown('fast');
	});
	
	
	// action step bar 
	$('#rajs-stepbarGo1').on('click',gotoStep1);
	$('#rajs-stepbarGo2').on('click',gotoStep2);
	$('#rajs-stepbarGo3').on('click',gotoStep3);
	$('#rajs-stepbarGo4').on('click',gotoStep4);
	$('#rajs-stepbarGo5').on('click',gotoStep5);
	$('.rajs-stepGo1').on('click',gotoStep1);
	$('.rajs-stepGo2').on('click',gotoStep2);
	$('.rajs-stepGo3').on('click',gotoStep3);
	$('.rajs-stepGo4').on('click',gotoStep4);
	$('.rajs-stepGo5').on('click',gotoStep5);
	$('.rajs-stepGo6').on('click',gotoStep6);
	$('.rajs-stepGo7').on('click',gotoStep7);

	
	
	
	// popup actions
	$('.popup-trigger-overlay1').on('click',function(){
		$('#ratnatai-popup-doctype').show();
		$('#ratnatai-popup-subjects').hide();
	});
	$('.popup-trigger-overlay2').on('click',function(){
		$('#ratnatai-popup-doctype').hide();
		$('#ratnatai-popup-subjects').show();
	});
	$('.ratnatai-popup-linker > div > div > span').on('click',selectThisDoctype);
	$('.ratnatai-popup-linker-subjects > div > div > span').on('click',selectThisSubject);
	
	
	// input field actions
	$('#field-topic').on('blur',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
		RATNARAI.fieldValues.topic.valStr = INPUT.val();
	});
	$('#field-topic').on('keyup',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	$('#field-topic').on('change',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	
	
	$('#field-firstname').on('blur',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});
	$('#field-firstname').on('keyup',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	$('#field-firstname').on('change',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	
	
	$('#field-lastname').on('blur',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});
	$('#field-lastname').on('keyup',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	$('#field-lastname').on('change',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	
	$('#field-email').on('blur',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});
	$('#field-email').on('keyup',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	$('#field-email').on('change',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	
	
	$('#field-retypeemail').on('blur',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});
	$('#field-retypeemail').on('keyup',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	$('#field-retypeemail').on('change',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	
	
	$('#field-phoneArea').on('blur',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});
	$('#field-phoneArea').on('keyup',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	$('#field-phoneArea').on('change',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	
	
	$('#field-phoneNumber').on('blur',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});
	$('#field-phoneNumber').on('keyup',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	$('#field-phoneNumber').on('change',function(e){
		var INPUT = $(e.currentTarget);
		validateTextField(INPUT);
	});	
	
	
	
	
	// sidebar VASes
	//$('#SidePanelVAS-pagesummary').hide();	
	//$('#SidePanelVAS-proofread').hide();
	//$('#SidePanelVAS-plagiarism').hide();
	
	$('.inputFor-SidePanelVAS').on('click',addVAStoSidePanel);	
	
	
	// sidebar vas delete
	$('#SidebarDeletProof').on('click',function(){ 
		$('#SidebarProofForDelete').addClass('ratnarai-sidebar-bill-nadelete');
		$('#SidebarProofForDelete .ratnarai-sidebar-bill-confirm').slideDown(200, function(){
		});
	});
	$('.ratnarai-confirmVASDelete-cancelButton').on('click', function(){
		$('#SidebarProofForDelete .ratnarai-sidebar-bill-confirm').slideUp(200, function(){
			$('#SidebarProofForDelete').removeClass('ratnarai-sidebar-bill-nadelete');
		});
		
	});
	
	$('.ooSidebarDeletProof').on('click',function(e){ 
		var KLIKER = $(e.currentTarget);
		var PAPA = KLIKER.parent();
		var MSG = PAPA.children('.ratnarai-sidebar-bill-confirm');
		$('.ooSidebarProofForDelete').removeClass('ratnarai-sidebar-bill-nadelete');
		$('.ooSidebarProofForDelete .ratnarai-sidebar-bill-confirm').hide();
		PAPA.addClass('ratnarai-sidebar-bill-nadelete');
		MSG.slideDown(200);
	});
	$('.ratnarai-confirmVASDelete-cancelButton').on('click', function(){
		$('.ooSidebarProofForDelete .ratnarai-sidebar-bill-confirm').slideUp(200, function(){
			$('.ooSidebarProofForDelete').removeClass('ratnarai-sidebar-bill-nadelete');
		});
		
	});
	
	
	

});


function addVAStoSidePanel(e) {
	var KLIKER = $(e.currentTarget);
	var VAS = $('#SidePanelVAS-' + KLIKER.attr('vas') );
	VAS.toggle();
}

function validateTextField(INPUT) {
	var noerrors = true;
	var tname = INPUT.attr('id');
	var $MSG = $('.'+tname+'-msg');
	var $PAPA = $('.'+tname+'-papa');
	if ( INPUT.val().length < 1 )
	{
		INPUT.addClass('error');
		$MSG.show(200);
		$PAPA.addClass('error');	
		noerrors = false;
	}
	else
	{
		INPUT.removeClass('error');
		$MSG.slideUp(200);
		$PAPA.removeClass('error');	
	}
}


function updateFieldValues() {
	$('#fieldValue-doctype').empty().append('<span>'+RATNARAI.fieldValues.doctype.valStr+'</span>');
	$('#fieldValue-subject').empty().append('<span>'+RATNARAI.fieldValues.subject.valStr+'</span>');
	//console.log('<span>'+RATNARAI.fieldValues.doctype.valStr+'</span>');
}


function selectThisSubject(e) {
  	var KLIKER = $(e.currentTarget);
	var VALUE = KLIKER.text();
	RATNARAI.fieldValues.subject.valStr = VALUE;
	updateFieldValues();
	
	
	//toggleOverlay();
		var overlay = document.querySelector( 'div.overlay' )
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}	
}
function selectThisDoctype(e) {
  	var KLIKER = $(e.currentTarget);
	var VALUE = KLIKER.text();
	RATNARAI.fieldValues.doctype.valStr = VALUE;
	updateFieldValues();
	
	
	//toggleOverlay();
		var overlay = document.querySelector( 'div.overlay' )
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}	
}




function gotoStep1(e)
{
  	var KLIKER = $(e.currentTarget);
	RATNARAI.currentStep.number = 1;
	resteps();
	$("html, body").animate({ scrollTop: 0 }, 200);
}
function gotoStep2(e)
{
  	var KLIKER = $(e.currentTarget);
	RATNARAI.currentStep.number = 2;
	resteps();
	$("html, body").animate({ scrollTop: 0 }, 200);
}
function gotoStep3(e)
{
  	var KLIKER = $(e.currentTarget);
	RATNARAI.currentStep.number = 3;
	resteps();
	$("html, body").animate({ scrollTop: 0 }, 200);
}
function gotoStep4(e)
{
  	var KLIKER = $(e.currentTarget);
	RATNARAI.currentStep.number = 4;
	resteps();
	$("html, body").animate({ scrollTop: 0 }, 200);
}
function gotoStep5(e)
{
  	var KLIKER = $(e.currentTarget);
	RATNARAI.currentStep.number = 5;
	resteps();
	$("html, body").animate({ scrollTop: 0 }, 200);
}
function gotoStep6(e)
{
  	var KLIKER = $(e.currentTarget);
	RATNARAI.currentStep.number = 6;
	resteps();
	$("html, body").animate({ scrollTop: 0 }, 200);
	
	$('#ratnarai-sidebar-ordersummary').hide();
	$('#ratnarai-sidebar-banners').hide();
	$('#ratnarai-sidebar-orderstatus').show();
	$('.ratnarai-stepBar-step').fadeOut(200);
}
function gotoStep7(e)
{
  	var KLIKER = $(e.currentTarget);
	RATNARAI.currentStep.number = 7;
	resteps();
	$("html, body").animate({ scrollTop: 0 }, 200);
	
	$('#ratnarai-sidebar-ordersummary').hide();
	$('#ratnarai-sidebar-banners').hide();
	$('#ratnarai-sidebar-orderstatus').show();
	$('.ratnarai-stepBar-step').fadeOut(200);
}









function resteps() {
	$('.ratnarai-stepBar-step').removeClass('current');
	$('.ratnarai-stepBar-step:nth-of-type('+RATNARAI.currentStep.number+')').addClass('current');
	
	$('.ratnarai-stepcontent').hide();
	$('#ratnarai-stepcontent-'+RATNARAI.currentStep.number).show();
}