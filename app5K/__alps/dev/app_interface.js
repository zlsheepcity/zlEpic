/*
app.Pathdance = {
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
*/

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
    //this.dna = app.Chromosoming(this, dna);
    this.dna = new zlChromosome(_.assign({
        a__genType:      'resource',
        a__genFamily:    'pathdance',
        wasRibosomed: false,
        isDancing: false
        }, dna
    ));
    this.virus = function(rules){
        console.log('Play dance');
        return this;
    };
}
function zlPathdanceQueen(dna) {
    // # ======================================== SETTINGS
    this.dna = new zlChromosome(_.assign({
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