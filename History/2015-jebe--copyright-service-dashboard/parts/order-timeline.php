<br>

<div id="OrderTimeline-Podstilka" class="OrderTimeline-Podstilka">

  <div id="OrderTimeline-Canvas" style="background:rgba(255,255,255,.0);">    
    <canvas id="OrderTimeline-CanvasLayer" width="" height=""></canvas>
  </div>
  
  <div class="OrderTimeline-Visuals">
  
    <div class="OrderTimeline-Events">
  

    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4>      
      
        order      
      
      </h4>      
      <ul class="color-order">
      



        
      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4 class="event-group-title">
      
        payments
      
      </h4>      
      <div class="event-group-status">
        <span class="color-bad">
          <small>waiting</small> <b>8</b> <small>hrs</small>
        </span>
      </div>
      <ul class="color-payment">
      
        <li class="event-group-item">
          <div class="event-group-item-content">
            <div class="bulka"><div class="xypoint"></div><div class="bull"></div></div>
            <span class="color-bad dollar">298</span>
          </div>
        </li>
        
        <li class="event-group-item">
          <div class="event-group-item-content">
            <div class="bulka"><div class="xypoint"></div><div class="bull"></div></div>
            <span class="color-good dollar">120</span>
          </div>
        </li>
        
        <li class="event-group-item">
          <div class="event-group-item-content">
            <div class="bulka"><div class="xypoint"></div><div class="bull"></div></div>
            <span>result rejected</span>
          </div>
        </li>
        

        

        


      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4>
      
        VAS
      
      </h4>      
      
      <div class="event-group-status">
        <span>
          nothing to offer
        </span>
      </div>
      
      <ul class="color-payment">
      


      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4>
      
        writing process
      
      </h4>      
      
      <div class="event-group-status">
        <span class="color-good">
          done
        </span>
      </div>
      
      <ul class="color-process">
      

        

        


      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4>
      
        client feedbacks
      
      </h4>      
      
      <div class="event-group-status">
        <span class="color-good">
          <br>
        </span>
      </div>
      
      <ul class="color-process">
      

        

      </ul>
    </div>
    <!-- ------------------------------------------ -->
  
  </div>

  
  </div>

</div>


 
<section id="OrderTimeline" class="OrderTimeline OrderTimeline-CanvasSkin" type="text/x-handlebars-template">



  <div class="OrderTimeline-Events">
  
    
    <div class="event-group">
      <h4>      
      
        order      
      
      </h4>      
      <ul class="color-order">
      

      
        <!-- ------------------------------------------ -->
        <li class="display-{{events.orderCreated.active}}"> 
          <div class="timebull display-{{events.orderCreated.bull}}" id="jsTimelineBullAlias-orderCreated"><span class="bull"></span></div>
          <span style="font-size:10px;line-height:12px;display:block;position:absolute;margin-top:-10px;">lifetime</span>
          <span>{{events.orderCreated.lifetime}}</span>
        </li>
        <!-- ------------------------------------------ -->


        
      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4 class="event-group-title">
      
        payments
      
      </h4>      
      <div class="event-group-status">
        <span class="color-bad">
          <small>waiting</small> <b>8</b> <small>hrs</small>
        </span>
      </div>
      <ul class="color-payment">
      
        <li class="event-group-item">
          <div class="event-group-item-content">
            <div class="bulka"><div class="xypoint"></div><div class="bull"></div></div>
            <span class="color-bad dollar">298</span>
          </div>
        </li>
        
        <li class="event-group-item">
          <div class="event-group-item-content">
            <div class="bulka"><div class="xypoint"></div><div class="bull"></div></div>
            <span class="color-good dollar">120</span>
          </div>
        </li>
        
        <li class="event-group-item">
          <div class="event-group-item-content">
            <div class="bulka"><div class="xypoint"></div><div class="bull"></div></div>
            <span>result rejected</span>
          </div>
        </li>
        
        <li><br><br><br></li>
      
      
        <!-- ------------------------------------------ -->
        <li class="display-{{events.vasPayment.active}}" id="jsTimelineBullAlias-vasPayment"> 
          <div class="timebull display-{{events.vasPayment.bull}}"><span class="bull"></span></div>
          <span class="color-bad  dollar display-{{events.vasPayment.unconfirmed}}">{{events.vasPayment.summ}}</span>
          <span class="color-good dollar display-{{events.vasPayment.confirmed}}"  >{{events.vasPayment.summ}}</span>
        </li>
        <!-- ------------------------------------------ -->
      
        <!-- ------------------------------------------ -->
        <li class="display-{{events.orderPayment.active}}" id="jsTimelineBullAlias-orderPayment"> 
          <div class="timebull display-{{events.orderPayment.bull}}"><span class="bull"></span></div>
          <span class="color-bad  dollar display-{{events.orderPayment.unconfirmed}}">{{events.orderPayment.summ}}</span>
          <span class="color-good dollar display-{{events.orderPayment.confirmed}}"  >{{events.orderPayment.summ}}</span>
        </li>
        <!-- ------------------------------------------ -->
        
        

        


      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4>
      
        VAS
      
      </h4>      
      
      <div class="event-group-status">
        <span>
          nothing to offer
        </span>
      </div>
      
      <ul class="color-payment">
      
        <!-- ------------------------------------------ -->
        <li class="display-{{events.vasOffered.active}}" id="jsTimelineBullAlias-vasOffered"> 
          <div class="timebull display-{{events.vasOffered.bull}}"><span class="bull"></span></div>
          <span class="color-bad  display-{{events.vasOffered.rejected}}">rejected</span>
          <span class="color-good display-{{events.vasOffered.accepted}}"  >accepted</span>
          <span class="display-{{events.vasOffered.offered}}"  >offered</span>
        </li>
        <!-- ------------------------------------------ -->

      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4>
      
        writing process
      
      </h4>      
      
      <div class="event-group-status">
        <span class="color-good">
          done
        </span>
      </div>
      
      <ul class="color-process">
      

        

        
        <!-- ------------------------------------------ -->
        <li class="display-{{events.writingResult1.active}}" id="jsTimelineBullAlias-writingResult2"> 
          <div class="timebull display-{{events.writingResult2.bull}}"><span class="bull"></span></div>
          <span>writing result</span>
        </li>
        <!-- ------------------------------------------ -->
        
        <!-- ------------------------------------------ -->
        <li class="display-{{events.writingResult1.active}}" id="jsTimelineBullAlias-writingResult1"> 
          <div class="timebull display-{{events.writingResult1.bull}}"><span class="bull"></span></div>
          <span>writing result</span>
        </li>
        <!-- ------------------------------------------ -->
        
        <!-- ------------------------------------------ -->
        <li class="display-{{events.writerFound.active}}" id="jsTimelineBullAlias-writerFound"> 
          <div class="timebull display-{{events.writerFound.bull}}"><span class="bull"></span></div>
          <span class="display-{{events.writerFound.isNotFound}}">writer is not found</span>
          <span class="color-good display-{{events.writerFound.isFound}}"  >writer is found</span>
        </li>
        <!-- ------------------------------------------ -->

      </ul>
    </div>
    <!-- ------------------------------------------ -->
    
    <!-- ------------------------------------------ -->
    <div class="event-group">
      <h4>
      
        client feedbacks
      
      </h4>      
      
      <div class="event-group-status">
        <span class="color-good">
          <br>
        </span>
      </div>
      
      <ul class="color-process">
      
        <!-- ------------------------------------------ -->
        <li class="display-{{events.resultAccepted.active}}" id="jsTimelineBullAlias-resultAccepted"> 
          <div class="timebull display-{{events.resultAccepted.bull}}"><span class="bull"></span></div>
          <span class="color-good">result accepted</span>
        </li>
        <!-- ------------------------------------------ -->
      
        <!-- ------------------------------------------ -->
        <li class="display-{{events.resultRejected.active}}" id="jsTimelineBullAlias-resultRejected"> 
          <div class="timebull display-{{events.resultRejected.bull}}"><span class="bull"></span></div>
          <span class="color-bad">result rejected</span>
        </li>
        <!-- ------------------------------------------ -->
        

      </ul>
    </div>
    <!-- ------------------------------------------ -->
  
  </div>
  
  <br><br>

  <div class="OrderTimeline-Line">
  
    <div class="future-symbol"><div></div></div>
    
    
    {{#each connections}}
      <div class="timebull timebull-call" style="left:{{position}}%;">
        <span class="cow"></span>
        <span class="datetime">
          <span class="date">jan {{date}}</span>
          <span class="time">{{time}}</span>
        </span>
      </div>
    {{/each}}
    
    
  <?
    $bulls = array(
    
      'resultAccepted',
      'resultRejected',
      'writingResult1',
      'writingResult2',
      'writerFound',
      'firstContact',
      'orderPaymentConfirmed',
      'orderDeadline',
      'orderCreated',
      'today'
    );
    $bullsLength = count($bulls);
    for($x = 0; $x < $bullsLength; $x++) 
    {?>    
      <div id="jsOrderLineBull-<?=$bulls[$x]?>" 
          class="timebull color-{{bulls.<?=$bulls[$x]?>.type}} {{bulls.<?=$bulls[$x]?>.keytime}} display-{{bulls.<?=$bulls[$x]?>.active}}" 
          style="left:{{bulls.<?=$bulls[$x]?>.position}}%;">
        <span class="bull"></span>
        <span class="datetime">
          <span class="date">jan {{bulls.<?=$bulls[$x]?>.date}}</span>
          <span class="time">{{bulls.<?=$bulls[$x]?>.time}}</span>
        </span>
        <span class="nodisplay oh-please-display-deadline-{{bulls.<?=$bulls[$x]?>.type}} deathtime">
          <b>{{bulls.<?=$bulls[$x]?>.deathtime}}</b>
        </span>
      </div>    
    <?}
  ?>
  

    
    <div ID="OrderTimelineMidnightSet">    
      <div class="midnight" style="left:10%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 8</span>
          <span class="time">00:00</span>
        </span>
      </div>      
      <div class="midnight" style="left:20%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 9</span>
          <span class="time">00:00</span>
        </span>
      </div>
      <div class="midnight" style="left:30%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 10</span>
          <span class="time">00:00</span>
        </span>
      </div>
      <div class="midnight" style="left:40%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 11</span>
          <span class="time">00:00</span>
        </span>
      </div>    
      <div class="midnight" style="left:50%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 12</span>
          <span class="time">00:00</span>
        </span>
      </div>      
      <div class="midnight" style="left:60%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 13</span>
          <span class="time">00:00</span>
        </span>
      </div>      
      <div class="midnight" style="left:70%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 14</span>
          <span class="time">00:00</span>
        </span>
      </div>
      <div class="midnight" style="left:80%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 15</span>
          <span class="time">00:00</span>
        </span>
      </div>
      <div class="midnight" style="left:90%;">
        <span class="riska"></span>
        <span class="datetime"> 
          <span class="date">jan 16</span>
          <span class="time">00:00</span>
        </span>
      </div>      
    </div>    
  </div>
  
</section>