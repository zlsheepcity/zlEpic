      
        <header class="OrdnungToolbarItem-Header">
          <?/*<a href="#" class="navLink navLink-result" data-goto="result"><span>writing result</span></a>*/?>
          <span class="OrdnungToolbarItem-Link navLink navLink-client" data-goto="client"><span>client</span></span>
        </header>
        
        <div class="OrdnungToolbarItem-Details">
          
          <div class="OrdnungToolbarItem-Status">          
            <span class="akcent akcent-{{props.clientStatus.type}} display-{{props.clientStatus.active}} akcent-link navLink akcent-droper" data-goto="client">
            
              {{props.clientStatus.label}}
              
              <div class="show-if-{{props.clientStatus.detailsDanger}}">
                <div class="akcent-droper-content">
                  <b>We have never talk with this guy</b><br>
                  <ul>
                    <li> <span class="plink">client profile »</span></li>
                  </ul>
                </div>
              </div>   
              
              <div class="show-if-{{props.clientStatus.detailsApruving}}">
                <div class="akcent-droper-content">
                  <b>Result is ready for aproove</b><br>
                  <ul>
                    <li> <span class="plink">connection center »</span></li>
                  </ul>
                </div>
              </div>                 
              
            </span>
          </div>
          
          <ul class="OrdnungToolbarItem-Events">
          
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.resultAccepted.active}}">
              <div class="OrdnungToolbarItem-EventContent jsOTIE-tirgger" id="jsOTIE-EventContent-resultAccepted" data-otie="resultAccepted">
                <div class="bulka connected-{{events.resultAccepted.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-resultAccepted"></div>
                  <div class="bull"></div>
                </div>
                <span class="color-good">accepted</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->
          
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.resultRejected.active}}">
              <div class="OrdnungToolbarItem-EventContent jsOTIE-tirgger" id="jsOTIE-EventContent-resultRejected" data-otie="resultRejected">
                <div class="bulka connected-{{events.resultRejected.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-resultRejected"></div>
                  <div class="bull"></div>
                </div>
                <span class="color-bad">rejected</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->           
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.resultInformed.active}}">
              <div class="OrdnungToolbarItem-EventContent jsOTIE-tirgger" id="jsOTIE-EventContent-resultInformed" data-otie="resultInformed">
                <div class="bulka connected-{{events.resultInformed.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-resultInformed"></div>
                  <div class="bull"></div>
                </div>
                <span class="color-good">informed</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->               
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.deadlineClock.active}}">
              <div class="OrdnungToolbarItem-EventContent jsOTIE-tirgger" id="jsOTIE-EventContent-deadlineClock" data-otie="deadlineClock">
                <div class="bulka connected-{{events.deadlineClock.bull}} color-deadline">
                  <div class="xypoint" id="jsOrdnungEventBull-deadlineClock"></div>
                  <div class="bull"></div>
                </div>
                <small>deadline:</small><br>
                <span class="color-data show-if-{{events.deadlineClock.normal}}">
                  {{events.deadlineClock.deathtimeDays}} {{events.deadlineClock.deathtimeHours}}
                </span>
                <span class="akcent akcent-danger show-ifnot-{{events.deadlineClock.normal}}" style="padding-left:8px;padding-right:8px;">
                  {{events.deadlineClock.deathtimeDays}} {{events.deadlineClock.deathtimeHours}}
                </span>
              </div>
            </li>
            <!-- ------------------------------------------ --> 
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarNextOrder display-{{events.nextOrder.active}}">
                <div class="bulka connected-{{events.nextOrder.bull}} color-order">
                  <div class="xypoint" id="jsOrdnungEventBull-nextOrder"></div>
                  <div class="bull"></div>
                </div>            
              <div class="OrdnungToolbarNextOrder-content">
                <span class="plink">next order</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->              
       

          </ul>
          
        </div>
        