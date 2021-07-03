// jebe 5

// time goes on
TheOrderTimeline.events.orderLifetime.lifetime = '24 days 7 hrs';
TheOrderTimeline.props.orderStatus.label = 'finished'; 
TheOrderTimeline.props.orderStatus.type = 'good'; 
TheOrderTimeline.events.deadlineClock.active = false;
TheOrderTimeline.events.deadlineClock.normal = true;

$('#emuOverviewEvents4').hide();
$('#emuOverviewEvents5').show();

// result accepted
TheOrderTimeline.props.clientStatus.active = true; 
TheOrderTimeline.props.clientStatus.label = 'happy'; 
TheOrderTimeline.props.clientStatus.type = 'okay'; 
TheOrderTimeline.props.clientStatus.detailsDanger = false;
TheOrderTimeline.props.clientStatus.detailsApruving = false;

TheOrderTimeline.events.resultInformed.active = false;

TheOrderTimeline.bulls.resultAccepted.active = true;
TheOrderTimeline.bulls.resultAccepted.position = 82;
TheOrderTimeline.bulls.resultAccepted.date = 21;
TheOrderTimeline.bulls.resultAccepted.time = '23:59';
TheOrderTimeline.bulls.resultAccepted.keytime = 'keytime';

TheOrderTimeline.events.resultAccepted.active = true;
TheOrderTimeline.events.resultAccepted.bull = 'resultAccepted';

$('#emuTasksGeneralCompletedFeedbackNeeds').hide();
$('#emuTasksGeneralCompletedAccepted').show();


// task completed
$('#emuTasksInitialCompleted').show();
$('#emuTasksInitialFeedback').hide();
$('#emuOverviewInitialTaskCompleted').show();
$('#emuOverviewInitialTaskFeedback').hide();
$('#emuOverviewInitialTaskVasCompleted').show();
$('#emuOverviewInitialTaskVasInProgress').hide();




// deadline
TheOrderTimeline.bulls.orderDeadline.position = 84;
TheOrderTimeline.bulls.orderDeadline.keytime = '';
 
 
 // vas offers
TheOrderTimeline.props.vasStatus.active = true; 
TheOrderTimeline.props.vasStatus.label = 'available'; 
TheOrderTimeline.props.vasStatus.type = 'doit'; 
TheOrderTimeline.props.vasStatus.detailsDanger = true; 



// next order
TheOrderTimeline.events.nextOrder.active = true;
TheOrderTimeline.events.nextOrder.bull = 'nextOrder';

TheOrderTimeline.bulls.nextOrder.active = true;
TheOrderTimeline.bulls.nextOrder.type = 'order';
TheOrderTimeline.bulls.nextOrder.position = 86;
TheOrderTimeline.bulls.nextOrder.date = 29;
TheOrderTimeline.bulls.nextOrder.time = '10:03';
TheOrderTimeline.bulls.nextOrder.keytime = 'keytime';





//
$('.emuEpisode5').show();







