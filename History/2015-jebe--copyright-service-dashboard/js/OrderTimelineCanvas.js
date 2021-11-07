var TheCanvas = {

  canvas: false,
  context: false,
  
  hover: 
  {
    canvas: false,
    context: false
  },
  
  height: false,
  width: false,
  topOffset: false
  
}



/* ============================================================ */

$(function () {  

    // JEBE
    //createCanvasLayer();
    //canvasingEvents();

    

    //drawCanvasLine( 'xypoint1', 'xypoint4' );
    //drawCanvasHoverLine( 'xypoint2', 'xypoint4' );
}) 

function canvasingEvents() {
  $.each(TheOrderTimeline.events, function (index, ivent) {
    if ( ivent.active && ivent.bull != false ) {
      var fromID = 'jsOrdnungEventBull-'+index;
      var toID   = 'xypoint-line-'+ivent.bull;
      drawCanvasLine( fromID, toID );      
    } 
  });
}

/* ============================================================ */


function drawCanvasLine( fromID, toID, color ) {

  if (!color) color = '#1E1710';
  
  var point_from = $( '#' + fromID ).offset();
  var point_to   = $( '#' + toID   ).offset();
  
  TheCanvas.context.strokeStyle = color; 
  TheCanvas.context.beginPath();
  TheCanvas.context.moveTo( point_from.left, point_from.top - TheCanvas.topOffset );
  //TheCanvas.context.lineTo( point_to.left,   point_to.top - TheCanvas.topOffset );
  var curva = {
    ax: point_from.left - 60,
    ay: point_from.top - TheCanvas.topOffset + 80,
    bx: point_to.left,
    by: point_to.top - TheCanvas.topOffset - 40
  }
  TheCanvas.context.bezierCurveTo( curva.ax, curva.ay, curva.bx, curva.by, point_to.left, point_to.top - TheCanvas.topOffset);
  TheCanvas.context.stroke();   

}

function drawCanvasHoverLine( fromID, toID, color ) {

  if (!color) color = '#FFF';
  
  var point_from = $( '#' + fromID ).offset();
  var point_to   = $( '#' + toID   ).offset();
  
  TheCanvas.hover.context.strokeStyle = color; 
  TheCanvas.hover.context.lineWidth = 1;
  TheCanvas.hover.context.beginPath();
  TheCanvas.hover.context.moveTo( point_from.left, point_from.top - TheCanvas.topOffset );
  //TheCanvas.hover.context.lineTo( point_to.left,   point_to.top - TheCanvas.topOffset );
  var curva = {
    ax: point_from.left - 60,
    ay: point_from.top - TheCanvas.topOffset + 80,
    bx: point_to.left,
    by: point_to.top - TheCanvas.topOffset - 40
  }  
  TheCanvas.hover.context.bezierCurveTo( curva.ax, curva.ay, curva.bx, curva.by, point_to.left, point_to.top - TheCanvas.topOffset);
  TheCanvas.hover.context.stroke();   

}

function createCanvasLayer() {
  
  // get data
  TheCanvas.width = DOM.OrdnungToolbar.width();
  TheCanvas.height = DOM.OrdnungToolbar.height();
  var OffsetOfMama = DOM.OrdnungToolbar.offset();
  TheCanvas.topOffset =  OffsetOfMama.top + 36;
  
  // create layers  
  DOM.OrdnungToolbarPlaceholder.width(  TheCanvas.width );  
  DOM.OrdnungToolbarPlaceholder.height( TheCanvas.height );
  DOM.OrdnungToolbarCanvas.attr('width', TheCanvas.width );
  DOM.OrdnungToolbarCanvas.attr('height', TheCanvas.height );  
  DOM.OrdnungToolbarHoverCanvas.attr('width', TheCanvas.width );
  DOM.OrdnungToolbarHoverCanvas.attr('height', TheCanvas.height );   

  // create canvas
  TheCanvas.canvas = document.getElementById('jsOrdnungToolbarCanvas');
  TheCanvas.context = TheCanvas.canvas.getContext('2d');
  TheCanvas.hover.canvas = document.getElementById('jsOrdnungToolbarHoverCanvas');
  TheCanvas.hover.context = TheCanvas.canvas.getContext('2d');

}

  
