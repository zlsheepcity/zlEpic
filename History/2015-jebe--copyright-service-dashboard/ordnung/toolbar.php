  
  <section id="jsOrdnungToolbar" class="OrdnungToolbar" type="text/x-handlebars-template">
  
    <div class="OrdnungToolbarItems">
    
      <?include('ordnung/toolbar-items.php');?>    
      
    </div>
    
    
    
    
    <div class="OrdnungTimeline">
      <div class="OrdnungTimeline-Line">
      
        <div class="future-symbol"><div></div></div>
        <div class="OrdnungTimeline-Riskas show-if-{{props.timelineRiskas.active}}">
          <?include('ordnung/toolbar-riskas.php');?>
        </div>  

           
             
        {{#each connections}}
          <div class="bulka contact display-{{active}}" style="left:{{position}}%;">
            <span class="cow"></span>
            <span class="datetime">
              <span class="date">feb {{date}}</span>
              <span class="time">{{time}}</span>
            </span>
          </div>
        {{/each}}  
     

  <?
    $bulls = array(
      
      'nextOrder',
      'writerChanged',
      'orderUpdated',
      'vasPaymentConfirmed',
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
        <div id="jsOrdnungLineBull-<?=$bulls[$x]?>"
          class="bulka event {{bulls.<?=$bulls[$x]?>.keytime}} display-{{bulls.<?=$bulls[$x]?>.active}} color-{{bulls.<?=$bulls[$x]?>.type}}" 
          style="left:{{bulls.<?=$bulls[$x]?>.position}}%;">
          <div class="xypoint" id="xypoint-line-<?=$bulls[$x]?>"></div>
          <div class="bull"></div>
          <span class="datetime display-{{bulls.<?=$bulls[$x]?>.showtime}}">
          <span class="date">feb {{bulls.<?=$bulls[$x]?>.date}}</span>
          <span class="time">{{bulls.<?=$bulls[$x]?>.time}}</span>
          </span>
          <span class="datetime show-if-{{bulls.<?=$bulls[$x]?>.today}}">
          <span class="date">Now</span>
          </span>
        </div>  
       
    <?}
  ?>
             
        <? /*
        TEMPLATE
        <div class="bulka event keytime" style="left:0;">
          <div class="xypoint" id="xypoint4"></div>
          <div class="bull"></div>
          <span class="datetime">
            <span class="date">jan 7</span>
            <span class="time">16:45</span>
          </span>
        </div>
        
        <div class="bulka event" style="left:82%;">
          <div class="xypoint" id="xypoint3"></div>
          <div class="bull"></div>
          <span class="datetime">
            <span class="date">jan 7</span>
            <span class="time">16:55</span>
          </span>
        </div>
        */ ?>
        
      </div>    
    </div>
    
    
    
    
    
  </section>
  
  <div id="jsOrdnungToolbarPlaceholder" class="OrdnungToolbarPlaceholder">
      <canvas id="jsOrdnungToolbarCanvas" width="" height=""></canvas>
      <canvas id="jsOrdnungToolbarHoverCanvas" width="" height=""></canvas>
  </div>
  
  <div class="OrdnungToolbarPlaceholder-withoutTimeline"></div>


