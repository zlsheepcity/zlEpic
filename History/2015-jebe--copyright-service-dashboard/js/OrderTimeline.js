var TheOrderTimeline = {

  props:
  {
    orderStatus: 
    {
      active: false,
      label: 'not exist',
      type: 'data'
    },  
    clientStatus: 
    {
      active: false,
      label: 'unconfirmed',
      type: 'danger'
    },      
    orderformStatus: 
    {
      active: false,
      label: 'submited',
      type: 'okay'
    },
    paymentStatus: 
    {
      active: false,
      linked: 'jsPaimentsLink',
      payment: 'initial',
      label: 'waiting 8 hrs',
      type: 'danger',
      detailsDanger: true
    },
    vasStatus: 
    {
      active: false,
      label: 'available',
      type: 'doit'
    },
    processStatus: 
    {
      active: false,
      label: 'in progress',
      type: 'none'
    },
    resultStatus: 
    {
      active: false,
      label: 'finished',
      type: 'okay'
    },
    timelineRiskas:
    {
      active: false
    }
  },

  bulls: {
    orderCreated:
    {
      label: 'order created',
      active: false,
      type: 'order',
      position: 0,
      date: 7,
      time: '14:43',
      keytime: 'keytime'
    },
    
    orderPaymentConfirmed:
    {
      label: 'order payment confirmed',
      active: false,
      type: 'payment',
      position: 4,
      date: 7,
      time: '16:43', 
      keytime: ''
    },
    
    vasPaymentConfirmed:
    {
      label: 'vas payment confirmed',
      active: false,
      type: 'payment',
      position: 40,
      date: 5,
      time: '16:43', 
      keytime: ''
    },    
        
    
    orderDeadline:
    {
      label: 'order deadline',
      active: false,
      type: 'deadline',
      deathtime:'11d 3h',
      position: 100,
      date: 27,
      time: '14:43',
      keytime: 'keytime'      
    },
    
    firstContact:
    {
      label: 'first contact',
      active: false,
      type: 'payment',
      position: 21,
      date: 9,
      time: '01:01',
      keytime: ''      
    },
    
    writerFound: 
    {
      label: 'writer is found',
      active: false,
      type: 'process',
      position: 6,
      date: 7,
      time: '17:15',
      keytime: ''
    },
    
    writingResult1:
    {
      label: 'writing result 1',
      active: false,
      type: 'process',
      position: 60,
      date: 13,
      time: '00:11',
      keytime: ''
    },    
    
    writingResult2:
    {
      label: 'writing result 2',
      active: false,
      type: 'process',
      position: 75,
      date: 14,
      time: '12:23',
      keytime: ''
    },   

    resultRejected:
    {
      label: 'writing result rejected',
      active: false,
      type: 'process',
      position: 65,
      date: 13,
      time: '12:23',
      keytime: ''
    },   

    resultAccepted:
    {
      label: 'writing result accepted',
      active: false,
      type: 'order',
      position: 76,
      date: 14,
      time: '12:45',
      keytime: ''
    },     
    
    today:
    {
      label: 'order deadline',
      active: true,
      type: 'today',
      position: 92,
      date: 16,
      time: '11:11',
      keytime: 'keytime',
      today: true,
      showtime: false
    } 
    
  
  },
  
  /* * ******************************************************************************** * */
  
  connections:
  [
    {
      active:false,
      position: 21,
      date: 9,
      time: '01:01'
    },
    {
      active:false,
      position: 25,
      date: 9,
      time: '12:15'    
    },
    {
      active:false,
      position: 65,
      date: 13,
      time: '12:23'    
    },
    {
      active:false,
      position: 76,
      date: 14,
      time: '12:45'    
    }
  ],
  
  /* * ******************************************************************************** * */
  
  events:
  {
    
    orderCreated:
    {
      active: false,
      bull: 'orderCreated',
      lifetime: '2 days 6 hrs'
    },
    
    orderLifetime:
    {
      active: false,
      bull: 'orderCreated',
      lifetime: '2 days 6 hrs'
    },    
    
    formResubmit:
    {
      active: false,
      bull: 'orderCreated'
    },    
    
    orderPayment:
    {
      active: false,
      linked: 'jsPaimentsLink',
      payment: 'initial',      
      bull: 'orderCreated',
      summ: 360,
      confirmed: false,
      unconfirmed: true
    },
    
    vasOffered:
    {
      active: false,
      bull: false,
      offered: false,
      accepted: false,
      rejected: false,
      neveroffered: true
    },
    
    vasPayment:
    {
      active: false,
      bull: 'firstContact',
      summ: 21,
      confirmed: false,
      unconfirmed: true
    },
    
    writerPayment:
    {
      active: false,
      bull: false,
      summ: 21
    },    
    
    writerFound:
    {
      active: false,
      bull: false,
      isFound: false,
      isNotFound: true
    },
    
    writingResult1:
    {
      active: false,
      bull: 'writingResult1',
    },
    
    writingResult2:
    {
      active: false,
      bull: 'writingResult2',
    },
    
    resultRejected:
    {
      active: false,
      bull: 'resultRejected',
    },

    resultAccepted:
    {
      active: false,
      bull: 'resultAccepted',
    },
    
    deadlineClock:
    {
      active: false,
      bull: 'orderDeadline',
      deathtimeDays:'11 days',
      deathtimeHours:'3 hrs'
    }    
    
  }

};



var TheHandlebars = {
  
  template: false,
  transformer: false,
  html: false
  
}


/* ============================================================ */

function initHandlebars() {
  TheHandlebars.template = DOM.OrdnungToolbar.html();
  TheHandlebars.transformer = Handlebars.compile( TheHandlebars.template );
}
function resetHandlebars() {
  DOM.OrdnungToolbar.html( TheHandlebars.transformer(TheOrderTimeline) );
}


/* ============================================================ */


$(function () {

  initHandlebars();
  resetHandlebars();
 

/*
  var barsOrderTimelineTemplate     = DOM.OrderTimeline.html();
  var barsOrderTimelineTransformer  = Handlebars.compile( barsOrderTimelineTemplate );
  var barsOrderTimelineHTML         = barsOrderTimelineTransformer(TheOrderTimeline);
  
  DOM.OrderTimeline.html(barsOrderTimelineHTML);
  
*/  
  
  /* PRESETS
  
  // confirm payment
  TheOrderTimeline.events.orderPayment.confirmed = true;
  TheOrderTimeline.events.orderPayment.unconfirmed = false;
  TheOrderTimeline.bulls.orderPaymentConfirmed.active = true;
  
  // accept vas
  TheOrderTimeline.events.vasOffered.accepted = true;
  TheOrderTimeline.events.vasOffered.offered = false;
  TheOrderTimeline.events.vasOffered.rejected = false;
  
  // found writer
  TheOrderTimeline.events.writerFound.bull = 'writerFound';
  TheOrderTimeline.events.writerFound.isFound = true;
  TheOrderTimeline.events.writerFound.isNotFound = false;

  
  DOM.OrderTimeline.html(barsOrderTimelineTransformer(TheOrderTimeline));
  
  */
  
  
  
  
});




var TheOrderTimelineZero = {

  props:
  {
    orderStatus: 
    {
      active: false,
      label: 'not exist',
      type: 'data'
    },  
    clientStatus: 
    {
      active: false,
      label: 'unconfirmed',
      type: 'danger'
    },      
    orderformStatus: 
    {
      active: false,
      label: 'submited',
      type: 'okay'
    },
    paymentStatus: 
    {
      active: false,
      linked: 'jsPaimentsLink',
      payment: 'initial',
      label: 'waiting 8 hrs',
      type: 'danger',
      detailsDanger: true
    },
    vasStatus: 
    {
      active: false,
      label: 'available',
      type: 'doit'
    },
    processStatus: 
    {
      active: false,
      label: 'in progress',
      type: 'none'
    },
    resultStatus: 
    {
      active: false,
      label: 'finished',
      type: 'okay'
    },
    timelineRiskas:
    {
      active: false
    }
  },

  bulls: 
  {
    
    orderCreated: 
    {
      label: 'order created',
      active: false,
      type: 'order',
      position: 0,
      date: 7,
      time: '14:43',
      keytime: 'keytime'
    },
    
    orderPaymentConfirmed:
    {
      label: 'order payment confirmed',
      active: false,
      type: 'payment',
      position: 4,
      date: 7,
      time: '16:43', 
      keytime: ''
    },
    
    orderDeadline:
    {
      label: 'order deadline',
      active: false,
      type: 'deadline',
      deathtime:'11d 3h',
      position: 100,
      date: 27,
      time: '14:43',
      keytime: 'keytime'      
    },
    
    firstContact:
    {
      label: 'first contact',
      active: false,
      type: 'payment',
      position: 21,
      date: 9,
      time: '01:01',
      keytime: ''      
    },
    
    writerFound: 
    {
      label: 'writer is found',
      active: false,
      type: 'process',
      position: 6,
      date: 7,
      time: '17:15',
      keytime: ''
    },
    
    writerPayment:
    {
      active: false,
      bull: false,
      summ: 21
    },       
    
    writingResult1:
    {
      label: 'writing result 1',
      active: false,
      type: 'process',
      position: 60,
      date: 13,
      time: '00:11',
      keytime: ''
    },    
    
    writingResult2:
    {
      label: 'writing result 2',
      active: false,
      type: 'process',
      position: 75,
      date: 14,
      time: '12:23',
      keytime: ''
    },   

    resultRejected:
    {
      label: 'writing result rejected',
      active: false,
      type: 'process',
      position: 65,
      date: 13,
      time: '12:23',
      keytime: ''
    },   

    resultAccepted:
    {
      label: 'writing result accepted',
      active: false,
      type: 'order',
      position: 76,
      date: 14,
      time: '12:45',
      keytime: ''
    },     
    
    today:
    {
      label: 'order deadline',
      active: true,
      type: 'today',
      position: 92,
      date: 16,
      time: '11:11',
      keytime: 'keytime',
      today: true,
      showtime: false
    } 
    
  
  },
  
  /* * ******************************************************************************** * */
  
  connections:
  [
    {
      active:false,
      position: 21,
      date: 9,
      time: '01:01'
    },
    {
      active:false,
      position: 25,
      date: 9,
      time: '12:15'    
    },
    {
      active:false,
      position: 65,
      date: 13,
      time: '12:23'    
    },
    {
      active:false,
      position: 76,
      date: 14,
      time: '12:45'    
    }
  ],
  
  /* * ******************************************************************************** * */
  
  events:
  {
    
    orderCreated:
    {
      active: false,
      bull: 'orderCreated',
      lifetime: '2 days 6 hrs'
    },
    
    orderLifetime:
    {
      active: false,
      bull: 'orderCreated',
      lifetime: '2 days 6 hrs'
    },    
    
    formResubmit:
    {
      active: false,
      bull: 'orderCreated'
    },    
    
    orderPayment:
    {
      active: false,
      linked: 'jsPaimentsLink',
      payment: 'initial',      
      bull: 'orderCreated',
      summ: 360,
      confirmed: false,
      unconfirmed: true
    },
    
    vasOffered:
    {
      active: false,
      bull: false,
      offered: false,
      accepted: false,
      rejected: false,
      neveroffered: true
    },
    
    vasPayment:
    {
      active: false,
      bull: 'firstContact',
      summ: 21,
      confirmed: false,
      unconfirmed: true
    },
    
    writerFound:
    {
      active: false,
      bull: false,
      isFound: false,
      isNotFound: true
    },
    
    writingResult1:
    {
      active: false,
      bull: 'writingResult1',
    },
    
    writingResult2:
    {
      active: false,
      bull: 'writingResult2',
    },
    
    resultRejected:
    {
      active: false,
      bull: 'resultRejected',
    },

    resultAccepted:
    {
      active: false,
      bull: 'resultAccepted',
    },
    
    deadlineClock:
    {
      active: false,
      bull: 'orderDeadline',
      deathtimeDays:'11 days',
      deathtimeHours:'3 hrs'
    }    
    
  }

};
