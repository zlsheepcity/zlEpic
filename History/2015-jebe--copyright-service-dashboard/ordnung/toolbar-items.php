      
      
      <div class="OrdnungToolbarItem color-order" style="min-width:0%; right:0; position:absolute;">
      
        <header class="OrdnungToolbarItem-Header">
          <span class="OrdnungToolbarItem-Link navLink navLink-events" data-goto="events"><span>events</span></span>
        </header>
        
      </div>      
      
      
      <div class="OrdnungToolbarItem color-order" style="min-width:13%;">
      
        <header class="OrdnungToolbarItem-Header">
          <span class="OrdnungToolbarItem-Link navLink navLink-overview" data-goto="overview"><span>overview</span></span>
        </header>
        
        <div class="OrdnungToolbarItem-Details">
        
          <div class="OrdnungToolbarItem-GlobalStatus">
            <div class="label">order status</div>
            <div class="status">
              <span class="color-{{props.orderStatus.type}}">{{props.orderStatus.label}}</span>
            </div>
          </div>
          
          
        </div>
        
      </div>
      
      <div class="OrdnungToolbarItem color-order">
      
        <header class="OrdnungToolbarItem-Header">
          <span class="OrdnungToolbarItem-Link navLink navLink-orderform jsOrderformLink" data-goto="orderform"  data-orderform="summary"><span>order form</span></span>
        </header>
        
        <div class="OrdnungToolbarItem-Details">
          
          <div class="OrdnungToolbarItem-Status">          
            <span class="akcent akcent-{{props.orderformStatus.type}} display-{{props.orderformStatus.active}} akcent-link navLink jsOrderformLink" data-goto="orderform" data-orderform="{{props.orderformStatus.orderform}}">
              {{props.orderformStatus.label}}
            </span>
          </div>
        
          
          <ul class="OrdnungToolbarItem-Events">
          
          
                
          
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.orderCreated.active}}">            
              <div class="OrdnungToolbarItem-EventContent">
                <div class="bulka connected-{{events.orderCreated.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-orderCreated"></div>
                  <div class="bull"></div>
                </div>
                <span>submit</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->    
                         

            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.orderLifetime.active}}">            
              <div class="OrdnungToolbarItem-EventContent jsOTIE-tirgger" id="jsOTIE-EventContent-orderLifetime" data-otie="orderLifetime">
                <div class="bulka connected-{{events.orderLifetime.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-orderLifetime"></div>
                  <div class="bull"></div>
                </div>
                <small>lifetime:</small><br>
                <span class="color-data">{{events.orderLifetime.lifetime}}</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->                
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.orderUpdated.active}}">            
              <div class="OrdnungToolbarItem-EventContent navLink jsOrderformLink jsOTIE-tirgger" 
                   id="jsOTIE-EventContent-orderUpdated" 
                   data-otie="orderUpdated" data-goto="orderform" data-orderform="resubmit">
                <div class="bulka connected-{{events.orderUpdated.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-orderUpdated"></div>
                  <div class="bull"></div>
                </div>
                <span>resubmit</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->                
            
          </ul>
          
        </div>
        
      </div>
      
      <div class="OrdnungToolbarItem color-payment">
        <?include('ordnung/toolbar-items-payment.php');?>
      </div>

      
      <div class="OrdnungToolbarItem color-payment">
        <?include('ordnung/toolbar-items-vas.php');?>
      </div>

      
      <div class="OrdnungToolbarItem color-process">
        <?include('ordnung/toolbar-items-process.php');?>
      </div>
      
      
      
      <div class="OrdnungToolbarItem color-process">
        <?include('ordnung/toolbar-items-client.php');?>
      </div>      

      