window.onload = function(e){
    zlScroll.Run();
    define_scrollevolution();
    Pathdance.RegisterDancers(pathdance_dancers);
    //PathdancePrepare();
    console.log('window.onload: ready');
}

var scrollevolution = {};
function define_scrollevolution() {

/*
    scrollevolution.use__layout = document.querySelector('.y-layout');
    scrollevolution.document_intro = new Waypoint({
        element: document.getElementById('document_intro'),
        handler: function(scroll_direction) {
            scrollevolution.use__layout.classList.toggle('inactive')
        },
        offset:'-20%'
    });
*/

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
        - Waypoint, http://imakewebthings.com/waypoints/
    Sample:
        zlScroll.AddAction({
            name:   'UniquePointer',
            trigga: '.myElement--trigger',
            target: '.myElement--target-to-change',
            symbol: 'cssClassName',
            direction: 'down',
            offset: '-50%'
        });
*/
function zlScrollMaster() {
    this.actors = [];
    this.nucleus = {};
    this.actions = {};
    this.getel = function(query,params) {
        return params && params.el ? params.el : document.querySelector(query);
    }
    this.getwp = function(params) {
        return {
            offset: params && params.offset ? params.offset : 0
        }
    }
    this.report = function(msg,data) {
        console.log('zlScrollMaster:'+msg);
        console.log(data);
        return this
    }
    this.ribosome = function(dna) {
        var name = dna.name;
        var el;
        if (dna.el) el=dna.el;
        else if (dna.trigga) el=document.querySelector(dna.trigga);
        var tel;
        if (dna.tel) tel=dna.tel;
        else if (dna.target) tel=document.querySelector(dna.target);
        else tel = el;
        this.actions[name] = {
            name:name,
            el:el,
            tel:tel,
            symbol:dna.symbol,
            direction:dna.direction,
            func: dna.func ? dna.func : false
        }
        return this.actions[name];
    }
    this.AddAction = function(dna) {
        this.nucleus[dna.name] = dna;
        return this;
    }
    this.DoAllActions = function() {
        for ( var name in this.nucleus )
            this.DoAction(this.nucleus[name]);
        return this;
    }
    this.DoAction = function(dna) {
        var order = this.ribosome(dna);
        if (!order.el) return this.report('Warning, there are no el!', dna);
        var func = order.func;
        if (!order.func) order.func = function(direction) {
            var o = zlScroll.actions[order.name];
            if ( o.direction && o.direction !== direction ) {
                 o.tel.classList.remove(o.symbol);
            } else {
                o.tel.classList.add(o.symbol);
            }
        }
        var wp = _.assign( this.getwp(dna), {
            element: order.el,
            handler: order.func
        });
        this.actions[order.name].Waypoint = new Waypoint(wp);
        this.actions[order.name].status = "ready";
        return this;
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
    this.Run = function(){
        this.DoAllActions();
    }
}
var zlScroll = new zlScrollMaster();


/*
    el shortcut, v2018.8.24
*/
function el(cssPath) {
    return document.querySelector(cssPath);
}
function elf(classname) {
    return document.querySelector('.'+classname);
}
