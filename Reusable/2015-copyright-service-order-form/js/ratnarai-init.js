"use strict"



$(document).ready(function(){
  
    var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
	
	$('.chosen-select').chosen({no_results_text:'Nothing found!',width: "100%"});
	
	
	
	$('#field-country').on('change',function(){ $('#field-phone-country').val('+1' + $('#field-country').val().length) } );
	
	$('#step-submit').on('click',function(){
		var noerrors = true;
		$('.ratnarai-fieldset .validate-length').each(function(el, i){ 
			var passed = validateFirstName({'currentTarget':i });  
			if ( !passed ) noerrors = false;
		});
		
		if ( noerrors ) console.log('Success')
	});
	

	
	
	// VALIDATION
	
	$('.validate-length').on('blur',validateFirstName);
	$('.validate-length').on('keyup',validateFirstName);
	
});





function validateFirstName(e)
{
	var $TARGET = $(e.currentTarget);
	var noerrors = true;
	if ( $TARGET.val().length > 0 ) 
	{
		$TARGET.removeClass('error');
		var tname = $TARGET.attr('id');
		var $MSG = $('.'+tname+'-msg');
		$MSG.addClass('hidden');
		var $PAPA = $('.'+tname+'-papa');
		$PAPA.removeClass('error');			
	}
	else 
	{
		$TARGET.addClass('error');
		var tname = $TARGET.attr('id');
		var $MSG = $('.'+tname+'-msg');
		$MSG.removeClass('hidden');
		var $PAPA = $('.'+tname+'-papa');
		$PAPA.addClass('error');	
		noerrors = false;
	}
	return noerrors;
}

function check_to_login() {
	var $L = $('#field-loginas-login');
	var $LMSG = $('.field-loginas-login-msg');
	var noerrors = true;
	if ( $L.val().length < 1 ) {
		$L.addClass('error');
		$LMSG.removeClass('hidden');
		noerrors = false;
	}
	var $P = $('#field-loginas-password');
	var $PMSG = $('.field-loginas-password-msg');
	if ( $P.val().length < 1 ) {
		$P.addClass('error');
		$PMSG.removeClass('hidden');
		noerrors = false;
	}
	return noerrors;
}

function fill_contacts_from_login() {
	$('.ratnarai-login-toggler').hide();
	$('.ratnarai-login-newuser').hide();
	$('.ratnarai-login-welcome').show();
	
	$('#ctitle-ver3').removeAttr('checked');
	$('#ctitle-ver1').attr({'checked':'yes'});
	$('#field-firstname').val('Buba');
	$('#field-lastname').val('Kartopel');
	
	$('#field-email').val('buba@kartopel.com');
	$('.ratnarai-u-retypemail').hide();
	$('#field-skype').val('bubakartopel');
	
	$('.ratnarai-fieldset .validate-length').each(function(el, i){ validateFirstName({'currentTarget':i })  });
}