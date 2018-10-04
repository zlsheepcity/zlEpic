/*
    # Interface functions, v5001

        Last code revision: 2018.10.4

    ## Required libs

        lodash
        domtastic ($)
        waypoints + inview (scroll)
        flubber (svg paths)

*/
/* ==============================================================
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

        app.mutate({
            el:         '.myElement',
            addClass:   'className'
        });
        app.mutate({
            el:            myJS_Element,
            toggleClass:   'className'
        });

        app.forload(function(){
            console.log('afterload');
        });

*/
var zlAppKing__DnaConfig = {

    name:                   'app', // King
    isSilentKing:           false, // Console reports

    //                      Native libraries (Queens)
    queens: {
        list: {
            interface:      'appInterfaceQueen',
            pathdance:      'appPathdanceQueen',
            dev:            'zlPathdance'
        }
    }

}
function zlChromosome(organism, dna) {
    // # ======================================== SETTINGS
    this.chromosome = {
        base_dna: { a__genType:'wild', name:'wild' },
        born_dna: dna
    }
    // # ======================================== SERVICES
    this.Inject = function(dna) {
        this.chromosome.fresh_dna = dna;
        _.assign(
            this,
            this.chromosome.base_dna,
            this.chromosome.fresh_dna
        );
        return this;
    }
    this.Infect = function(dna) {
        var current_dna = _.assign({}, this);
        this.chromosome.fresh_dna = dna;
        _.assign(
            this,
            this.chromosome.base_dna,
            this.chromosome.fresh_dna,
            current_dna
        );
        return this;
    }
    this.Report = function() {
        var report = {};
        _.assign(report, this);
        _.unset(report, 'chromosome');
        _.unset(report, 'Inject');
        _.unset(report, 'Infect');
        _.unset(report, 'Report');
        return report;
    }
    // # ======================================== AUTO BORN PROCESS
    this.Inject(dna);
}
function zlProtein(dna) {
    this.dna = new zlChromosome(this, _.assign({
        a__genType:         'resource',
        name:               'BosettiProtein'
        }, dna ));
}
function zlAppKing(dna) {
    // # ======================================== SETTINGS
    this.dna = new zlChromosome(
        this,
        _.assign({
            a__genType:         'king',
            name:               'AppKing'
            }, dna )
    );
    this.Welcome = function() {
        this.report('ʕ⊙ᴥ⊙ʔ Please, Welcome King '+this.dna.name);
        this.Preparator('Delegator',{app:this});
        this.WelcomePlugins();
        this.WelcomeParty();
        return this;
    }
    this.Profile = function( update = false ) {

        this // -->
        .report('start', 'King '+this.dna.name+'.Status')
        .report('dna', this.dna)
        .report('divider')
        .report(this.dna.name + '.eggs // ' + this.eggs.length)
        .report('divider');

        var role, queens = this.dna.queens.list;
        for ( role in queens )
            this.report(
                queens[role] + '.Profile() // '
                + window[queens[role]].king
                + ' → ' + role
                );

        this // -->
        .report('divider')
        .report('end');

        return this;
    }
    // # ======================================== PUB
    this.do = function(dna) {
        this.ScheduleAction('Interface', dna);
        return this;
    }
    this.el = function(query) {
        return this.El(query);
    }
    this.forload = function(f) {
        if ( typeof(f) === "function" )
            this.eggs.push(f);
        return this;
    }
    this.mutate = function(mutation) {
        /*
            mutation.v1.0 {
                el: element,
                addClass: classname,
                removeClass: classname,
                toggleClass: classname,
            }
        */
        if ( !mutation || !mutation.el ) return false;
        return this.ElMutate(mutation);
    }
    this.report =function (msg,data) {
        if ( this.isSilentKing ) return this; // tsss
        return this.Reporter(msg,data);
    }
    // # ======================================== STORAGE
    this.eggs = []; // custom functions «on load»
    // # ======================================== LORDS
    this.KingPower = function(queen, king = false) {
        king = king ? king : this.dna.name ;
        queen.king = king;
        queen.Delegator = this.Delegator;
        queen.el = function(query){return window[king].el(query)};
        queen.report =function(msg,data){return window[king].report(msg,data)};
        return this;
    };
    this.Chromosoming = function(substance, fresh_dna, params) {
        var chromosome, old_dna;
        chromosome = substance.chromosome || { a__genType:'wild' };
        old_dna = params && params.mix && substance.dna ? substance.dna : {};
        substance.dna = _.assign( chromosome, old_dna, fresh_dna );
        return substance.dna;
    }
    this.Preparator = function(target, data) { // Preparator prepares targets
        var do_prepare = {
            'Delegator': function({app}) {
                if (!app.Delegator) app.Delegator = {};
                app.Delegator.click = app.DelegateClick;
                app.Delegator.scroll = app.DelegateScroll;
            }
        };
        do_prepare[target](data);
        return this;
    }
    this.Delegator = {
        Interface: function(king){ return window[king.dna.queens.list.interface]}
    };
    this.WelcomeParty = function(){
        this.report(
            'ʕ⊙ᴥ⊙ʔ '
            + this.dna.name
            + '.Welcome party! — That moment, then app is ready.'
        );
        this.EggEclosion();
        return this;
    }
    this.EggEclosion = function() {
        for ( var i in this.eggs )
            if ( typeof(this.eggs[i]) === 'function') {
                this.eggs[i]();
                this.eggs[i] = {status:'eclosed',f:this.eggs[i]};
            }
        return this;
    }
    // # ======================================== SERVICES
    this.WelcomePlugins = function() {
        var role, queen, queens = this.dna.queens.list;
        for ( role in queens ) {
                queen = window[queens[role]];
                this.KingPower(queen);
                queen.Welcome(this);
            }
        return this;
    }
    this.ScheduleAction = function(role, dna) {
        this.Delegator[role](this).take(dna)
        return this;
    }
    // # ======================================== DOM
    this.ElMutate = function(mutation){
        var $el = $(mutation.el);
        if ( mutation.addClass )    $el.addClass(mutation.addClass);
        if ( mutation.removeClass ) $el.removeClass(mutation.removeClass);
        if ( mutation.toggleClass ) $el.toggleClass(mutation.toggleClass);
        return true;
    }
    this.El = function(query) {
        return document.querySelector(query);
    }
    // # ======================================== UNPURE
    this.Pathdance = {
        registration:
            this.dna.queens.list.pathdance
            ? function(dna){appPathdanceQueen.pop(dna)}
            : function(){return false},
        describe:
            this.dna.queens.list.dev
            ? function(dna){zlPathdance.path(dna)}
            : function(){return false},
        run:
            this.dna.queens.list.dev
            ? function(name, movement){zlPathdance.fire(name)}
            : function(){return false}
    }
    this.Reporter = function(msg,data) {
        if (msg==='start') console.group(data);
        else if (msg==='end') console.groupEnd();
        else if (msg==='timer-start') console.time(data);
        else if (msg==='timer-stop') console.timeEnd(data);
        else if (msg==='data') console.table(data);
        else if (msg==='dna') console.table(data.Report());
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
                app.mutate({
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
                            app.mutate(mutation);
                        }
                        wp_dna.exited = function(direction){
                            mutation = {
                                el:protein.tel,
                                addClass:protein.dna.removeClass,
                                removeClass:protein.dna.addClass,
                                toggleClass:protein.dna.toggleClass
                            };
                            app.mutate(mutation);
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
                            app.mutate(mutation);
                        }
                        wp_dna.entered = function(direction){
                            mutation = {
                                el:protein.tel,
                                addClass:protein.dna.removeClass,
                                removeClass:protein.dna.addClass,
                                toggleClass:protein.dna.toggleClass
                            };
                            app.mutate(mutation);
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
                app.mutate(mutation);
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
    // # ======================================== BORN PROCESS
    this.report('ʕ⊙ᴥ⊙ʔ New AppKing: '+this.dna.name);
}
var app = new zlAppKing(zlAppKing__DnaConfig);
/* ============================================================== */

/* ==============================================================
    Interface Queen 1002, 2018.10.4
    - ux events → scheduled actions
*/
function zlInterfaceQueen(dna) {
    // # ======================================== SETTINGS
    this.dna = new zlChromosome(this, _.assign({
        a__genType:         'queen',
        a__genRole:         'interface',
        name:               'Janja_the_InterfaceQueen'
        }, dna ));
    this.supportedEvents = {
    //  event_name:     event_type
        click:          'click',
        scrollTop:      'scroll',
        scrollIn:       'scroll',
        scrollInview:   'scroll',
        scrollAway:     'scroll',
        inview:         'scroll'
    };
    this.Welcome = function(king) {
        //this.king = king.dna.name;
        //this.Delegator = king.Delegator;

        this // -->
        .report('start', this.dna.name+'.Welcome')
        .report('timer-start', this.dna.name+'WelcomeTimer');

        this.Ribosome();

        this // -->
        .report('timer-stop', this.dna.name+'WelcomeTimer')
        .report(this.dna.name+'.Profile()')
        .report('ʕ⊙ᴥ⊙ʔ Interface ready!')
        .report('divider')
        .report('end');

        return this;
    }
    this.Profile = function( update = false ) {

        this // -->
        .report('name: ' + this.dna.name)
        .report('king: ' + this.king)
        .report('divider');

        this // -->
        .report('DNA: ' + this.dna.name + '.dna')
        .report('data', this.dna)
        .report('divider')
        .report('PROTEINS: ' + this.dna.name + '.proteins')
        .report('data', this.proteins)
        .report('divider');

        return this;
    }
    // # ======================================== PUB
    this.take = function(dna) {
        this.InsertIntoNucleus(dna);
        if ( this.king ) this.Ribosome();
        return this;
    }
    // # ======================================== STORAGE
    this.nucleus = []; // scheduled interface actions
    this.proteins = {}; // active interface actions
    // # ======================================== LORDS
    this.Ribosome = function() {

        this // -->
        .report('# nucleus('+this.nucleus.length+') → ribosoming...');

        for ( var i in this.nucleus )
            if(!this.nucleus[i].wasRibosomed) {
                this.RibosomeSynthesis( this.nucleus[i] );
                this.nucleus[i].wasRibosomed = true;
            }

        this // -->
        .report('divider');
        return this;

    }
    // # ======================================== SERVICES
    this.InsertIntoNucleus = function(dna) {
        if (!dna) return false;
        if (!dna.name) dna.name = 'Ogodei_'+this.nucleus.length;
        this.nucleus.push(dna);
        return true;
    }
    this.RibosomeSynthesis = function(dna) {
        var name, protein, delegator;
        name = dna.name;
        delegator = this.Delegator;

        protein = new zlProtein(dna);
        this.proteins[name] = _.assign(
            protein,
            this.InterfaceEventDescription(dna),
            this.InterfaceActionDescription(dna),
            this.FindHome(dna)
        );

        if ( protein.event_type && delegator && delegator[protein.event_type] ) {
            delegator[protein.event_type](this.proteins[name]);
            this.report(this.dna.name+'.proteins.'+name);
        }
        return true;
    }
    this.InterfaceEventDescription = function(dna) {
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
    this.InterfaceActionDescription = function(dna) {
        if ( dna.do && typeof(dna.do)==='function' )
            return {
                action: 'func',
                func: dna.do
            }
        else return {
                action: 'mutate', // default action
                func: false
            }
    }
    this.FindHome = function(dna) {
        var el_trigger, el_target;
        el_trigger = this.el(dna.when);
        el_target = dna.for ? this.el(dna.for) : el_trigger ;
        return {
            el:  el_trigger,
            tel: el_target
        }
    }
}
var appInterfaceQueen = new zlInterfaceQueen({name:'appInterfaceQueen'});
/* ============================================================== */

/* ==============================================================
    path dance animation 1003, 2018.9.26
*/
function zlPathGMO(dna) {
    this.chromosome = {
        a__genType:      'resource',
        a__genFamily:    'pathdance',
        wasRibosomed: false,
        isDancing: false
    };
    this.dna = app.Chromosoming(this, dna);
    this.virus = function(rules){
        console.log('Play dance');
        return this;
    };
}
function zlPathdanceQueen(dna) {
    // # ======================================== SETTINGS
    this.dna = new zlChromosome(this, _.assign({
        a__genType:         'queen',
        a__genRole:         'pathdance',
        name:               'Alexa_the_PathdanceQueen'
        }, dna
    ));
    /*this.chromosome = {
        a__genType:         'queen',
        a__genFamily:       'pathdance',
        name:               'Alexa_the_PathdanceQueen'
    };
    this.dna = app.Chromosoming(this,dna);*/
    this.Welcome = function(king) {
        this.king = king.dna.name;
        this.Delegator = king.Delegator;

        this
            .WelcomeMorning()
            .WelcomeDinner()
            .WelcomeParty();

        return this;
    }
    this.WelcomeMorning = function() {
        this
            .report('start', this.dna.name+'.Welcome')
            .report('timer-start', 'zlPathdanceQueenTimer');
        return this;
    }
    this.WelcomeDinner = function() {
        this.Popper();
        return this;
    }
    this.WelcomeParty = function() {
        this
            .report('divider')
            .report('timer-stop', 'zlPathdanceQueenTimer')
            .report('SVG Pathdances are activated.')
            .report('divider')
            .report('end');
        return this;
    }
    // # ======================================== PUB
    this.pop = function(dna) {
        this.InsertIntoNucleus(dna);
        return this;
    }
    this.virus = function(name,dna){
        if (this.proteins[name]) this.proteins[name].virus(dna);
        return this;
    }
    // # ======================================== STORAGE
    this.nucleus = [];
    this.proteins = {};
    // # ======================================== LORDS
    this.Popper = function(){
        for (var i in this.nucleus) this.Ribosome(this.nucleus[i]);
        return this;
    }
    // # ======================================== SERVICES
    this.InsertIntoNucleus = function(dna){
        var rna;
        rna = _.assign({
            name: 'AlexaPop'+this.nucleus.length
        },dna);
        this.nucleus.push(rna);
        return this;
    }
    this.Ribosome = function(pop){
        if ( this.proteins[pop.name] && this.proteins[pop.name].wasRibosomed ) return false;
        var protein;
        protein = new zlPathGMO(pop);
        // UPDATE PROTEIN HERE
        _.assign( protein, {
            name: pop.name,
            isReady: false,
            isMoving: false
        });
        this.proteins[pop.name] = protein;
        this.report('Pathdance: PathdanceQueen.Profile("'+protein.name+'")');
        return this;
    }
    this.Profile = function(name){
        var protein = this.proteins[name];
        var cd, i,j, data;
        this // ==>
            .report('start', 'PathDanceReport for '+name)
            .report( protein.isReady ? ' isReady ' : ' NOT READY ' )
            ;
        this.report('end');
        return protein;
    }
    // # ======================================== MARKET
    //this.report = function(msg,data){app.report(msg,data);return this};
    //this.report('ʕ⊙ᴥ⊙ʔ New PathdanceQueen: '+this.dna.name);
}
var appPathdanceQueen = new zlPathdanceQueen({name:'appPathdanceQueen'});
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
                app.mutate({
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
            this.report('Critical! ༼°▽°༽: zlPathdanceMaster can`t dance without app')
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