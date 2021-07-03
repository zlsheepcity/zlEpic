<!doctype html>
<html>
<head>
  <title>Current Order</title>
  <meta charset="utf-8" mapuping="ы">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  
  <link rel="stylesheet" href="css/layout.css" media="all">
  <link rel="stylesheet" href="css/design.css" media="all">
  <link rel="stylesheet" href="css/bayout.css" media="all">
  
  <link rel="stylesheet" href="css/elements.css" media="all">    
  <link rel="stylesheet" href="css/ordnung.css" media="all">
  <link rel="stylesheet" href="css/ordnung-details.css" media="all">
  <link rel="stylesheet" href="css/ordnung-orderform.css" media="all">
  <link rel="stylesheet" href="css/ordnung-payments.css" media="all">
  <link rel="stylesheet" href="css/ordnung-nav.css" media="all">
  <link rel="stylesheet" href="css/kirkwood.css" media="all">
  
</head>
<body>


<article id="CurrentOrdnung" class="CurrentOrdnung" data-currentscreen="overview">

  <header class="OrdnungHeader">
    <h1>
      <span class="navLink" data-goto="overview">
        Order from BESTESSAYS.COM <small>id#7008473</small>
      </span>
      <?/*
      <small style="line-height:16px;">
        <span class="akcent akcent-doit akcent-link jebeLink" data-jebe="1">Episode 1</span>
        <span class="akcent akcent-doit akcent-link jebeLink" data-jebe="2">Episode 2</span>
        <span class="akcent akcent-doit akcent-link jebeLink" data-jebe="3">Episode 3</span>
        <span class="akcent akcent-doit akcent-link jebeLink" data-jebe="4">Episode 4</span>
        <span class="akcent akcent-doit akcent-link jebeLink" data-jebe="5">Episode 5</span>
      </small>
      */?>
    </h1>
  </header>

  
  <? include('ordnung/toolbar.php'); ?>
  
  
  <section id="navOrderScreens" style="position:relative;">
  
    <section class="navOrderScreen navOrderScreen-overview" data-goto="overview">
      <? include('ordnung/overview.php'); ?>
    </section>
    <section class="navOrderScreen navOrderScreen-orderform" data-goto="orderform">
      <? include('ordnung/orderform.php'); ?>
    </section>
    <section class="navOrderScreen navOrderScreen-payments" data-goto="payments">
      <? include('ordnung/payments.php'); ?>
    </section>
    <section class="navOrderScreen navOrderScreen-vas" data-goto="vas">
      <? include('ordnung/vas.php'); ?>
    </section>
    <section class="navOrderScreen navOrderScreen-process" data-goto="process">
      <? include('ordnung/process.php'); ?>
    </section>
    <section class="navOrderScreen navOrderScreen-events" data-goto="events">
      <? include('ordnung/events.php'); ?>
    </section>
    <section class="navOrderScreen navOrderScreen-client" data-goto="client">
      <? include('ordnung/client.php'); ?>
    </section>
    <section class="navOrderScreen navOrderScreen-design" data-goto="design">
      <? include('ordnung/design.php'); ?>
    </section>
    
    

    
  </section>
  
  
    <div class="middlePopup middlePopup-orderform" id="middlePopupGregory">
        <span class="middlePopup-close middlePopupCloser">×</span>
        <div class="byColContent">
          <header class="byColHeader byColHeader-link byColHeader-orderformerspecial">
            <h2>
              <span class="middlePopupCloser navLink jsOrderformLink" data-goto="orderform" data-orderform="initial">
                Initial submit »
              </span>
            </h2>
          </header>
          <div class="byColContentContent">
            <?include('ordnung/orderform-c-initial.php');?>
          </div>
        </div>
    </div>  
  
  
  <div class="ShadowTime middlePopupCloser" id="ShadowTime"></div>
  
  
  
  
  <?include('kirkwood.php');?>

</article>

  
  <script src="js-libs/jquery-latest.min.js"></script>
  <script src="js-libs/handlebars-latest.js"></script>
  <script>
    Handlebars.registerHelper('each', function(context, options) {
      var ret = "";

      for(var i=0, j=context.length; i<j; i++) {
        ret = ret + options.fn(context[i]);
      }

      return ret;
    });  
  </script>
  
  <script src="js/interface.js"></script>
  <!-- script src="js/OrderNav.js"></script -->
  <script src="js/OrderTimeline.js"></script>
  <script src="js/OrderTimelineCanvas.js"></script>
  <script src="js/ordnung-nav.js"></script>
  
  <script src="js/emu-contentMngr.js"></script>
  
  
  <script>
    function emuJebe() {
      
      
      /* --------------------------------------------- */
      if (TheEmu.jebe >= 1) { <?=include('jebe/jebe01.js');?> }
      if (TheEmu.jebe >= 2) { <?=include('jebe/jebe02.js');?> }
      if (TheEmu.jebe >= 3) { <?=include('jebe/jebe03.js');?> }
      if (TheEmu.jebe >= 4) { <?=include('jebe/jebe04.js');?> }
      if (TheEmu.jebe >= 5) { <?=include('jebe/jebe05.js');?> }
        
        
      
      
      
      
      
      /* --------------------------------------------- */
      /* --------------------------------------------- */
      resetHandlebars();  
      
      
      
      createCanvasLayer();
      canvasingEvents();  
      
           
      navOrdnungScreenSet(TheOrderNav.currentScreen);
      $('.navLink').on('click', navOrdnungScreenKliker);  
      
      $('.jsOrderformLink').on('click',function(e){
        var TARGET = $(e.currentTarget);
        var screen = TARGET.attr('data-orderform');
        navOrderformContent(screen);  
        //return false;    
      });
      $('.jsPaimentsLink').on('click',function(e){
        var TARGET = $(e.currentTarget);
        var screen = TARGET.attr('data-payment');
        navUniversalInnerNavigation('Paiments', screen);  
        //return false;    
      });      
      $('.jsProcessLink').on('click',function(e){
        var TARGET = $(e.currentTarget);
        var screen = TARGET.attr('data-process');
        navUniversalInnerNavigation('Process', screen);  
        //return false;    
      });   
      $('.jebeLink').removeClass('akcent-danger');
      $('.jebeLink').addClass('akcent-doit');
      $('.jebeLink[data-jebe="'+TheEmu.jebe+'"]').addClass('akcent-danger');
      $('.jebeLink[data-jebe="'+TheEmu.jebe+'"]').removeClass('akcent-doit');     


      // TIMELINE HOVA
      //$('.jsOTIE').removeClass('cssOTIE');
      $('.jsOTIE-tirgger').on('mouseenter', hovaOTIE);
      $('.jsOTIE-tirgger').on('mouseleave', hovaOTIE);

      
    }  
    
    function hovaOTIE(e) {
      var TARGET = $(e.currentTarget);
      var base   = TARGET.attr('data-otie');
      var bull   = TheOrderTimeline.events[base].bull;
      var eve    = e.type;
      
      var EVENT_CONTENT = $('#jsOTIE-EventContent-'+base);
      
      EVENT_CONTENT.addClass('cssOTIE-EventContent');
      if (bull) {
        var BULL = $('#jsOrdnungLineBull-'+bull);
        var fromID = 'jsOrdnungEventBull-'+base;
        var toID = 'xypoint-line-'+bull;     
      
        BULL.addClass('cssOTIE-timebull');

        createCanvasLayer();
        canvasingEvents();        
        drawCanvasHoverLine(fromID, toID);
      }
      
      if ( eve == 'mouseleave' ) {
        EVENT_CONTENT.removeClass('cssOTIE-EventContent');
        if (bull) {
          BULL.removeClass('cssOTIE-timebull');
          createCanvasLayer();
          canvasingEvents();           
        }
      }
    }
  </script>
  
  
  <script src="js/kirkwood.js"></script>
  
  
</body>
</html>
