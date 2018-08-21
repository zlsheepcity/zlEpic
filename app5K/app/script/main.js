window.onload = function(e){
    define_scrollevolution();
    console.log('window.onload: ready');
}

var scrollevolution = {};
function define_scrollevolution() {

    scrollevolution.use__layout = document.querySelector('.y-layout');
    scrollevolution.document_intro = new Waypoint({
        element: document.getElementById('document_intro'),
        handler: function(scroll_direction) {
            scrollevolution.use__layout.classList.toggle('inactive')
        },
        offset:'-20%'
    });

    scrollevolution.use__watcher = document.getElementById('scroll_watcher');
    scrollevolution.scroll_watcher = new Waypoint({
        element: scrollevolution.use__watcher,
        handler: function(scroll_direction) {
            if(scroll_direction==='down'){
            scrollevolution.use__watcher.firstElementChild.classList.add('active');
            }else{
            scrollevolution.use__watcher.firstElementChild.classList.remove('active');
            }
        },
        offset:'50%'
    });

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
