window.onload = function(e){
    define_scrollevolution();
    Pathdance.RegisterDancers(pathdance_dancers);
    //PathdancePrepare();
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
        element: document.getElementById('scroll_watcher__trigger'),
        handler: function(scroll_direction) {
            if(scroll_direction==='down'){
            scrollevolution.use__watcher.classList.add('active');
            }else{
            scrollevolution.use__watcher.classList.remove('active');
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

/*
    Scroll agent, v2018.8.24
    Uses:
        Waypoint lib
    Samples:
        zlScroll.do( '.myElement', myFunction);
        zlScroll.do( '.myElement', myFunction, {offset:'50%'} );
        zlScroll.mod('.myElement',{direction:'down',add:'newClassName'});
*/
function zlScrollMaster() {
    this.actors = [];
    this.getel = function(query,params) {
        return params && params.el ? params.el : document.querySelector(query);
    }
    this.getwp = function(params) {
        return {
            offset: params && params.offset ? params.offset : 0
        }
    }
    this.do = function(query,func,params) {
        var el = this.getel(query,params); if (!el) return this;
        var wp = this.getwp(params);
        _.assign( wp, {
            element: el,
            handler: func
        });
        this.actors.push( {id:query, action:new Waypoint(wp)} );
        return this;
    }
    this.mod = function(query,params) {
        var el = this.getel(query,params); if (!el) return this;
        var wp = this.getwp(params);
        var func = function(direction) {
            el.classList.add(params.add);
            if ( params && params.direction && params.direction !== direction )
                el.classList.remove(params.add);
        };
        _.assign( wp, {
            element: el,
            handler: func
        });
        this.actors.push( {id:query, action:new Waypoint(wp)} );
        return this;
    }
}
var zlScroll = new zlScrollMaster();


/*
    el shortcut, v2018.8.24
*/
function el(classname) {
    return document.querySelector('.'+classname);
}
