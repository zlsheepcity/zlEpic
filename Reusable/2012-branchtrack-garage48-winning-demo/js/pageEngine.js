function initializationForPageEngine()
{
  // ON LOAD INITIALIZATION
  $('.tabSwitcher a[href="#home"]').addClass('active'); // set first tab-switcher to active status
  //$('#tabOfThisTool-introduction').show(); // display first tab
  //$('#tabOfThisTool-introduction').css('background','red');
  $('.tabOfThisTool').hide();
  $('#tabOfThisTool-home').show();

  
  
  // CREATE DOM EVENTS FOR TAB BUTTONS
  
  $('.tabSwitcher a').click(function(){
    var targetString = $(this).attr('href');
    var targetId = targetString.substr(1);
    
    $('.tabOfThisTool').hide(); // hide all tabs...
    $('#tabOfThisTool-'+targetId).show(); // ... and show target tab
    
    $('.tabSwitcher a').removeClass('active'); // remove active status from all tab-switchers ...
    $(this).addClass('active'); // ... and set current tab-switcher to active status
    return false; // prevent anchor action
  });
  
  $('#btnExportTab').click(function(){
    exportProjectToJsonField();
  });
  
  
}