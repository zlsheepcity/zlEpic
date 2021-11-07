// jebe 1


// pseudo generate timeline zoom
TheOrderTimeline.props.timelineRiskas.active = true;  

$('#emuOverviewEvents1').show();




// client
TheOrderTimeline.props.clientStatus.active = true; 
TheOrderTimeline.props.clientStatus.label = 'unconfirmed'; 
TheOrderTimeline.props.clientStatus.type = 'danger'; 
TheOrderTimeline.props.clientStatus.detailsDanger = true;



// bull - create order
TheOrderTimeline.bulls.orderCreated.active = true;
TheOrderTimeline.bulls.orderCreated.position = 0;
TheOrderTimeline.bulls.orderCreated.date = 2;
TheOrderTimeline.bulls.orderCreated.time = '11:11';
// + lifetime
TheOrderTimeline.events.orderLifetime.active = true;
TheOrderTimeline.events.orderLifetime.lifetime = '0 hrs';

emuDOM.emuOrderformInitial.show();
emuDOM.emuOrderformSummary.show();



// order status
TheOrderTimeline.props.orderStatus.label = 'just created'; 
TheOrderTimeline.props.orderformStatus.active = true; 
TheOrderTimeline.props.orderformStatus.label = 'submited'; 
TheOrderTimeline.props.orderformStatus.type = 'norm';  
TheOrderTimeline.props.orderformStatus.orderform = 'initial';



// create payment
TheOrderTimeline.events.orderPayment.active = true;
TheOrderTimeline.events.orderPayment.summ = 360;
TheOrderTimeline.events.orderPayment.confirmed = false;
TheOrderTimeline.events.orderPayment.unconfirmed = true;

TheOrderTimeline.props.paymentStatus.active = true; 
TheOrderTimeline.props.paymentStatus.label = 'waiting 0 hrs'; 
TheOrderTimeline.props.paymentStatus.type = 'danger'; 
TheOrderTimeline.props.paymentStatus.linked = 'jsPaimentsLink';
TheOrderTimeline.props.paymentStatus.payment = 'initial';
TheOrderTimeline.props.paymentStatus.detailsDanger = true; 
TheOrderTimeline.props.paymentStatus.summ = 360;



navUniversalInnerNavigation('Paiments', 'initial');
emuDOM.emuPaymentInitial.show();
emuDOM.emuPaymentInitialContent.show();


    

// bull - deadline
TheOrderTimeline.bulls.orderDeadline.active = true;
TheOrderTimeline.bulls.orderDeadline.position = 100;
TheOrderTimeline.bulls.orderDeadline.date = 22;
TheOrderTimeline.bulls.orderDeadline.time = '11:11'; 
// + lifetime
TheOrderTimeline.events.deadlineClock.active = true;
TheOrderTimeline.events.deadlineClock.type = 'data';
TheOrderTimeline.events.deadlineClock.normal = true;
TheOrderTimeline.events.deadlineClock.deathtimeDays = '20 days';
TheOrderTimeline.events.deadlineClock.deathtimeHours = '0 hrs'




// process
emuDOM.emuTasksInitial.show();
emuDOM.emuTasksVas0Writer.show();
emuDOM.emuTasksGeneralWriter.show();
emuDOM.emuTasksGeneralContent.show();
emuDOM.emuTasksVas0Content.show();
navUniversalInnerNavigation('Process', 'general');

emuDOM.emuOverviewInitialTask.show();
emuDOM.emuOverviewInitialTaskVas0.show();



// no writer
TheOrderTimeline.props.processStatus.active = true; 
TheOrderTimeline.props.processStatus.label = 'no writer'; 
TheOrderTimeline.props.processStatus.type = 'danger'; 
TheOrderTimeline.props.processStatus.detailsDanger = true;
TheOrderTimeline.props.processStatus.detailsProblem = false;





// vas offers
TheOrderTimeline.events.vasOffered.active = true;

TheOrderTimeline.props.vasStatus.active = true; 
TheOrderTimeline.props.vasStatus.label = 'available'; 
TheOrderTimeline.props.vasStatus.type = 'doit'; 
TheOrderTimeline.props.vasStatus.detailsDanger = true; 




// show overview
emuDOM.emuOverviewUserProfile.show();
emuDOM.emuOverviewPaymentsFirst.show();
emuDOM.emuOverviewCommunicationInitialVAS.show();
emuDOM.emuOverviewNoWriter.show();
emuDOM.emuOverviewNoCommunication.show();




//$('.emuBlock-Jebe01').show();



