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
    this.Welcome = function() {
        this.Run(); // interface events
        zlPathdance.Welcome(); // svg paths
        return this;
    }
    this.Run = function() {
        this
            .report('start', 'AppMaster.Run')
            .report('timer-start', 'AppMasterTimer');
        this.Delegator.Prepare(this);
        for ( var i in this.nucleus )
            this.Ribosome(this.nucleus[i]);
        this
            .report('timer-stop', 'AppMasterTimer')
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
            this.report('Interface action was born: '+name);
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
        else if (msg==='timer-start') console.time(data);
        else if (msg==='timer-stop') console.timeEnd(data);
        else if (msg==='data') console.table(data);
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

/* ==============================================================
    path dance animation 1002, 2018.8.29
*/
function zlPathdanceMaster() {
    // # PUB
    this.path = function(dna) {
        this.InsertIntoNucleus(dna);
        return this;
    }
    this.Welcome = function () {
        if (!this.WelcomeTest()) return false;
        app
            .report('start','zlPathdanceMaster.Welcome')
            .report('timer-start', 'zlPathdanceMasterTimer');
        for ( var i in this.nucleus ) this.Ribosome(this.nucleus[i]);
        app
            .report('timer-stop', 'zlPathdanceMasterTimer')
            .report('divider')
            .report('SVG Dancing Paths are activated. Console command:')
            .report("zlPathdance.Profile('PathdanceName')")
            .report('divider')
            .report('end');
        requestAnimationFrame(zlPathdance.FrameEvent);
        return this;
    }
    this.FrameEvent = function(requestTime) {
        console.log('=== framemaser');
        console.log(this);
    }
    // # HQ
    this.nucleus = [];
    this.dance = {};
    this.Ribosome = function(dna) {
        this.dance[dna.name] = { name:dna.name, dna:dna };
        var ThisDance = this.dance[dna.name];
        _.assign(ThisDance, this.svgDigest(app.el(dna.svg)));
        this.RibosomeUpdatesTiming(ThisDance);
        this.RibosomeUpdatesLogic(ThisDance);
        ThisDance.isReady = true;
        app.report('Svg.path animation was born: '+ThisDance.name);
    }
    // # DANCE LORDS
    this.DoReset = function(name) {
        this.dance[name].i = 0;
        this.DoDraw(name);
        return this;
    }
    this.DoDraw = function(name,step_index){
        var j, i = step_index ? step_index : 0;
        var dance = this.dance[name];
        var step = dance.step[i];
        var dx = function(x){ return step.path[x].d; }
        for (j=0;j<dance.size;j++)
            this.PathPainter({
                el: dance.dancelPels[j],
                d: dx(j)
            });
        return dance.dancel;
    }
    this.DoStep = function(name,step_index){
        
    }
    this.PathPainter = function(order) {
        var $el = $(order.el)
        if ($el && order.d)
            $el.attr('d',order.d);
        return true;
    }
    // # INTERFACE
    this.InsertIntoNucleus = function(dna) {
        if (!dna) return false;
        var rna = {};
        _.assign(rna,dna);
        if ( !rna.name ) rna.name = 'Ogodei_'+this.nucleus.length;
        this.nucleus.push(rna);
        return true;
    }
    this.WelcomeTest = function() {
        var test = true;
        if (!app) {
            test = false;
            console.log('Critical! ༼°▽°༽: zlPathdanceMaster can`t dance without app/zlAppMaster')
        }
        return test;
    }
    this.svgDigest = function(el) {
        // parse svg node to pathdance model
        var svgNode = {
            el:el,
            episodes:$('.pathdance-step',el).length,
            step: [],
            dancel: false, // DANCe inside ELement - output <g> tag
            dancelPels: []
        };
        var nodeStep, i;
        for (i=0;i<svgNode.episodes;i++) {
            nodeStep = {
                el:$('.pathdance-step.step'+i,svgNode.el)[0],
                path:[]
            };
            _.forEach($('path',nodeStep.el),function(pel){
                nodeStep.path.push({
                    el:pel,
                    d:$(pel).attr('d')
                });
                svgNode.dancelPels.push(pel);
            });
            svgNode.step.push(nodeStep);
        }
        svgNode.dancel = svgNode.step[0].el;
        svgNode.size = $('path',svgNode.dancel).length;
        return svgNode;
    }
    this.RibosomeUpdatesTiming = function(dance){
        var timingDefault = dance.dna.timingDefault ? dance.dna.timingDefault : 250;
        var tx = function(si){
            if ( dance.dna.timing && dance.dna.timing[si] && dance.dna.timing[si].t )
            return dance.dna.timing[si].t;
            else return timingDefault;
        }
        for (var i=0;i<dance.episodes;i++) {
            dance.step[i].t = tx(i);
        }
        return this;
    }
    this.RibosomeUpdatesLogic = function(dance){
        _.assign(dance, {
            comeback: dance.dna.comeback ? dance.dna.comeback : false,
            loop: dance.dna.loop ? dance.dna.loop : false,
            isActive: false
        });
        return dance;
    }
    this.Profile = function(name){
        var dance = this.dance[name];
        var cd, i;
        app.report('start', 'PathDanceReport for '+name)
        app.report(
            (dance.isReady ? '.isReady ' : 'NOT READY ') +
            (dance.comeback ? '.comeback ' : '') +
            (dance.loop ? '.loop ' : '')
        );
        app.report(
            'step episodes: ' + dance.episodes +
            ' / initial paths: ' + dance.size
        );
        for (i=0;i<dance.episodes;i++) {
            cd = dance.step[i];
            app.report('-- step['+i+'] -- paths:'+cd.path.length+' -- t:'+cd.t);
        }
        var el_report = {
            svg: {el:dance.el},
            dancel: {el:dance.dancel}
        };
        for (i=0;i<dance.size;i++) el_report['path'+i] = {el:dance.dancelPels[i]};
        app
            .report('DOM elements:')
            .report('data',el_report);

        app.report('end');
        return dance;
    }
}
var zlPathdance = new zlPathdanceMaster();

/* ============================================================== */