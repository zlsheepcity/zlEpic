window.onload = function(e){
    define_scrollevolution();
    console.log('window.onload: ready');
}

var scrollevolution = {};
function define_scrollevolution() {

    scrollevolution.demo_waypoint = new Waypoint({
        element: document.getElementById('demo_waypoint'),
        handler: function(scroll_direction) {
            console.log('Basic waypoint triggered: '+scroll_direction)
        }
    });

    scrollevolution.demo_inview = new Waypoint.Inview({
        element: document.getElementById('demo_inview'),
        enter: function(direction) {
            console.log('Enter triggered with direction ' + direction)
        },
        entered: function(direction) {
            console.log('Entered triggered with direction ' + direction)
        },
        exit: function(direction) {
            console.log('Exit triggered with direction ' + direction)
        },
        exited: function(direction) {
            console.log('Exited triggered with direction ' + direction)
        }
    });

}
