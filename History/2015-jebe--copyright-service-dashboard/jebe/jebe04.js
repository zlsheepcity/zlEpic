// jebe 3

// time goes on
TheOrderTimeline.events.orderLifetime.lifetime = '5 days 11 hrs';
TheOrderTimeline.props.orderStatus.label = 'in progress'; 
TheOrderTimeline.props.orderStatus.type = 'data'; 
TheOrderTimeline.events.deadlineClock.active = true;
TheOrderTimeline.events.deadlineClock.normal = false;
TheOrderTimeline.events.deadlineClock.deathtimeDays = '0 days';
TheOrderTimeline.events.deadlineClock.deathtimeHours = '8 hrs';

$('#emuOverviewEvents3').hide();
$('#emuOverviewEvents4').show();


// all payments confirmed

TheOrderTimeline.props.paymentStatus.active = true;
TheOrderTimeline.props.paymentStatus.label = 'confirmed';
TheOrderTimeline.props.paymentStatus.type = 'okay';
TheOrderTimeline.props.paymentStatus.payment = 'none';
TheOrderTimeline.props.paymentStatus.detailsDanger = false;
TheOrderTimeline.props.paymentStatus.detailsConfirm = false;


TheOrderTimeline.events.writerPayment.active = true;
TheOrderTimeline.events.writerPayment.bull = 'writerFound';
TheOrderTimeline.events.writerPayment.summ = 9;
TheOrderTimeline.events.writerPayment.confirmed = true;
TheOrderTimeline.events.writerPayment.unconfirmed = false;


$('#emuOverviewPayments3').hide();
$('#emuOverviewPayments4').show();




// problem contacted
TheOrderTimeline.connections[2].active = true;
TheOrderTimeline.connections[2].position = 58;
TheOrderTimeline.connections[2].date = 6;
TheOrderTimeline.connections[2].time = '15:23';
TheOrderTimeline.connections[3].active = true;
TheOrderTimeline.connections[3].position = 61;
TheOrderTimeline.connections[3].date = 6;
TheOrderTimeline.connections[3].time = '15:34';




// order updated
TheOrderTimeline.props.orderformStatus.active = true;
TheOrderTimeline.props.orderformStatus.label = 'updated';
TheOrderTimeline.props.orderformStatus.type = 'norm';
TheOrderTimeline.props.orderformStatus.orderform = 'resubmit';

TheOrderTimeline.bulls.orderUpdated.active = true;
TheOrderTimeline.bulls.orderUpdated.position = 62;
TheOrderTimeline.bulls.orderUpdated.date = 6;
TheOrderTimeline.bulls.orderUpdated.time = '15:45';


TheOrderTimeline.events.orderUpdated.active = true;
TheOrderTimeline.events.orderUpdated.bull = 'orderUpdated';


// writers problem solved
TheOrderTimeline.bulls.writingResult1.keytime = ''; 

TheOrderTimeline.events.writingResult1.active = true;
TheOrderTimeline.events.writingResult1.bull = 'orderUpdated';
TheOrderTimeline.events.writingResult1.solved = true;
TheOrderTimeline.events.writingResult1.unsolved = false;

$('#emuTasksGeneralWriterHasRequest').hide();
$('#emuTasksInitialRequest').hide();
$('#emuTasksInitialFeedback').show();

$('#emuOverviewInitialTaskStopped').hide();
$('#emuOverviewInitialTaskFeedback').show();


// writer changed
TheOrderTimeline.bulls.writerChanged.active = true;
TheOrderTimeline.bulls.writerChanged.position = 70;
TheOrderTimeline.bulls.writerChanged.date = 7;
TheOrderTimeline.bulls.writerChanged.time = '15:11';

TheOrderTimeline.events.writerFound.active = true;
TheOrderTimeline.events.writerFound.bull = 'writerChanged';
TheOrderTimeline.events.writerFound.isNew = true;
TheOrderTimeline.events.writerFound.isFound = false;
TheOrderTimeline.events.writerFound.isNotFound = false;

$('#emuTasksGeneralWriterEx').show();




// writing finished
TheOrderTimeline.props.processStatus.active = true;
TheOrderTimeline.props.processStatus.label = 'completed';
TheOrderTimeline.props.processStatus.type = 'okay';
TheOrderTimeline.props.processStatus.detailsDanger = false;
TheOrderTimeline.props.processStatus.detailsProblem = false;

TheOrderTimeline.bulls.writingResult2.active = true;
TheOrderTimeline.bulls.writingResult2.position = 77;
TheOrderTimeline.bulls.writingResult2.date = 10;
TheOrderTimeline.bulls.writingResult2.time = '11:11';
TheOrderTimeline.bulls.writingResult2.keytime = '';

TheOrderTimeline.events.writingResult2.active = true;
TheOrderTimeline.events.writingResult2.bull = 'writingResult2';


$('#emuTasksGeneralCompleted').show();
$('#emuTasksGeneralCompletedFeedbackNeeds').show();




// client informed
TheOrderTimeline.events.resultInformed.active = true;
TheOrderTimeline.events.resultInformed.bull = 'writingResult2';

TheOrderTimeline.connections[4].active = true;
TheOrderTimeline.connections[4].position = 77;
TheOrderTimeline.connections[4].date = 10;
TheOrderTimeline.connections[4].time = '11:11';

TheOrderTimeline.props.clientStatus.active = true; 
TheOrderTimeline.props.clientStatus.label = 'waiting 4 hrs'; 
TheOrderTimeline.props.clientStatus.type = 'danger'; 
TheOrderTimeline.props.clientStatus.detailsDanger = false;
TheOrderTimeline.props.clientStatus.detailsApruving = true;







//
$('.emuEpisode4').show();




















