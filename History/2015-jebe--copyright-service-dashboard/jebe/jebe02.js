// jebe 2




// time goes on
TheOrderTimeline.events.orderLifetime.lifetime = '4 hrs';
TheOrderTimeline.props.orderStatus.label = 'in progress'; 
TheOrderTimeline.props.orderStatus.type = 'data'; 
TheOrderTimeline.events.deadlineClock.deathtimeDays = '19 days';
TheOrderTimeline.events.deadlineClock.deathtimeHours = '20 hrs';

$('#emuOverviewEvents1').hide();
$('#emuOverviewEvents2').show();




// contact
TheOrderTimeline.connections[0].active = true;
TheOrderTimeline.connections[0].position = 25;
TheOrderTimeline.connections[0].date = 2;
TheOrderTimeline.connections[0].time = '15:10';

TheOrderTimeline.bulls.firstContact.active = true;
TheOrderTimeline.bulls.firstContact.position = 25;
TheOrderTimeline.bulls.firstContact.date = 2;
TheOrderTimeline.bulls.firstContact.time = '15:10';





// client confirmed
TheOrderTimeline.props.clientStatus.active = true; 
TheOrderTimeline.props.clientStatus.label = 'waiting'; 
TheOrderTimeline.props.clientStatus.type = 'nein'; 
TheOrderTimeline.props.clientStatus.detailsDanger = false;

emuDOM.emuOverviewUserProfile.hide();
emuDOM.emuOverviewUserProfileConfirmed.show();




// payment confirmed
TheOrderTimeline.bulls.orderPaymentConfirmed.active = true;
TheOrderTimeline.bulls.orderPaymentConfirmed.position = 7;
TheOrderTimeline.bulls.orderPaymentConfirmed.date = 2;
TheOrderTimeline.bulls.orderPaymentConfirmed.time = '12:23';

TheOrderTimeline.events.orderPayment.active = true;
TheOrderTimeline.events.orderPayment.bull = 'orderPaymentConfirmed';
TheOrderTimeline.events.orderPayment.confirmed = true;
TheOrderTimeline.events.orderPayment.unconfirmed = false;

TheOrderTimeline.props.paymentStatus.active = true;
TheOrderTimeline.props.paymentStatus.label = 'confirmed';
TheOrderTimeline.props.paymentStatus.type = 'okay';
TheOrderTimeline.props.paymentStatus.detailsDanger = false;


$('#emuOverviewPaymentsFirst').hide();
$('#emuOverviewPayments2').show();





// vas offered
TheOrderTimeline.events.vasOffered.active = true;
TheOrderTimeline.events.vasOffered.bull = 'firstContact';
TheOrderTimeline.events.vasOffered.accepted = true;
TheOrderTimeline.events.vasOffered.rejected = false;
TheOrderTimeline.events.vasOffered.neveroffered = false;

TheOrderTimeline.events.vasPayment.active = true;
TheOrderTimeline.events.vasPayment.bull = 'firstContact';
TheOrderTimeline.events.vasPayment.summ = 21;
TheOrderTimeline.events.vasPayment.confirmed = false;
TheOrderTimeline.events.vasPayment.unconfirmed = true;

TheOrderTimeline.props.paymentStatus.active = true;
TheOrderTimeline.props.paymentStatus.label = 'waiting 0 hrs';
TheOrderTimeline.props.paymentStatus.type = 'danger';
TheOrderTimeline.props.paymentStatus.payment = 'vas';
TheOrderTimeline.props.paymentStatus.summ = 21;
TheOrderTimeline.props.paymentStatus.detailsDanger = true;

TheOrderTimeline.props.vasStatus.active = true;
TheOrderTimeline.props.vasStatus.label = 'completed';
TheOrderTimeline.props.vasStatus.type = 'norm';
TheOrderTimeline.props.vasStatus.detailsDanger = false;

$('#emuPaymentVASUnconfirmed').show();
$('#emuOverviewSoldVAS').show();
$('#emuOverviewCommunicationInitialVAS').hide();





// writer found
TheOrderTimeline.props.processStatus.active = true;
TheOrderTimeline.props.processStatus.label = 'in progress';
TheOrderTimeline.props.processStatus.type = 'okay';
TheOrderTimeline.props.processStatus.detailsDanger = false;

TheOrderTimeline.bulls.writerFound.active = true;
TheOrderTimeline.bulls.writerFound.position = 33;
TheOrderTimeline.bulls.writerFound.date = 2;
TheOrderTimeline.bulls.writerFound.time = '12:45';

TheOrderTimeline.events.writerFound.active = true;
TheOrderTimeline.events.writerFound.bull = 'writerFound';
TheOrderTimeline.events.writerFound.isFound = true;
TheOrderTimeline.events.writerFound.isNotFound = false;
TheOrderTimeline.events.writerFound.isNew = false;


// writer found - process update
$('#emuTasksGeneralWriterFound').show();
$('#emuTasksGeneralWriter').hide();
$('#emuTasksInitialInProgress').show();
$('#emuTasksInitial').hide();

$('#emuOverviewInitialTaskInProgress').show();
$('#emuOverviewInitialTask').hide();

$('#emuOverviewInitialTaskVasInProgress').show();
$('#emuOverviewInitialTaskVas0').hide();




//
$('.emuEpisode2').show();




