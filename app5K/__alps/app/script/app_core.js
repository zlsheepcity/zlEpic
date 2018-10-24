/*
    # Interface functions, v5001

        Last code revision: 2018.10.5

    ## Required libs

        lodash
        domtastic ($)
        waypoints + inview (scroll)
        flubber (svg paths)

    ## Usage samples:

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
        myDOM_Element = app.el('.myElement__CSSquery');
*/

/* ==============================================================
    DNA Config:

    dna — object property with initial settings
    king - core index
    queen - core native library

*/
var zlAppKing__DnaConfig = {

    name:                   'app', // King
    isSilentKing:           false, // Console reports

    //                      Native libraries (Queens)
    queens: {
        list: {
            interface:      'appInterfaceQueen'
        }
    }
}
var app = new zlAppKing(zlAppKing__DnaConfig);
var appInterfaceQueen = new zlInterfaceQueen({name:'appInterfaceQueen'});
/* ==============================================================
    FLORA:

    chromosome — functional part of dna
    protein - constructed object for interface action

*/
function zlChromosome(dna) {
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
    this.PureDNA = function() {
        var report = {};
        _.assign(report, this);
        _.unset(report, 'chromosome');
        _.unset(report, 'Inject');
        _.unset(report, 'Infect');
        _.unset(report, 'PureDNA');
        return report;
    }
    // # ======================================== AUTO BORN PROCESS
    this.Inject(dna);
}
function zlProtein(dna) { // Bosetti Protein
    // # ======================================== SETTINGS
    this.dna = new zlChromosome(_.assign({a__genType:'resource'}, dna ));
    this.is = { here: false, ready: false };
    // # ======================================== SERVICES
    this.Came =     function() { this.is.here  = true;  return this; };
    this.Away =     function() { this.is.here  = false; return this; };
    this.Ready =    function() { this.is.ready = true;  return this; };
    this.Sleep =    function() { this.is.ready = false; return this; };
}
/* ==============================================================
    CORE KING:

    app.Welcome() // → launch all

*/
function zlAppKing(dna) {
    // # ======================================== SETTINGS
    this.dna = new zlChromosome(_.assign({a__genType:'king'}, dna));
    this.is = { here:false, ready:false };
    this.Welcome = function() {
        this.report('ʕ⊙ᴥ⊙ʔ Please, Welcome King '+this.dna.name);
        this.Preparator('Delegator',{app:this});
        this.is.here = true;
        this.WelcomePlugins();
        this.is.ready = true;
        this.WelcomeParty();
        return this;
    }
    this.Profile = function() {

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
            + '.WelcomeParty! — That moment, then app is ready.'
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
        if ( mutation.toggleClass ) {$el.toggleClass(mutation.toggleClass);
                                    this.report($el);
                                    }
        return true;
    }
    this.El = function(query) {
        return document.querySelector(query);
    }
    // # ======================================== UNPURE
    this.Reporter = function(msg,data) {
        if (msg==='start') console.group(data);
        else if (msg==='end') console.groupEnd();
        else if (msg==='timer-start') console.time(data);
        else if (msg==='timer-stop') console.timeEnd(data);
        else if (msg==='data') console.table(data);
        else if (msg==='dna') console.table(data.PureDNA());
        else if (msg==='divider')
            console.log('------------------------------------');
        else {
            console.log(msg);
            if (data) console.log(data);
        }
        return this;
    }
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
/* ============================================================== */

/* ==============================================================
    Interface Queen 1002, 2018.10.5
    - ux events → scheduled actions
*/
function zlInterfaceQueen(dna) {
    // # ======================================== SETTINGS
    this.dna = new zlChromosome(_.assign({
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
/* ============================================================== */


