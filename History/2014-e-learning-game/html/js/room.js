var Q =
{
  WRAP:         $('.WRAP'),
  RoomItems:    $('.RoomItems'),
  RoomShopping: $('.RoomShopping'),
  Balance:      $('.js-balance'),
  ItemTooltip:  $('.ItemTooltip'),
  WarningOfHousewarming: $('#WarningOfHousewarming'),
  WelcomeScreen: $('#WelcomeScreen'),
  ShopButton:	$('.ShopButton'),
  
  DB:
  {
    items: $('.DB-loadedItems > i').length > 0 ? $('.DB-loadedItems > i') : $('.DB-loadedItems-withoutServer > i'),
    balance:  $('.DB-loadedBalance')
  },
  settings:
  {
    imagesForItemsPath: 'html/items/',
    useWebTutor:true
  }
}

var TheGame =
{
  balance:0,
  nowIsFirstBuyStage:true,
  shopMode:false  
}

///////////////////////////////////////////////////////////////////////

$(document).ready(function(){
  
  if ( $('.DB-serverIsEnabled').attr('status') == 'true' ) Q.settings.useWebTutor = true;
  else                                                     Q.settings.useWebTutor = false;
  
  db__updateNameTable();
  db__loadPurchasedItems();
  db__loadBalance();
  room_init();
  
  // events
  $('.js-shopMode').click(room__switchShopMode);

});

function room_init()
{
  TheGame.nowIsFirstBuyStage = checkFirstBuyStage();
  room__displayBalance();
  room__showItems();  
  
  if ( window.location.hash && window.location.hash.substring(1) == 'fback') { /* do nothing */ }
  else if (TheGame.nowIsFirstBuyStage) Q.WarningOfHousewarming.bPopup();
  else								   Q.WelcomeScreen.bPopup();
}

function checkFirstBuyStage()
{
/*
  for ( var i in TheItemsList ) if ( TheItemData[TheItemsList[i]].firstBuy && TheItemData[TheItemsList[i]].purchased ) return false;  
  return true;
*/  

  for ( var i in TheItemsList )
  {
	var itemData    = TheItemData[TheItemsList[i]];
	if ( itemData.firstBuy && !itemData.purchased ) return true;
  }
  return false;

}

///////////////////////////////////////////////////////////////////////

function room__switchShopMode()
{
  if ( TheGame.shopMode ) room__setShopMode(false);
  else                    room__setShopMode(true);
  zl__clearAnyTextSelection();
  return false;
}

function room__setShopMode(turnOn)
{
  if (turnOn)
  {
    TheGame.shopMode = true;
    Q.WRAP.addClass('shopMode');
    room__showShopping();
	Q.ShopButton.addClass('currentIsShop');
  }
  else
  {
    TheGame.shopMode = false;
    Q.WRAP.removeClass('shopMode');
    room__hideShopping();
    room__showItems();
	Q.ShopButton.removeClass('currentIsShop');
  }
}

function room__hideShopping()
{
  Q.RoomShopping.empty();
}

function room__showShopping()
{
  room__hideShopping();
  room__hideItemTooltip(false);
  
  var itemData, itemid;
  for ( var i in TheItemsList )
  {
    itemid      = TheItemsList[i];
    itemData    = TheItemData[itemid];
    itemStatus  = room__getItemStatus(itemid);
    if ( itemStatus && itemStatus.showInShop ) room__displayPurchaseButton(itemid);
  }
  Q.RoomItems.children('div').unbind('mouseenter').unbind('mouseleave');
}

function room__showItems()
{
  Q.RoomItems.empty();
  
  var itemData, itemid;
  for ( var i in TheItemsList )
  {
    itemid      = TheItemsList[i];
    itemData    = TheItemData[itemid];
    itemStatus  = room__getItemStatus(itemid);
    if ( itemStatus && itemStatus.showInRoom ) room__displayItem(itemid); //itemStatus && itemStatus.showInRoom
  }
}

function room__getItemStatus( itemid )
{
  var result = 
  {
    showInRoom:       false,
    showInShop:       false,
    moneyProblem:     false
  };
  var itemData = TheItemData[itemid];
  var childItemData, parentItemData;
  
  if ( !itemData ) return false; 
  
  // set showInRoom
  if ( itemData.purchased ) result.showInRoom = true;
  if ( itemData.replace )
  {
    childItemData = TheItemData[itemData.replace];
    if ( childItemData && childItemData.purchased ) result.showInRoom = false;
  }
  
  // set showInShop
  if (TheGame.nowIsFirstBuyStage)
  {
	if ( !itemData.purchased && itemData.firstBuy ) result.showInShop = true;
  }
  else
  {
	  if ( !itemData.purchased ) result.showInShop = true;
	  if ( itemData.parent )
	  {
		parentItemData = TheItemData[itemData.parent];
		if ( parentItemData && !parentItemData.purchased ) result.showInShop = false;
	  }
  }
  
  // set moneyProblem
  if ( itemData.price * 1 > TheGame.balance ) result.moneyProblem = true;
  
  return result;
}


function room__displayBalance()
{
  Q.Balance.html(TheGame.balance);
}

function room__displayItem(itemid)
{
  var itemData  = TheItemData[itemid];
  var ITEM      = $('<div>');
  var IMG       = $('<img>');
  IMG.attr('src',   Q.settings.imagesForItemsPath + itemData.img);
  IMG.attr('alt',   itemData.caption);
  IMG.appendTo(ITEM);
  ITEM.attr('id','ItemInRoom-'+itemid);
  ITEM.attr('itemid',itemid);
  ITEM.css('top',itemData.y);
  ITEM.css('left',itemData.x);
  ITEM.css('z-index',100 + itemData.z);
  ITEM.mouseenter(room__showItemTooltip);
  ITEM.mouseleave(room__hideItemTooltip);
  ITEM.appendTo(Q.RoomItems);
}

function room__showItemTooltip(e)
{
  var itemid = $(e.currentTarget).attr('itemid');
  var itemData = TheItemData[itemid];
  var TOOLTIP_CONTENT = $('<div>');
  var TOOLTIP_IMG     = $('<img>');
  TOOLTIP_CONTENT.html('<b>'+itemData.caption+'</b><br>'+itemData.description);
  TOOLTIP_IMG.attr('src',Q.settings.imagesForItemsPath + itemData.img);
  TOOLTIP_IMG.attr('alt',   itemData.caption);
  if ( itemData.tooltipOnTop ) 	Q.ItemTooltip.addClass('tooltipOnTop');	
  Q.ItemTooltip.empty();
  Q.ItemTooltip.append(TOOLTIP_IMG).append(TOOLTIP_CONTENT);
  Q.ItemTooltip.show();
}

function room__hideItemTooltip(e)
{
  Q.ItemTooltip.empty();
  Q.ItemTooltip.hide();
  Q.ItemTooltip.removeClass('tooltipOnTop');
}

function room__displayPurchaseButton(itemid)
{
  var itemData    = TheItemData[itemid];
  var itemStatus  = room__getItemStatus(itemid);
  var PURCHASE    = $('<div>');
  
  PURCHASE.addClass('PurchaseButton');
  PURCHASE.attr('itemid', itemid );
  PURCHASE.css({
    top:        itemData.y,
    left:       itemData.x,
    zIndex:     itemData.z + 200
  });
  if (itemData.button) PURCHASE.css({
    marginTop:  itemData.button.y,
    marginLeft: itemData.button.x
  });
  PURCHASE.html(itemData.price+",-");
  PURCHASE.mouseenter(room__showItemTooltip);
  PURCHASE.mouseleave(room__hideItemTooltip);
  if ( itemStatus && !itemStatus.moneyProblem ) PURCHASE.click(shopping__purchaseButtonClick);
  else                                          PURCHASE.addClass('nomoneynochears');
  PURCHASE.appendTo(Q.RoomShopping);
}

///////////////////////////////////////////////////////////////////////

function shopping__purchaseButtonClick(e)
{
  var itemid = $(e.currentTarget).attr('itemid');
  shopping__purchaseItem(itemid);
  zl__clearAnyTextSelection();
}

function shopping__purchaseItem(itemid)
{
  
  if ( !Q.settings.useWebTutor )
  {
    TheItemData[itemid].purchased = true;
    TheGame.balance -= TheItemData[itemid].price;
	TheGame.nowIsFirstBuyStage = checkFirstBuyStage();
    
    room__displayBalance();
    room__showItems();
    room__showShopping();
  }
  else
  {
	var code 	= TheItemData[itemid].dbCode;
	var price 	= TheItemData[itemid].price;
	window.location.href='html/db/f_purchase.html?i='+code+'&p='+price+'&n=roomservice';
  }
  
}

///////////////////////////////////////////////////////////////////////

function db__loadPurchasedItems()
{  
  Q.DB.items.each(function(){
    var itemidNT = $(this).attr('itemid');
	var itemid = TheItemsListNameTable[itemidNT].name;
    if( TheItemData[itemid] && jQuery.inArray(itemid,TheItemsList) >= 0 ) TheItemData[itemid].purchased = true;
  });
}
function db__loadBalance()
{
  TheGame.balance = zl__parseIntOrZero( Q.DB.balance.attr('balance') );
  if (!Q.settings.useWebTutor) TheGame.balance = 490;
}
function db__updateNameTable()
{
	for ( var i in TheItemsListNameTable ) TheItemData[TheItemsListNameTable[i].name].dbCode = TheItemsListNameTable[i].code;
}