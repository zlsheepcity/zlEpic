var WelcomeMessage = function() {
    if ( console && typeof(console.log)==='function' ) {
        console.log('Gaming Licensing 2019');
    }
};
WelcomeMessage();

$(function LaunchInterfaceEventsOnLoad () {

    if (typeof(InterfaceEventsInitialization)==='function')
        setTimeout(InterfaceEventsInitialization,200);

});




