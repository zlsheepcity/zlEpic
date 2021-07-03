function resizeCanvas() {
  var ctx = document.getElementById('mainWorkCanvas').getContext('2d');
  ctx.canvas.width  = $('#mainWorkArea').width();
  ctx.canvas.height = 500;
}

function canvas_drawConnector(StartScreenNum, EndScreenNum, LinkNum) {
	/*
  var pStart = $('#ScreenIcon-'+StartScreenNum).position();
	var pEnd = $('#ScreenIcon-'+EndScreenNum).position();
	var wStart = $('#ScreenIcon-'+StartScreenNum).width();
	var wEnd = $('#ScreenIcon-'+EndScreenNum).width();
	var hStart = $('#ScreenIcon-'+StartScreenNum).height();
	var hEnd = $('#ScreenIcon-'+EndScreenNum).height();
  */
  var pStart = {
    top: listOfScreens.screensByNumber[StartScreenNum].position.y, 
    left: listOfScreens.screensByNumber[StartScreenNum].position.x
  };
	var pEnd = {
    top: listOfScreens.screensByNumber[EndScreenNum].position.y, 
    left: listOfScreens.screensByNumber[EndScreenNum].position.x
  };
	var wStart = 77;
	var wEnd = 77;
	var hStart = 77;
	var hEnd = 77;
  
	var fromX, fromY, toX, toY, arrowLen, rotate;
  
	
	fromX = pStart.left+wStart/2;
	fromY = pStart.top+hStart/2;
	toX = pEnd.left+wEnd/2;
	toY = pEnd.top+hEnd/2;
    
	// ACHTUNG !!!!!!!!!!!!! divide by zero about to happen!!!!!!!!!!!!
	var a = toX-fromX;
	var b = toY-fromY;

	
if (fromX<toX) {
	 //napravo
	 if (fromY<toY) {
		 //vniz
		 rotate = Math.round( Math.atan(b/a)/Math.PI*180 );
		} else {
		 //vverx
		 rotate = 360+Math.round( Math.atan(b/a)/Math.PI*180 );
		}
	} else {
	 //nalevo
		 if (fromY<toY) {
			 //vniz
			 rotate = 180+Math.round( Math.atan(b/a)/Math.PI*180 );
		} else {
			 //vverx
			 rotate = 180+Math.round( Math.atan(b/a)/Math.PI*180 );
		}
	}
	var gipot = Math.sqrt(a*a + b*b);
	var arrowDivID = "scr"+StartScreenNum+"link"+LinkNum;
	
	var $doesArrowExist = $('div#'+arrowDivID);
	if ($doesArrowExist) $doesArrowExist.remove();
	
	$('#arrowsUnderWorkArea').append('<div style="-webkit-transform-origin: 5px 5px; position:absolute;height:10px;width:'+gipot+'px; left:'+fromX+'px;top:'+fromY+'px;-webkit-transform: rotate('+rotate+'deg);" id="'+arrowDivID+'"></div>');
	$('div#'+arrowDivID).append('<canvas id="canvas'+arrowDivID+'" width="'+gipot+'" height="10px" style="position:absolute;top:0px;left:0px;"></canvas>');
	
	var ctx = document.getElementById('canvas'+arrowDivID).getContext('2d');	
		drawArrow(ctx, gipot-50);
}

function drawArrow(ctx,len) {
	var headlen = 9;   // length of arrow head in pixels
    ctx.strokeStyle = 'white';
	ctx.lineWidth = 2;
	ctx.moveTo(0, 5);
    ctx.lineTo(len, 5);
    ctx.lineTo(len-headlen*Math.cos(0-Math.PI/6),5-headlen*Math.sin(0-Math.PI/6));
    ctx.moveTo(len, 5);
    ctx.lineTo(len-headlen*Math.cos(0+Math.PI/6),5-headlen*Math.sin(0+Math.PI/6));
	ctx.stroke();
}

function canvas_deleteArrow( linkObj) {
console.log(linkObj);
	if (linkObj.linkedTo) $('div#scr'+linkObj.numberOfScreen+'link'+linkObj.number).remove();
}