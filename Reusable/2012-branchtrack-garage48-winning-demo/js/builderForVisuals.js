var visualAssetsObject = { 'assets' : [
	{'name' : 'back', 'path':'back/', 'files':['back0.png','back1.png','airport.jpg','tropicana.jpg']}, 
	{'name' : 'front', 'path':'front/', 'files' : ['front0.png','front1.png','empty.png']},
	{'name' : 'char', 'path':'char/', 'files' : ['char1.png','char0.png', 'char2.png', 'businessperson1.png', 'bikini.png']}
	]
}

function builderOnLoadInitialization() 
{
	
  buildPalette()
	updatePreview(0, 0)
	updatePreview(1, 0)
	updatePreview(2, 0)

  $("select").change(function() {
		var i = visualAssetsObject.assets.length;
			while( i-- ) {
				if( visualAssetsObject.assets[i].name === this.name ) break;
			}
		updatePreview(i, this.selectedIndex);
	});
	
	$(".palette-component").click(function() {
		updatePreview($(this).attr('id').split('.')[0], $(this).attr('id').split('.')[1]);
	});
}


function buildPalette() 
{
	var i = visualAssetsObject.assets.length;
			for (var i = 0; i < visualAssetsObject.assets.length; i++) {
				var butt = '<div class="palette-section" id='+ visualAssetsObject.assets[i].name +'></div>'
				$('div#palette').append(butt)
				var j = visualAssetsObject.assets[i].files.length
				var $sel = $('div.palette-section[id="'+ visualAssetsObject.assets[i].name +'"]')
				for (var j = 0; j < visualAssetsObject.assets[i].files.length; j++) {
					var opt = '<div style="background-image:url('+ visualAssetsObject.assets[i].path + visualAssetsObject.assets[i].files[j] +')" class="palette-component" id='+ i+'.'+j +'>'+'</div>'
					$sel.append(opt)
				}
			}
}


function updatePreview(assetNum, fileNum) 
{ 
	var imageUrl = visualAssetsObject.assets[assetNum].path + visualAssetsObject.assets[assetNum].files[fileNum];
	$('.preview-component#'+visualAssetsObject.assets[assetNum].name).css('background-image', 'url(' + imageUrl + ')');
  storeDecorationData(visualAssetsObject.assets[assetNum].name, imageUrl);
}

