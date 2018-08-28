/* # Interface js functions, v5001
    app.do(event_details);
    app.el(css_path);
    app.Mutate(css_mutation);
*/

/* ==============================================================
    app master v1002, 2018.8.28
    Sample:
        app.do({
            name:       'ClickToToggleClass',
            when:       '.myElement__Trigger',
            has:        'click',
            toggleClass:   'cssClassName',
            for:        '.myElement__targetToChange'
        });
        app.do({
            name:       'ScrollToToggleClass',
            when:       '.myElement__Trigger',
            has:        'scrollTop',
            hasOptions: { offset:'-21%' },
            addClass:   'cssClassName',
            for:        '.myElement__targetToChange'
        });
        app.do({
            name:       'ScrollToGetInViewEvents',
            when:       '.myElement__Trigger',
            has:        'inview',
            hasOptions: {
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
            }
        });
*/
function zlAppMaster() {
    // # SETTINGS
    this.supportedEvents = {
        // event_name: event_type
        click: 'click',
        scrollTop: 'scroll',
        scrollIn: 'scroll',
        scrollInview: 'scroll',
        scrollAway: 'scroll',
        inview: 'scroll'
    };
    this.hasSilentReports = false;
    // # PUB
    this.do = function(dna) {
        this.InsertIntoNucleus(dna);
        return this;
    }
    this.el = function(query) {
        return document.querySelector(query);
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
    this.Mutate = function(mutation){
        if (!mutation) return false;
        if (!mutation.el) mutation.el = mutation.tel; // alias
        var $el = $(mutation.el);
        if ( mutation.addClass )    $el.addClass(mutation.addClass);
        if ( mutation.removeClass ) $el.removeClass(mutation.removeClass);
        if ( mutation.toggleClass ) $el.toggleClass(mutation.toggleClass);
        return true;
    }
    // # HQ
    this.nucleus = [];
    this.proteins = {};
    this.Ribosome = function(dna) {
        if (!dna || !dna.name) return false;
        var name = dna.name;
        var protein = { name:name, dna:{} };
        _.assign( protein.dna, dna );
        _.assign( protein, this.RibosomeGetsEvent(dna) );
        _.assign( protein, this.RibosomeGetsElements(dna) );
        _.assign( protein, this.RibosomeGetsAction(dna) );
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
    // # INTERFACE
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
        if ( dna.do && typeof(dna.do)==='function' )
            return {
                action: 'func',
                func: dna.do
            }
        else return {
                action: 'mutate',
                func: false
            }
    }
    // EXPORT
    this.DelegateClick = function(protein) {
        if ( !protein.el ) return false;
        if ( !protein.func )
            // Default action: css class mutation
            protein.func = function(e){
                app.Mutate({
                    el:protein.tel,
                    addClass:protein.dna.addClass,
                    removeClass:protein.dna.removeClass,
                    toggleClass:protein.dna.toggleClass
                });
                return true;
            }
        protein.el.addEventListener(protein.event_name, protein.func);
        return true;
    }
    this.DelegateScroll = function(protein) {
        if ( !protein.el ) return false;
        if ( !protein.dna.hasOptions ) protein.dna.hasOptions = {};
        var wp_dna = {};
        if ( protein.event_name )
            switch ( protein.event_name ) {
                case 'inview':
                    protein.launcher = 'inview';
                    break;
                case 'scrollInview':
                    protein.launcher = 'inview';
                    if ( protein.func ) {
                        wp_dna.entered = protein.func;
                    } else {
                        wp_dna.entered = function(direction){
                            mutation = {
                                el:protein.tel,
                                addClass:protein.dna.addClass,
                                removeClass:protein.dna.removeClass,
                                toggleClass:protein.dna.toggleClass
                            };
                            app.Mutate(mutation);
                        }
                        wp_dna.exited = function(direction){
                            mutation = {
                                el:protein.tel,
                                addClass:protein.dna.removeClass,
                                removeClass:protein.dna.addClass,
                                toggleClass:protein.dna.toggleClass
                            };
                            app.Mutate(mutation);
                        }
                        protein.func = true;
                    }
                    break;
                case 'scrollAway':
                    protein.launcher = 'inview';
                    if ( protein.func ) {
                        wp_dna.exited = protein.func;
                    } else {
                        wp_dna.exited = function(direction){
                            mutation = {
                                el:protein.tel,
                                addClass:protein.dna.addClass,
                                removeClass:protein.dna.removeClass,
                                toggleClass:protein.dna.toggleClass
                            };
                            app.Mutate(mutation);
                        }
                        wp_dna.entered = function(direction){
                            mutation = {
                                el:protein.tel,
                                addClass:protein.dna.removeClass,
                                removeClass:protein.dna.addClass,
                                toggleClass:protein.dna.toggleClass
                            };
                            app.Mutate(mutation);
                        }
                        protein.func = true;
                    }
                    break;
                case 'scrollIn':
                    protein.dna.hasOptions.direction = 'down';
                    protein.dna.hasOptions.offset = "100%";
                    break;
                case 'scrollTop':
                default:
                    protein.dna.hasOptions.direction = 'down';
                    break;
            }
        if ( !protein.func )
            protein.func = function(direction){
                var d = protein.dna.hasOptions.direction;
                var mutation;
                if ( d && d !== direction && !protein.dna.hasOptions.once ) mutation = {
                    el:protein.tel,
                    // reversed mutation
                    addClass:protein.dna.removeClass,
                    removeClass:protein.dna.addClass,
                    toggleClass:protein.dna.toggleClass
                };
                else mutation = {
                    el:protein.tel,
                    addClass:protein.dna.addClass,
                    removeClass:protein.dna.removeClass,
                    toggleClass:protein.dna.toggleClass
                };
                app.Mutate(mutation);
                return true;
            }
        // Use Waypoint lib
        _.assign( wp_dna, {
            element: protein.el,
            handler: protein.func
        });
        _.assign( wp_dna, protein.dna.hasOptions );
        if (protein.launcher==='inview') protein.Waypoint = new Waypoint.Inview(wp_dna);
        else                             protein.Waypoint = new Waypoint(wp_dna);
        protein.status = "ready";
    }
}
var app = new zlAppMaster();
/* ============================================================== */
