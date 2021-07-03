<!doctype html>
<html>
<head>
  <title>Current Order</title>
  <meta charset="utf-8" mapuping="ы">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
  
  <link rel="stylesheet" href="css/layout.css" media="all">
  <link rel="stylesheet" href="css/design.css" media="all">
  
  <link rel="stylesheet" href="css/elements.css" media="all">    
  <link rel="stylesheet" href="css/order-timeline.css" media="all">
  
</head>
<body>


<article class="CurrentOrder sideLogIsOpenNOOOO">

  <header>
    <h1 style="padding-left:70px;">Order BESS#1602.EF785</h1>
  </header>

  
  <nav id="OrderNav">
    <a href="#" class="goto" data-goto="overview">overview</a>
    <a href="#" class="goto" data-goto="orderform">order form</a>    
    <a href="#" class="goto" data-goto="payments" >payments</a>
    <a href="#" class="goto" data-goto="vas">vas</a>
    <a href="#" class="goto" data-goto="process" >writing process</a>
    <a href="#" class="goto" data-goto="log" >event log</a>
  </nav>
  
  
  <section id="OrderScreens">
  
    <section class="jsOrderScreen" data-goto="overview">
      <? include('parts/screenOverview.php'); ?>
    </section>
    <section class="jsOrderScreen" data-goto="orderform">orderform</section>
    <section class="jsOrderScreen" data-goto="payments">payments</section>
    <section class="jsOrderScreen" data-goto="vas">vas</section>
    <section class="jsOrderScreen" data-goto="process">process</section>
    <section class="jsOrderScreen" data-goto="log">log</section>
    
  </section>
  
  


  
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
  
  <script src="js/OrderNav.js"></script>
  <script src="js/OrderTimeline.js"></script>
  <script src="js/OrderTimelineCanvas.js"></script>
  
  
  
</body>
</html>