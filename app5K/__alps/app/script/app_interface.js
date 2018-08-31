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
        app.report('ʕ⊙ᴥ⊙ʔ app.Welcome');
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
        var PD = zlPathdance,
            weStillHaveActiveDance = false,
            name;
        for (name in PD.dance)
            if (PD.dance[name].isActive)
                weStillHaveActiveDance =
                    PD.DoFrameDance(PD.dance[name], requestTime)
                    ? true
                    : weStillHaveActiveDance;
        //app.report('weStillHaveActiveDance:'+weStillHaveActiveDance);
        if (weStillHaveActiveDance) requestAnimationFrame(zlPathdance.FrameEvent);
    }
    this.DoFrameDance = function(dance, requestTime) {
        if (!dance.startTime) dance.startTime = requestTime;
        var i = dance.i;
        var passTime = requestTime - dance.startTime;
        var fullTime = dance.step[i].t;
        var dx = fullTime > 0 ? passTime/fullTime : 0;
        this.PaintStepMovement(dance, dx);
        return this.CheckMovementAndConfirm(dance, dx);
        /*app.report(dance);
        app.report(requestTime);
        app.report(passTime);
        app.report(fullTime);*/
        //app.report(this);
        //return passTime<fullTime;
    }
    this.PaintStepMovement = function(dance, dx) {
        var j, dUpdated;
        for (j=0;j<dance.size;j++) {
            dUpdated = dance.step[dance.i].path[j].dx(dx);
            if (dUpdated) $(dance.dancelPels[j]).attr('d',dUpdated);
        }
            
    }
    this.CheckMovementAndConfirm = function(dance, dx) {

        // continue this step?
        if (dx<1) return true;

        // finish it
        this.FinishStep(dance);
        dance.i++;
        app.report('currenti:'+dance.i);

        // continue next step by order?
        if ( dance.i < dance.episodes ) return true;

        // continue next step by rules?
        var nextStepIsFound = false;

        return nextStepIsFound;
    }
    this.FinishStep = function(dance) {
        dance.startTime = false;
    }
    // # HQ
    this.nucleus = [];
    this.dance = {};
    this.Ribosome = function(dna) {
        this.dance[dna.name] = { name:dna.name, dna:dna };
        var ThisDance = this.dance[dna.name];
        _.assign(ThisDance, this.svgDigest(app.el(dna.svg)));
        this
            .RibosomeUpdatesLogic(ThisDance)
            .RibosomeUpdatesTiming(ThisDance)
            .Actiosome(ThisDance);
        ThisDance.isReady = true;
        app.report('Svg.path animation was born: '+ThisDance.name);
    }
    this.Actiosome = function(dance) {
        if ( dance.episodes < 2 ) return false;
        var i,j,targeti;
        var lastStep = dance.episodes*1 - 1;
        app.report('laststep'+lastStep);
        var stepAfterLastStep = dance.comeback || dance.loop ? 0 : false;
        for (i=0;i<=lastStep;i++)
            for (j=0;j<dance.size;j++) {
                targeti = i===lastStep ? stepAfterLastStep : i*1+1 ;
                app.report(i+'--'+targeti);
                //app.report(dance.step[i].path[j].d);
                //app.report(dance.step[targeti].path[j].d);
                var d1 = dance.step[i].path[j].d;
                var d2 = dance.step[targeti].path[j].d;
                dance.step[i].path[j].dx =
                    (
                        targeti===false
                        ?   function(x){return false;}
                        :   flubber.interpolate(
                                d1,
                                d2
                            )
                    );
                //app.report(dance.step[i].path[j].dx(1));
                //if(i>0) app.report(zlPathdance.dance["PathdanceName"].step[1].path[0].dx(1));
            }
        app.report('divider');
        app.report(zlPathdance.dance["PathdanceName"].step[1].path[0].dx(1));
        app.report(zlPathdance.dance["PathdanceName"].step[3].path[0].dx(1));
        app.report('divider');
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
    /*
    this.PathPainter = function(order) {
        app.report(order.el.attributes.d.value);
        app.report(app.el('#DemoArrow .step0 path'));
        //order.el.d = 'zzz';order.d;
        var n = order.el.attributes.d.value;
        app.report('divider');
        app.report(n);
        app.report(order.d);
        app.report('divider');
        app.report('timer-start','zlAttr1');
        order.el.attributes.d.value = order.d;
        app.report('timer-stop','zlAttr1');
        app.report('timer-start','zlAttr3');
        order.el.attributes.d.value = n;
        order.el.attributes.d.value = order.d;
        app.report('timer-stop','zlAttr3');
        app.report(order.el.attributes.d.value);
        app.report('timer-start','zlAttr2');
        for ( var m = 1; m<1000; m++) {
            order.el.attributes.d.value = n;
            order.el.attributes.d.value = order.d;
        }
        app.report('timer-stop','zlAttr2');
        var display = zlPathdance.dance["d1"].dancel.style.display;
        zlPathdance.dance["d1"].dancel.style.display = "none";
        app.report('timer-start','zlAttr4');
        for ( var m = 1; m<1000; m++) {
            order.el.attributes.d.value = n;
            order.el.attributes.d.value = order.d;
        }
        zlPathdance.dance["d1"].dancel.style.display = display;
        app.report('timer-stop','zlAttr4');
        //for (var m=1;m<10;)
        
        //var $el = $(order.el)
        //if ($el && order.d)
            //var el = order.el;
            //el.d = 'zzz';
            //app.report('divider');
            //console.log(el.d);
            //app.report('divider');
            //$el.attr('d',order.d);
        return true;
    }
    */
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
                console.log(ii+'ii');
            }
            dance.episodes = dance.step.length;
        }
        return this;
    }
    this.Profile = function(name){
        var dance = this.dance[name];
        var cd, i,j, data;
        app.report('start', 'PathDanceReport for '+name)
        app.report(
            (dance.isReady ? '.isReady ' : 'NOT READY ') +
            (dance.comeback ? '.comeback ' : '') +
            (dance.loop ? '.loop ' : '')
        );
        data = {};
        for (i=0;i<dance.episodes;i++)
            data['step'+i] = {
                'paths':dance.step[i].path.length,
                't':dance.step[i].t
            };
        app
            .report('step episodes: '+dance.episodes+' / initial paths: '+dance.size)
            .report('data',data);
        data = {
            svg: {el:dance.el},
            dancel: {el:dance.dancel}
        };
        for (j=0;j<dance.size;j++) data['path'+j] = {el:dance.dancelPels[j]};
        app.report('data',data);

        app.report('end');
        return dance;
    }
}
var zlPathdance = new zlPathdanceMaster();

/* ============================================================== */