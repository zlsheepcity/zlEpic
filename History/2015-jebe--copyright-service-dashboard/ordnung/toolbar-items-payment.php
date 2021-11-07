      
      
        <header class="OrdnungToolbarItem-Header">
          <span class="OrdnungToolbarItem-Link navLink navLink-payments jsPaimentsLink" data-goto="payments"  data-payment="none">
            <span>
              payments
              <!-- div class="byBullEye"></div -->
            </span>
          </span>
        </header>
        
        <div class="OrdnungToolbarItem-Details">
          
          <div class="OrdnungToolbarItem-Status">
          
          
          
          


          
            <span class="akcent akcent-{{props.paymentStatus.type}} display-{{props.paymentStatus.active}} akcent-link navLink {{props.paymentStatus.linked}} akcent-droper" data-goto="payments" data-payment="{{props.paymentStatus.payment}}">
              
              {{props.paymentStatus.label}}
              
              <div class="show-if-{{props.paymentStatus.detailsDanger}}">
                <div class="akcent-droper-content">
                    <b>Unconfirmed payment</b><br>
                    <ul>
                      <li> <span class="color- dollar">{{props.paymentStatus.summ}}</span></li>
                      <li> <span class="plink">view payment »</span></li>
                    </ul>
                </div>
              </div>
              
              <div class="show-if-{{props.paymentStatus.detailsConfirm}}">
                <div class="akcent-droper-content">
                    <b>Payment to writer needs your confirmation</b><br>
                    <ul>
                      <li> <span class="color- dollar">{{props.paymentStatus.summ}}</span></li>
                      <li> <span class="plink">lets go »</span></li>
                    </ul>
                </div>
              </div>              
              
            </span>

            
            
          </div>
          
          <ul class="OrdnungToolbarItem-Events">
          
          
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.writerPayment.active}}">
              <div  class="OrdnungToolbarItem-EventContent color-process navLink jsPaimentsLink jsOTIE-tirgger " 
                    id="jsOTIE-EventContent-writerPayment" 
                    data-otie="writerPayment" data-goto="payments" data-payment="writer">
                <div class="bulka connected-{{events.writerPayment.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-writerPayment"></div>
                  <div class="bull"></div>
                </div>
                <span class="color-bad  display-{{events.writerPayment.unconfirmed}}">- <span class="dollar">{{events.writerPayment.summ}}</span></span>
                <span class="color-good display-{{events.writerPayment.confirmed}}"  >- <span class="dollar">{{events.writerPayment.summ}}</span></span>
              </div>
            </li>
            <!-- ------------------------------------------ -->
            
          
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.vasPayment.active}}">
              <div class="OrdnungToolbarItem-EventContent navLink jsPaimentsLink jsOTIE-tirgger" 
                   id="jsOTIE-EventContent-vasPayment" 
                   data-otie="vasPayment" data-goto="payments" data-payment="vas">
                <div class="bulka connected-{{events.vasPayment.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-vasPayment"></div>
                  <div class="bull"></div>
                </div>
                <span class="color-bad  dollar display-{{events.vasPayment.unconfirmed}}">{{events.vasPayment.summ}}</span>
                <span class="color-good dollar display-{{events.vasPayment.confirmed}}"  >{{events.vasPayment.summ}}</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.orderPayment.active}}" >
              <div class="OrdnungToolbarItem-EventContent navLink navLink-payments {{events.orderPayment.linked}} jsOTIE-tirgger" data-goto="payments" data-payment="{{events.orderPayment.payment}}" id="jsOTIE-EventContent-orderPayment" data-otie="orderPayment">
                <div class="bulka connected-{{events.orderPayment.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-orderPayment"></div>
                  <div class="bull"></div>
                </div>
                <span class="color-bad  dollar display-{{events.orderPayment.unconfirmed}}">{{events.orderPayment.summ}}</span>
                <span class="color-good dollar display-{{events.orderPayment.confirmed}}"  >{{events.orderPayment.summ}}</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->            
            
          </ul>
          
        </div>
        

