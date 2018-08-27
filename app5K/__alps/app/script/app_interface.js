/* # Interface js functions, v5001
    zlAppMaster
    zlScroll
*/

/* ==============================================================
    app master v1002--2018.8.27
    Sample:
        app.do({
            name:       'UniquePointer',
            when:       '.myElement--trigger',
            has:        'click',
            hasOptions: {},
            do:         'addClass',
            addClass:   'cssClassName',
            for:        '.myElement--target-to-change'
        });
*/
function zlAppMaster() {
    // SETTINGS
    this.supportedEvents = { // event_name: event_type
        click: 'click',
        scrollTop: 'scroll'
    };
    this.hasSilentReports = false;
    // PUBLIC
    this.do = function(dna) {
        this.InsertIntoNucleus(dna);
        return this;
    }
    this.Run = function() {
        this.report('start', 'AppMaster.Run');
        this.Delegate.Prepare(this);
        for ( var i in this.nucleus ) this.Ribosome(this.nucleus[i]);
        this
            .report('divider')
            .report('All actions are updated. Type for details:')
            .report('app.proteins.ACTION_NAME')
            .report('divider')
            .report('end');
        return this;
    }
    // PRIVATE
    this.nucleus = [];
    this.proteins = {};
    this.InsertIntoNucleus = function(dna) {
        if (!dna) return false;
        if (!dna.name) dna.name = 'Ogodei_'+this.nucleus.length;
        this.nucleus.push(dna);
        return true;
    }
    this.report =function (msg,data) {
        if ( this.hasSilentReports ) return this;
        if (msg==='start') console.group(data);
        else if (msg==='end') console.groupEnd();
        else if (msg==='data') console.table(data, ['Value']);
        else if (msg==='divider')
            console.log('------------------------------------');
        else {
            console.log(msg);
            if (data) console.log(data);
        }
        return this;
    }
    this.Ribosome = function(dna) {
        if (!dna || !dna.name) return false;
        var name = dna.name;
        var protein = { name:name, dna:{} };
        _.assign( protein, this.RibosomeGetsEvent(dna) );
        _.assign( protein, this.RibosomeGetsElements(dna) );
        _.assign( protein, this.RibosomeGetsAction(dna) );
        _.assign( protein.dna, dna );
        this.proteins[name] = protein;
        this.DoRibosomeTranslation(name, app);
        return true;
    }
    this.RibosomeGetsEvent = function(dna) {
        var event_name = dna.has ? dna.has : 'click';
        var event_type =
            this.supportedEvents[event_name]
            ? this.supportedEvents[event_name]
            : 'click';
        return {
            event_type: event_type,
            event_name: event_name
        }
    }
    this.RibosomeGetsElements = function(dna) {
        var el_trigger, el_target;
        if (dna.when) el_trigger = document.querySelector(dna.when);
        if (dna.for)  el_target = document.querySelector(dna.for);
        else el_target = el_trigger;
        return {
            el:  el_trigger,
            tel: el_target
        }
    }
    this.RibosomeGetsAction = function(dna) {
        var action = dna.do ? dna.do : false;
        if (!action) {
            if (dna.removeClass) action = 'removeClass';
            if (dna.toggleClass) action = 'toggleClass';
            if (dna.addClass) action = 'addClass';
            if (dna.func) action = 'func';
        }
        var func = dna.func ? dna.func : false;
        return {
            action: action,
            func: func
        };
    }
    this.DoRibosomeTranslation = function(name, app) {
        var protein = app.proteins[name];
        if ( !protein && !protein.event_type ) return false;
        this.Delegate[protein.event_type](app.proteins[name]);
        this.report('Interface was updated for action: '+name);
        return true;
    }
    this.CreateClickFunction = function(protein) {
        if ( !protein.func ) switch ( protein.action ) {
            case 'removeClass':
                protein.func = function(e){
                    protein.tel.classList.remove(protein.dna.removeClass);
                    return true;
                }
                break;
            case 'addClass':
                protein.func = function(e){
                    protein.tel.classList.add(protein.dna.addClass);
                    return true;
                }
                break;
        }
        return protein.func;
    }
    // EXPORT
    this.Delegate = {
        Prepare: function(app) {
            app.Delegate.click = app.DelegateClick;
            app.Delegate.scroll = app.DelegateScroll;
        }
    }
    this.DelegateClick = function(protein) {
        app.CreateClickFunction(protein);
        return zlClick.do(protein);
    }
    this.DelegateScroll = function(protein) {
        var scroll_dna = {
            name: protein.name,
            el: protein.el,
            tel: protein.tel
        };
        if ( protein.hasOptions ) _.assign(scroll_dna,protein.hasOptions);
        switch ( protein.action ) {
            case 'addClass':
                scroll_dna.symbol = protein.dna.addClass;
                break;
        }
        switch ( protein.event_name ) {
            case 'scrollTop':
                scroll_dna.direction = 'down';
                break;
        }
        zlScroll.AddAction(scroll_dna);
    }
}
var app = new zlAppMaster();
/* ============================================================== */

/* ==============================================================
    Click agent, v1001--2018.8.27
*/
function zlClickMaster() {
    this.do = function(dna) {
        if ( !dna.el || !dna.func ) return false;
        dna.el.addEventListener('click', dna.func);
        return true;
    }
}
var zlClick = new zlClickMaster();
/* ============================================================== */

/* ==============================================================
    Scroll agent, v1002--2018.8.27
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
        this.nucleus[dna.name] = {};
        _.assign(this.nucleus[dna.name], dna);
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
