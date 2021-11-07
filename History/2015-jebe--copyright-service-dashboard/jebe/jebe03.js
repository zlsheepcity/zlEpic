// jebe 3

// time goes on
TheOrderTimeline.events.orderLifetime.lifetime = '4 days 17 hrs';
TheOrderTimeline.events.deadlineClock.deathtimeDays = '15 days';
TheOrderTimeline.events.deadlineClock.deathtimeHours = '2 hrs';


$('#emuOverviewEvents2').hide();
$('#emuOverviewEvents3').show();


// payments
TheOrderTimeline.bulls.vasPaymentConfirmed.active = true;
TheOrderTimeline.bulls.vasPaymentConfirmed.position = 37;
TheOrderTimeline.bulls.vasPaymentConfirmed.date = 5;
TheOrderTimeline.bulls.vasPaymentConfirmed.time = '16:45';

TheOrderTimeline.events.vasPayment.active = true;
TheOrderTimeline.events.vasPayment.bull = 'vasPaymentConfirmed';
TheOrderTimeline.events.vasPayment.summ = 21;
TheOrderTimeline.events.vasPayment.confirmed = true;
TheOrderTimeline.events.vasPayment.unconfirmed = false;

TheOrderTimeline.props.paymentStatus.active = true;
TheOrderTimeline.props.paymentStatus.label = 'confirm, please';
TheOrderTimeline.props.paymentStatus.type = 'doit';
TheOrderTimeline.props.paymentStatus.payment = 'writer';
TheOrderTimeline.props.paymentStatus.summ = 9;
TheOrderTimeline.props.paymentStatus.detailsDanger = false;
TheOrderTimeline.props.paymentStatus.detailsConfirm = true;

TheOrderTimeline.events.writerPayment.active = true;
TheOrderTimeline.events.writerPayment.bull = 'writerFound';
TheOrderTimeline.events.writerPayment.summ = 9;
TheOrderTimeline.events.writerPayment.confirmed = false;
TheOrderTimeline.events.writerPayment.unconfirmed = true;

$('#emuOverviewPayments2').hide();
$('#emuOverviewPayments3').show();



// writers problem
TheOrderTimeline.props.processStatus.active = true;
TheOrderTimeline.props.processStatus.label = 'request';
TheOrderTimeline.props.processStatus.type = 'danger';
TheOrderTimeline.props.processStatus.detailsDanger = false;
TheOrderTimeline.props.processStatus.detailsProblem = true;

TheOrderTimeline.bulls.writingResult1.active = true;
TheOrderTimeline.bulls.writingResult1.position = 53;
TheOrderTimeline.bulls.writingResult1.date = 5;
TheOrderTimeline.bulls.writingResult1.time = '19:45';
TheOrderTimeline.bulls.writingResult1.keytime = 'keytime';

TheOrderTimeline.events.writingResult1.active = true;
TheOrderTimeline.events.writingResult1.bull = 'writingResult1';
TheOrderTimeline.events.writingResult1.solved = false;
TheOrderTimeline.events.writingResult1.unsolved = true;

TheOrderTimeline.props.orderStatus.label = 'stopped'; 
TheOrderTimeline.props.orderStatus.type = 'bad'; 

// writer problem at process
$('#emuTasksGeneralWriterHasRequest').show();
$('#emuTasksInitialRequest').show();
$('#emuTasksInitialInProgress').hide();

$('#emuOverviewInitialTaskStopped').show();
$('#emuOverviewInitialTaskInProgress').hide();





// problem contacted
TheOrderTimeline.connections[1].active = true;
TheOrderTimeline.connections[1].position = 53;
TheOrderTimeline.connections[1].date = 6;
TheOrderTimeline.connections[1].time = '15:10';





//
$('.emuEpisode3').show();