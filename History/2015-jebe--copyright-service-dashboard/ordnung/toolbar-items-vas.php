 
        <header class="OrdnungToolbarItem-Header">
          <span class="OrdnungToolbarItem-Link navLink navLink-vas" data-goto="vas"><span>vas offers</span></span>
        </header>
        
        <div class="OrdnungToolbarItem-Details">
          
          <div class="OrdnungToolbarItem-Status">
            <span class="akcent akcent-{{props.vasStatus.type}} display-{{props.vasStatus.active}} akcent-link navLink akcent-droper" data-goto="vas">
            
              {{props.vasStatus.label}}
              
              <div class="show-if-{{props.vasStatus.detailsDanger}}">
                <div class="akcent-droper-content">
                  <b>3 VAS available to sell</b><br>
                  <ul>
                    <li> <span class="plink">go to sell »</span></li>
                  </ul>
                </div>
              </div>            

              
              
               <?/*
              <div class="akcent-popover">              
                <div class="akcent-popover-inner">
                  <span class="akcent akcent-{{props.vasStatus.type}} display-{{props.vasStatus.active}}">
                    {{props.vasStatus.label}}
                  </span>
                </div>
                
               
                <div class="akcent-popover-content">
                  <b>3 VAS available to sell</b><br>
                  <ul>
                    <li> 1-page summary</li>
                    <li> Official plagiarism report</li>
                    <li> VIP support</li>
                    <li> <span class="plink">go to sell »</span></li>
                  </ul>
                  

                </div>
              </div>              
              */?>
              
            </span>
          </div>
          
          <ul class="OrdnungToolbarItem-Events">
          
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.vasOffered.active}}">
              <div class="OrdnungToolbarItem-EventContent jsOTIE-tirgger" id="jsOTIE-EventContent-vasOffered" data-otie="vasOffered">
                <div class="bulka connected-{{events.vasOffered.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-vasOffered"></div>
                  <div class="bull"></div>
                </div>
                <span class="display-{{events.vasOffered.rejected}}">rejected</span>
                <span class="display-{{events.vasOffered.accepted}}">accepted</span>
                <span class="display-{{events.vasOffered.offered}}">offered</span>
                <span class="display-{{events.vasOffered.neveroffered}}">never offered</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->

          </ul>
          
        </div>