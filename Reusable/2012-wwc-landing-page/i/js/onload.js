var ScreenList = [ '#Cover', '#CallCenter', '#Platinote', '#SoftwareHouse', '#School' ];
var CurrentPage = ScreenList[0];
var IsScrollingNow = false;

$(document).ready(function(){

  //onload
  schoolTopStory(1);

  

  // Scroll events
  $('.i-nav').click(function(){
    var target = $(this).attr('href');
    IsScrollingNow = true;
    $('html, body').animate(
      {
        scrollTop:$(target).offset().top
      }, 
      scrollSpeed(target), 
      function()
      {
        CurrentPage=target;
        IsScrollingNow = false;
        resetFixedMenu();
      }
    );   
    return false;  
  });  
  $(window).bind('scroll',function(e){
    if(!IsScrollingNow) if(captureScroll()) resetFixedMenu();
  });
  
  $('#SchoolTopStory .slidemenu span').click(function(){
    schoolTopStory($(this).attr("rel"));
  });
  $('#SchoolTopStory figure').click(function(){
    schoolTopStory();
  });  
  
  
});


// ========================================================

function scrollSpeed(target)
{
  return 250 * Math.abs( $.inArray(target, ScreenList) - $.inArray(CurrentPage, ScreenList) );
}
function captureScroll()
{
  var a = $(document).scrollTop();
  var buffer = 400;
  var previousState = CurrentPage;
  for (var t in ScreenList){
    if
    ( 
         ( t == 0 && a <= $(ScreenList[1]).offset().top - buffer ) 
      || ( t == ScreenList.length - 1 && a > $(ScreenList[t]).offset().top - buffer )
      || ( t > 0 && t < ScreenList.length - 1 && a > $(ScreenList[t]).offset().top - buffer && a <= $(ScreenList[t*1+1]).offset().top - buffer )
    ) CurrentPage = ScreenList[t];
  }
  if( previousState == CurrentPage ) return false; else return true;
}
function resetFixedMenu()
{
  $('#FixedMenu li').removeClass('current');
  $('#FixedMenu a[href="'+CurrentPage+'"]').parent().addClass('current');
  if( $.inArray(CurrentPage, ScreenList) == 0 ) window.location.hash = '';
  else window.location.hash = CurrentPage;
}
function schoolTopStory(cadr)
{
  var divC = $('#SchoolTopStory');
  var divM = $('#SchoolTopStory .slidemenu');
  if(!cadr) cadr = parseInt(divM.find('span.active').attr("rel")) + 1;
  if( cadr < 1 || cadr > 5) cadr = 1;
  
  cadr--;
  
  divC.children('figure').hide();
  divC.children('figure:eq('+cadr+')').show();
  
  divM.children('span').removeClass('active');
  divM.children('span:eq('+cadr+')').addClass('active');
}