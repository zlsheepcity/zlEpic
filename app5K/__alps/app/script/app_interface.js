/*
    # Interface js functions, v5001
    Last code revision: 2018.9.26

    ## Globals:

        app
        zlPathdance

    ## Required

        lodash
        domtastic ($)
        waypoints + inview (scroll)
        flubber (svg paths)

*/
/* ==============================================================
    app master v1002, 2018.8.28
    Samples:

        app.do({
            name:       'ClickToToggleClass',
            when:       '.myElement__Trigger',
            has:        'click',
            toggleClass:   'cssClassName',
            for:        '.myElement__targetToChange'
        });

        app.do({
            name:       'ScrollToAddClass',
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

        myDOM_Element = app.el('.myElement__CSSquery');

        app.Mutate({
            el:         '.myElement',
            addClass:   'className'
        });
        app.Mutate({
            el:            myJS_Element,
            toggleClass:   'className'
        });

*/
zlAppMaster__DnaConfig = {
    hasSilentReports: false, // turns off console.log
    usePathdance: true
}
function zlAppMaster(dna) {
    this.dna = _.assign( {}, dna );
    // # ======================================== SETTINGS
    this.isHere = false; // not here after initialization
    this.supportedEvents = {
    //  event_name:     event_type
        click:          'click',
        scrollTop:      'scroll',
        scrollIn:       'scroll',
        scrollInview:   'scroll',
        scrollAway:     'scroll',
        inview:         'scroll'
    };
    this.Welcome = function(inject_dna) {
        _.assign( this.dna, inject_dna );
        this.Ribosome();
        this.WelcomePlugins();
        // finish
        this.isHere = true;
        this.report('ʕ⊙ᴥ⊙ʔ app.Welcome');
        return this;
    }
    // # ======================================== PUB
    this.do = function(dna) {
        this.InsertIntoNucleus(dna);
        if ( this.isHere ) this.Ribosome();
        return this;
    }
    this.el = function(query) {
        return this.El(query);
    }
    this.Mutate = function(mutation) {
        return this.ElMutate(mutation);
    }
    this.report =function (msg,data) {
        if ( this.hasSilentReports ) return this;
        return this.Reporter(msg,data);
    }
    // # ======================================== STORAGE
    this.nucleus = []; // scheduled interface actions
    this.proteins = {}; // active interface actions
    // # ======================================== LORDS
    this.Ribosome = function() {
        this // --------------------------------------
            .report('start', 'AppMaster.Ribosome')
            .report('timer-start', 'NucleusSynthesisTimer')
            .report('nucleus size: '+this.nucleus.length, _.assign([],this.nucleus))
            .report('divider');
        this
            .Preparator('delegator',{app:this});
        if (this.nucleus.length)
            for ( var i in this.nucleus )
                if(!this.nucleus[i].wasRibosomed) {
                    this.RibosomeSynthesis(
                        this.nucleus[i],
                        this.Delegator
                    );
                    this.nucleus[i].wasRibosomed = true;
                }
        this // --------------------------------------
            .report('divider')
            .report('timer-stop', 'NucleusSynthesisTimer')
            .report('Interface update completed. Console command:')
            .report('app.proteins.ACTION_NAME')
            .report('divider')
            .report('end');
        return this;
    }
    this.Preparator = function(target, data) { // Preparator prepares targets
        var do_prepare = {
            'delegator': function({app}) {
                if (!app.Delegator) app.Delegator = {};
                app.Delegator.click = app.DelegateClick;
                app.Delegator.scroll = app.DelegateScroll;
            }
        };
        do_prepare[target](data);
        return this;
    }
    this.Delegator = {};
    // # ======================================== SERVICES
    this.InsertIntoNucleus = function(dna) {
        if (!dna) return false;
        if (!dna.name) dna.name = 'Ogodei_'+this.nucleus.length;
        this.nucleus.push(dna);
        return true;
    }
    this.RibosomeSynthesis = function(dna, delegator) {
        var name, protein;
        name = dna.name;
        protein = { name:name, dna:{} };
        _.assign( protein.dna, dna );
        _.assign( protein, this.RibosomeGetsEvent(dna) );
        _.assign( protein, this.RibosomeGetsElements(dna) );
        _.assign( protein, this.RibosomeGetsAction(dna) );
        this.proteins[name] = protein;
        if ( protein.event_type && delegator && delegator[protein.event_type] ) {
            delegator[protein.event_type](this.proteins[name]);
            this.report('Interface action was born: '+name);
        }
        return true;
    }
    this.RibosomeGetsEvent = function(dna) {
        var event_name, event_type;
        event_name = dna.has ? dna.has : 'click'; // click is default
        event_type =
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
        el_trigger = this.el(dna.when);
        el_target = dna.for ? this.el(dna.for) : el_trigger ;
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
    // # ======================================== PLUGINS

    // # ======================================== DOM EXPORT
    this.ElMutate = function(mutation){
        var $el;
        if (!mutation) return false;
        if (!mutation.el) mutation.el = mutation.tel; // alias
        $el = $(mutation.el);
        if ( mutation.addClass )    $el.addClass(mutation.addClass);
        if ( mutation.removeClass ) $el.removeClass(mutation.removeClass);
        if ( mutation.toggleClass ) $el.toggleClass(mutation.toggleClass);
        return true;
    }
    this.El = function(query) {
        return document.querySelector(query);
    }
    // # ======================================== EXPORT
    this.WelcomePlugins = function() {
        if (this.dna.usePathdance) zlPathdance.Welcome();
        return this;
    }
    this.Pathdance = {
        describe:
            this.dna.usePathdance
            ? function(dna){zlPathdance.path(dna)}
            : function(){return false},
        run:
            this.dna.usePathdance
            ? function(name, movement){zlPathdance.fire(name)}
            : function(){return false}
    }
    this.Reporter = function(msg,data) {
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
    };
    this.DelegateClick = function(protein) {
        if ( !protein.el ) return false;
        if ( !protein.func ) // Default: Mutate css class
            protein.func = function(e){
                app.Mutate({
                    el:             protein.tel,
                    addClass:       protein.dna.addClass,
                    removeClass:    protein.dna.removeClass,
                    toggleClass:    protein.dna.toggleClass
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
var app = new zlAppMaster(zlAppMaster__DnaConfig);
/* ============================================================== */

/* ==============================================================
    path dance animation 1002, 2018.8.29
*/
function zlPathdanceMaster() {
    // # ======================================== SETTINGS
    this.isHere = false; // not here after initialization
    this.Welcome = function () {
        if (!this.WelcomeTest()) return false;
        this
            .report('start','zlPathdanceMaster.Welcome')
            .report('timer-start', 'zlPathdanceMasterTimer');
        for ( var i in this.nucleus )
            this.Ribosome(this.nucleus[i]);
        this
            .report('timer-stop', 'zlPathdanceMasterTimer')
            .report('divider')
            .report('SVG Dancing Paths are activated. Console command:')
            .report("zlPathdance.Profile('PathdanceName')")
            .report('divider')
            .report('end');
        this.isHere = true;
        this.Run(); // for autostart dancers
        return this;
    }
    // # ======================================== PUB
    this.path = function(dna) {
        this.InsertIntoNucleus(dna);
        return this;
    }
    this.fire = function(name, movement) {
        if (this.dance[name].isActive) return this;
        this.dance[name].isActive = true;
        this.Run();
        return this;
    }
    // # ======================================== STORAGE
    this.nucleus = [];
    this.dance = {};
    // # ======================================== LORDS
    this.Ribosome = function(dna) {
        this.dance[dna.name] = { name:dna.name, dna:dna };
        var ThisDance = this.dance[dna.name];
        _.assign(ThisDance, this.svgDigest(dna.svg));
        this
            .RibosomeUpdatesLogic(ThisDance)
            .RibosomeUpdatesTiming(ThisDance)
            .Actiosome(ThisDance);
        this.UpdateSVGstatus('ready', { svg:dna.svg });
        ThisDance.isReady = true;
        this.report('Svg.path animation was born: '+ThisDance.name);
    }
    this.Actiosome = function(dance) {
        if ( dance.episodes < 2 ) return false;
        var i,j,targeti;
        var lastStep = dance.episodes*1 - 1;
        var stepAfterLastStep = dance.comeback || dance.loop ? 0 : lastStep;
        for (i=0;i<=lastStep;i++)
            for (j=0;j<dance.size;j++) {
                targeti = i===lastStep ? stepAfterLastStep : i*1+1 ;
                var d1 = dance.step[i].path[j].d;
                var d2 = dance.step[targeti].path[j].d;
                dance.step[i].path[j].dx =
                    (
                        targeti===false
                        ?   function(x){return false;}
                        :   this.Transformer(
                                d1,
                                d2
                            )
                    );
            }
        return this;
    }
    // # ======================================== SERVICES
    this.InsertIntoNucleus = function(dna) {
        if (!dna) return false;
        var rna = {};
        _.assign(rna,dna);
        if ( !rna.name ) rna.name = 'Ogodei_'+this.nucleus.length;
        this.nucleus.push(rna);
        return true;
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
            autostart:  dance.dna.autostart ? dance.dna.autostart : false,
            autoloop:   dance.dna.autoloop ? dance.dna.autoloop : false,
            comeback:   dance.dna.comeback ? dance.dna.comeback : false,
            loop:       dance.dna.loop ? dance.dna.loop : false,
            isActive:   dance.dna.autostart ? true : false,
            i: 0
        });
        if (dance.comeback && dance.episodes>2) {
            var i,j,nodeStep;
            var ii = dance.episodes;
            for (i=dance.episodes*1-2;i>0;i--) {
                nodeStep = {
                    el: dance.step[i].el,
                    path: _.union([],dance.step[i].path),
                    t: dance.step[i].t*1+0
                }
                dance.step[ii] = nodeStep;
                ii++;
            }
            dance.episodes = dance.step.length;
        }
        return this;
    }
    this.Profile = function(name){
        var dance = this.dance[name];
        var cd, i,j, data;
        this.report('start', 'PathDanceReport for '+name)
        this.report(
            (dance.isReady ? 'isReady ' : 'NOT READY ') +
            (dance.comeback ? 'comeback ' : '') +
            (dance.loop ? 'loop ' : '')
        );
        data = {};
        for (i=0;i<dance.episodes;i++)
            data['step'+i] = {
                'paths':dance.step[i].path.length,
                't':dance.step[i].t
            };
        this
            .report('step episodes: '+dance.episodes+' / initial paths: '+dance.size)
            .report('data',data);
        data = {
            svg: {el:dance.el},
            dancel: {el:dance.dancel}
        };
        for (j=0;j<dance.size;j++) data['path'+j] = {el:dance.dancelPels[j]};
        this.report('DOM:', data);

        this.report('end');
        return dance;
    }
    this.DoFrameDance = function(dance, requestTime) {
        if (!dance.startTime) dance.startTime = requestTime;
        var i = dance.i;
        var passTime = requestTime - dance.startTime;
        var fullTime = dance.step[i].t;
        var dx = fullTime > 0 ? passTime/fullTime : 0;
        this.PaintStepMovement(dance, dx);
        return this.CheckMovementAndConfirm(dance, dx);
    }
    this.PaintStepMovement = function(dance, dx) {
        var j, dUpdated;
        for (j=0;j<dance.size;j++) {
            dUpdated = dance.step[dance.i].path[j].dx(dx);
            if (dUpdated) this.UpdateSVGpath(dance.dancelPels[j], dUpdated);
        }
        return this;
    }
    this.CheckMovementAndConfirm = function(dance, dx) {
        // continue this step?
        if (dx<1) return true;

        // then finish it
        this.FinishStep(dance);
        dance.i++;

        // continue next step by order?
        if ( dance.i < dance.episodes ) return true;

        // then finish dance
        dance.i = 0;
        dance.isActive = false;

        return false;
    }
    this.FinishStep = function(dance) {
        dance.startTime = false;
        return this;
    }
    // # DANCE INTERFACE
    this.DoReset = function(name) {
        this.dance[name].i = 0;
        this.DoDraw(name);
        return this;
    }
    this.DoDraw = function(name, step_index){
        var j, i = step_index ? step_index : 0;
        var dance = this.dance[name];
        var step = dance.step[i];
        var dx = function(x){ return step.path[x].d; }
        for (j=0;j<dance.size;j++)
            $(dance.dancelPels[j]).attr('d',dx(j));
        return dance.dancel;
    }
    this.DoStep = function(name, step_index){
        
    }
    // # ======================================== EXPORT
    this.svgDigest = function(svg_query) {
        // parse svg node to pathdance model
        var el = app.el(svg_query);
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
    this.UpdateSVGstatus = function(reason, data) {
        var update_action = {
            ready: function({svg}){
                app.Mutate({
                    el: svg,
                    addClass: 'pathdance-svg'
                })
            }
        }
        update_action[reason](data);
        return this;
    }
    this.UpdateSVGpath = function(el,d) {
        $(el).attr('d',d);
        return this;
    }
    this.WelcomeTest = function() {
        var test = true;
        if (!app) {
            test = false;
            this.report('Critical! ༼°▽°༽: zlPathdanceMaster can`t dance without app/zlAppMaster')
        }
        return test;
    }
    this.Run = function() {
        requestAnimationFrame(zlPathdance.FrameEvent);
        return this;
    }
    this.FrameEvent = function(requestTime) {
        var PD = zlPathdance,
            weStillHaveActiveDance = false,
            name;
        for (name in PD.dance)
            if (PD.dance[name].isActive)
                weStillHaveActiveDance =
                    PD.DoFrameDance(PD.dance[name], requestTime)
                    ? true
                    : weStillHaveActiveDance;
        if (weStillHaveActiveDance) requestAnimationFrame(zlPathdance.FrameEvent);
    }
    this.Transformer = function(d1, d2) {
        return flubber.interpolate(d1, d2)
    }
    this.report = function(msg, data) {
        app.report(msg, data);
        return this;
    }
}
var zlPathdance = new zlPathdanceMaster();

/* ============================================================== */