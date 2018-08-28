/* # Interface js functions, v5001
    zlAppMaster
    zlScroll
*/

/* ==============================================================
    app master v1002--2018.8.27
    Sample:
        app.do({
            name:       'UniquePointer',
            when:       '.myElement__Trigger',
            has:        'click',
            removeClass:'cssClassName',
            for:        '.myElement__targetToChange'
        });
        app.do({
            name:       'UniquePointer',
            when:       '.myElement__Trigger',
            has:        'scrollTop',
            hasOptions: { offset:'-21%' },
            addClass:   'cssClassName',
            for:        '.myElement__targetToChange'
        });
*/
function zlAppMaster() {
    // SETTINGS
    this.supportedEvents = { // event_name: event_type
        click: 'click',
        scrollTop: 'scroll'
    };
    this.hasSilentReports = false;
    // PUB
    this.do = function(dna) {
        this.InsertIntoNucleus(dna);
        return this;
    }
    this.Run = function() {
        this.report('start', 'AppMaster.Run');
        this.Delegator.Prepare(this);
        for ( var i in this.nucleus ) this.Ribosome(this.nucleus[i]);
        this
            .report('divider')
            .report('Interface update completed. Console command:')
            .report('app.proteins.ACTION_NAME')
            .report('divider')
            .report('end');
        return this;
    }
    // HQ
    this.nucleus = [];
    this.proteins = {};
    this.Ribosome = function(dna) {
        if (!dna || !dna.name) return false;
        var name = dna.name;
        var protein = { name:name, dna:{} };
        _.assign( protein, this.RibosomeGetsEvent(dna) );
        _.assign( protein, this.RibosomeGetsElements(dna) );
        _.assign( protein, this.RibosomeGetsAction(dna) );
        _.assign( protein.dna, dna );
        this.proteins[name] = protein;
        if ( protein.event_type && this.Delegator[protein.event_type] ) {
            this.Delegator[protein.event_type](this.proteins[name]);
            this.report('Interface was updated for action: '+name);
        }
        return true;
    }
    this.Delegator = {
        Prepare: function(app) {
            app.Delegator.click = app.DelegateClick;
            app.Delegator.scroll = app.DelegateScroll;
        }
    }
    // INTERFACE
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
    this.InsertIntoNucleus = function(dna) {
        if (!dna) return false;
        if (!dna.name) dna.name = 'Ogodei_'+this.nucleus.length;
        this.nucleus.push(dna);
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
        var action_operand;
        if (!action) {
            if (dna.removeClass) action = 'removeClass';
            if (dna.toggleClass) action = 'toggleClass';
            if (dna.addClass) action = 'addClass';
            if (dna.func) action = 'func';
        }
        if ( action && action !== 'func') action_operand = dna[action];
        var func = dna.func ? dna.func : false;
        return {
            action: action,
            action_operand: action_operand,
            func: func
        };
    }
    this.CreateClickFunction = function(protein) {
        if ( protein.func ) return protein.func;
        var supportedActions = [
                'addClass',
                'removeClass',
                'toggleClass'
        ];
        if ( protein.action && supportedActions.indexOf(protein.action) > -1)
            protein.func = function(e){
                $(protein.tel)[protein.action](protein.dna[protein.action]);
                return true;
            }
        return protein.func;
    }
    // EXPORT
    this.DelegateClick = function(protein) {
        app.CreateClickFunction(protein);
        return zlClick.do(protein);
    }
    this.DelegateScroll = function(protein) {
        var scroll_dna = {
            name: protein.name,
            el: protein.el,
            tel: protein.tel,
            event_type: protein.event_type,
            event_name: protein.event_name,
            hasOptions: protein.dna.hasOptions,
            action: protein.action,
            symbol: protein.action_operand,
            func: protein.func
        };
        if ( protein.dna.hasOptions ) _.assign(scroll_dna,protein.dna.hasOptions);
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
        this.ActivateEvent(dna);
        return true;
    }
    this.ActivateEvent = function(dna) {
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
    // PUB
    this.AddAction = function(dna) {
        this.nucleus[dna.name] = {};
        _.assign(this.nucleus[dna.name], dna);
        return this;
    }
    this.Run = function(){
        this.DoAllActions();
        return this;
    }
    // HQ
    this.nucleus = {}; // stored dna for future actions
    this.actions = {}; // active actions
    this.Ribosome = function(dna) {
        var name = dna.name;
        this.actions[name] = { name:name, dna:dna };
        _.assign(this.actions[name], this.RibosomeGetsElements(dna));
        if (!this.actions[name].el)
            return this.report('Warning, there are no el!', dna);
        _.assign(this.actions[name], {
            symbol:dna.symbol,
            direction:dna.direction
        });
        _.assign(this.actions[name], this.RibosomeGetsFunction(dna));
        this.DelegateAction(this.actions[name]);
        return this;
    }
    // INTERFACE
    this.report = function(msg,data) {
        console.log('zlScrollMaster: '+msg);
        console.log(data);
        return this
    }
    this.DoAllActions = function() {
        for ( var name in this.nucleus )
            this.Ribosome(this.nucleus[name]);
        return this;
    }
    this.RibosomeGetsElements = function(dna) {
        var el_trigger, el_target;
        if (dna.el) el_trigger = dna.el;
            else if (dna.when) el_trigger = document.querySelector(dna.when);
        if (dna.tel) el_target = dna.tel;
            else if (dna.for)  el_target = document.querySelector(dna.for);
            else el_target = el_trigger;
        return {
            el:  el_trigger,
            tel: el_target
        }
    }
    this.RibosomeGetsFunction = function(dna) {
        var func = dna.func;
        if (!func) func = function(direction) {
            var o = zlScroll.actions[dna.name];
            if ( o.direction && o.direction !== direction ) {
                 o.tel.classList.remove(o.symbol);
            } else {
                o.tel.classList.add(o.symbol);
            }
        }
        return { func:func };
    }
    // EXPORT
    this.DelegateAction = function(action) {
        var wp = {
            element: action.el,
            handler: action.func,
            offset: action.dna.offset
        };
        this.actions[action.name].Waypoint = new Waypoint(wp);
        this.actions[action.name].status = "ready";
        return this;
    }



}
var zlScroll = new zlScrollMaster();
/* ============================================================== */
