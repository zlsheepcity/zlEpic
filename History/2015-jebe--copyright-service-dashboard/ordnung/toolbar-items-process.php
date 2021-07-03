      
        <header class="OrdnungToolbarItem-Header">
          <span class="OrdnungToolbarItem-Link navLink navLink-process jsProcessLink" data-goto="process" data-process="general">
            <span>writing process</span>
          </span>
        </header>
        
        <div class="OrdnungToolbarItem-Details">
          
          <div class="OrdnungToolbarItem-Status">          
            <span class="akcent akcent-{{props.processStatus.type}} display-{{props.processStatus.active}} akcent-link navLink akcent-droper" data-goto="process">
            
              {{props.processStatus.label}}
              
              
              <div class="show-if-{{props.processStatus.detailsDanger}}">
                <div class="akcent-droper-content">
                  <b>2 tasks has no writers assigned</b><br>
                  <ul>
                    <li> <span class="plink">find writer »</span></li>
                  </ul>
                </div>
              </div>                
              
              <div class="show-if-{{props.processStatus.detailsProblem}}">
                <div class="akcent-droper-content">
                  <b>requested more data from a client</b><br>
                  <ul>
                    <li> <span class="plink">view description »</span></li>
                  </ul>
                </div>
              </div>                              

              
            </span>
            

              
          </div>
          
          <ul class="OrdnungToolbarItem-Events">

            
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.writingResult2.active}}">
              <div class="OrdnungToolbarItem-EventContent navLink jsProcessLink jsOTIE-tirgger" 
                   id="jsOTIE-EventContent-writingResult2" 
                   data-otie="writingResult2" data-goto="process" data-process="general">
                <div class="bulka connected-{{events.writingResult2.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-writingResult2"></div>
                  <div class="bull"></div>
                </div>
                <span>result sent</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.writingResult1.active}}">
              <div class="OrdnungToolbarItem-EventContent navLink jsProcessLink jsOTIE-tirgger" 
                   id="jsOTIE-EventContent-writingResult1" 
                   data-otie="writingResult1" data-goto="process" data-process="general">
                <div class="bulka connected-{{events.writingResult1.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-writingResult1"></div>
                  <div class="bull"></div>
                </div>
                <span class="color-bad display-{{events.writingResult1.unsolved}}">stopped</span>
                <span class="display-{{events.writingResult1.solved}}"  >problem solved</span>                
              </div>
            </li>
            <!-- ------------------------------------------ -->
            
            <!-- ------------------------------------------ -->
            <li class="OrdnungToolbarItem-Event display-{{events.writerFound.active}}">
              <div class="OrdnungToolbarItem-EventContent navLink jsProcessLink jsOTIE-tirgger" 
                   id="jsOTIE-EventContent-writerFound" 
                   data-otie="writerFound" data-goto="process" data-process="general">
                <div class="bulka connected-{{events.writerFound.bull}}">
                  <div class="xypoint" id="jsOrdnungEventBull-writerFound"></div>
                  <div class="bull"></div>
                </div>
              <span class="color-bad display-{{events.writerFound.isNotFound}}">no writer</span>
              <span class="display-{{events.writerFound.isFound}}"  >writer is found</span>
              <span class="display-{{events.writerFound.isNew}}"  >new writer</span>
              </div>
            </li>
            <!-- ------------------------------------------ -->

          </ul>
          
        </div>
        