<section class="byColMaman byMamanColor-orderform">

  <div class="byCol-30">
    
    <?include('ordnung/orderform-menu.php');?>
    
  </div>


  <div class="byCol-40">
  
    
    
    
    
      <!-- ------------------------------------------- -->
      <blockquote class="emuBlock emuOrderformSummary">      
        <div class="jsOrderformContent jsOrderformContent-summary">
          <div class="byColContent">
            <header class="byColHeader byColHeader-orderformerspecial">
              <h2>
                <span>Order in result</span>
              </h2>
            </header>
            <div class="byColContentContent">
              <?include('ordnung/orderform-c-initial.php');?>
            </div>
          </div>
        </div>
      </blockquote>  
      <!-- ------------------------------------------- -->   

        
      
      
      <!-- ------------------------------------------- -->
      <blockquote class="emuBlock emuOrderformInitial" id="">
        <div class="jsOrderformContent jsOrderformContent-initial">        
          <div class="byColContent">
            <header class="byColHeader byColHeader-orderformerspecial">
              <h2>
                <span>Initial submit</span>
              </h2>
            </header>
            <div class="byColContentContent">
              <?include('ordnung/orderform-c-initial.php');?>
            </div>
          </div>
        </div>      
      </blockquote>  
      <!-- ------------------------------------------- -->      
      
      
      <!-- ------------------------------------------- -->
        <div class="jsOrderformContent jsOrderformContent-resubmit">        
          <div class="byColContent">
            <header class="byColHeader byColHeader-orderformerspecial">
              <h2>
                <span>Resubmit</span>
              </h2>
            </header>
            <div class="byColContentContent">

              <div class="ratnarai-fieldset">
                <div class="row">
                  <div class="col-xs-3 ratnarai-label">
                    <label>Order updated</label>
                  </div>
                  <div class="col-xs-9 ratnarai-field">
                    <p>
                      <b class="sumlabel-subject">42 files uploaded by client</b>
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>      
      <!-- ------------------------------------------- -->            
      
      
   
   
   
   
  </div> 

  
    <div class="byCol-30">
    
    
      <!-- ------------------------------------------- -->
      <blockquote class="emuBlock emuOrderformInitial" id="">
        <div class="jsOrderformContent jsOrderformContent-summary">
          <div class="byColContent">
            <header class="byColHeader byColHeader-orderformerspecial">
              <small>&nbsp;</small>
            </header>
            <div class="byColContentContent">
              <?include('ordnung/orderform-s-initial.php');?> 
            </div>
          </div>
        </div>     
      </blockquote>  
      <!-- ------------------------------------------- -->    

      

    
      <!-- ------------------------------------------- -->
      <blockquote class="emuBlock emuOrderformInitial" id="">
        <div class="jsOrderformContent jsOrderformContent-initial">
          <div class="byColContent">
            <header class="byColHeader byColHeader-orderformerspecial">
              <small>from BESTESSAYS.COM<br>
                FEB 2, 2016 &nbsp; 11:11</small>
            </header>
            <div class="byColContentContent">
              <?include('ordnung/orderform-s-initial.php');?> 
            </div>
          </div>
        </div>     
      </blockquote>  
      <!-- ------------------------------------------- -->    
      
      
   
      
      
      <!-- ------------------------------------------- -->
      <blockquote class="emuBlock emuOrderformInitial" id="">
        <div class="jsOrderformContent jsOrderformContent-resubmit">
          <div class="byColContent">
            <header class="byColHeader byColHeader-orderformerspecial">
              <small>by client<br>
                FEB 6, 2016 &nbsp; 15:45</small>
            </header>
            <div class="byColContentContent">
              
              <div class="ratnarai-fieldset">
                <div class="col-xs-3 ratnarai-label">
                  <label>Uploaded files</label>
                </div>  
                
                <div style="padding-left:0px;font-size:12px;">
                  <div class="color-hoverable" style="clear:both;">
                    <span class="akcent akcent-norm" style="float:right;">[text]</span>
                    <span class="akcent akcent-norm">zumba.docx</span>
                  </div>
                  <div class="color-hoverable" style="clear:both;">
                    <span class="akcent akcent-norm" style="float:right;">[image]</span>
                    <span class="akcent akcent-norm">zumba001.JPEG </span>
                  </div>
                  <div class="color-hoverable" style="clear:both;">
                    <span class="akcent akcent-norm" style="float:right;">[unknown]</span>
                    <span class="akcent akcent-norm">zumba002.XZN</span>
                  </div>                  
                  
                  <?
                    for ( $t = 1; $t < 40; $t++ ) {
                      ?>
                        <div class="color-hoverable" style="clear:both;">
                          <span class="akcent akcent-norm" style="float:right;">[image]</span>
                          <span class="akcent akcent-norm">baranko<?=$t?>.bmp</span>
                        </div>                       
                      <?
                    }
                  ?>
                  
                  
                </div> 
                

          
            </div>
          </div>
        </div>     
      </blockquote>  
      <!-- ------------------------------------------- -->         


<?/*      
      
      <div class="Orderform-OrderSummary" style="padding-left:0px;padding-right:20px;min-height:100vh;">
      

      
      
      <!-- ------------------------------------------- -->
      <blockquote class="emuBlock emuOrderformSummary">
        <div class="jsOrderformContent jsOrderformContent-summary">
          <header class="byColHeader">
            <h2><span>Order summary</span></h2>
          </header>
          
          <div style="font-size:14px; padding-left:40px;">

            
            <span class="dollar" style="float:right;">20</span>
            Cost per page<br>

            <span class="dollar" style="float:right;">200</span>
            × 10 page<br>
            <br>

            <span class="dollar" style="float:right;">17</span>
            1-page summary VAS<br>

            <span class="dollar" style="float:right;">38</span>
            Proofread by editor VAS<br>
            <br>

            <div  style="float:right;">- <span class="dollar">9</span></div>
            5% volume discount<br>

            <div  style="float:right;">- <span class="dollar">8</span></div>
            Discount code 5%<br>
            <br><br>

            <div style="border-top:1px solid #1E2730;">
            <div  style="float:right;"><span class="dollar">360</span></div>
            Total
            </div>

          </div>  
          <br><br>

          <header class="byColHeader">
            <h2><span>Uploaded files</span></h2>
          </header>            
          
          <div style="font-size:14px; padding-left:40px;">
            <small>— not suspected —</small><br>
          </div>            
              
        </div>      
      </blockquote>  
      <!-- ------------------------------------------- -->      
      
      <blockquote class="emuBlock">
        
        <header class="byColHeader">
          <h2><span>Order summary</span></h2>
        </header>      

    
        
  
        
        
        <div class="PaymentDetailsList" style="padding-left:40px;">
          <div>
            <span class="akcent akcent-item">zumba.docx<br>[text]</span>
            <span class="akcent akcent-item">zumba001.JPEG<br>[image]</span>
            <span class="akcent akcent-item">zumba002.XZN<br>[unknown]</span>
          </div>   

          <br>



          <br>

          <div>
            <span class="akcent akcent-danger">requested</span>
            <small class="plink">— WTF?</small>
          </div>                   
        </div>    
      
      
      </blockquote>
        
      
      </div>
      
      */?>
   
   
   
   
    </div>
  
</section>

