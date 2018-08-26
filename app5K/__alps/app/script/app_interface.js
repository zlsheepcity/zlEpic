/* # Interface js functions, v5001
    zlScroll
*/

/* ==============================================================
    Scroll agent, v1002--2018.8.26
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
    this.Run = function(){
        this.DoAllActions();
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
    this.AddAction = function(dna) {
        this.nucleus[dna.name] = dna;
        return this;
    }

    // ----------------------------------- Private

    this.nucleus = {}; // stored dna for future actions
    this.actions = {}; // active actions
    this.report = function(msg,data) {
        console.log('zlScrollMaster:'+msg);
        console.log(data);
        return this
    }
    this.getwp = function(params) {
        // integration with Waypoint
        return {
            offset: params && params.offset ? params.offset : 0
        }
    }
    this.ribosome = function(dna) {
        // ribosome creates new action without activation
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
}
var zlScroll = new zlScrollMaster();
/* ============================================================== */