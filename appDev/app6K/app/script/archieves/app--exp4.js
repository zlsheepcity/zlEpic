
/*  --------------------------------------------
    APP research 2018
--------------------------------------------  */

const DNA = { name:'wild', do:(that)=>false, in:{state:false} };
var app = new AppKing('app')

app
    .Welcome()
    .use( new QueenMutate() )


//app.take( new QueenReporter() );


function AppKing (dna) {

    // DNA transcription
    let rna = dna
    if (typeof(rna)==='string') rna = { name: rna  }
    if (typeof(rna)!=='object') rna = {}

    // noble king codex
    this.name = rna.name || 'app'
    this.in   = { love:{}, mind:[] }
    this.do   = rna.do   || lordKeepInMind

    // public
    this.use  = rna.use  || lordTakeTheQueen;
    this.love = rna.love || lordDelegate;

    // welcome king codex
    this.Welcome = function WelcomeKing () {

        // autoload report queen
        this.use( new QueenReporter() )
        this.do = this.love
        app.do('report','like this')

        // re-mind process
        let memory = this.in.mind
        for ( let has in memory )
            this.do(
                memory[has].do,
                memory[has].with
            )

        return this
    }
}
function AppQueen (dna) {

    // DNA transcription
    let rna = dna
    if (typeof(rna)==='string') rna = { name: rna  }
    if (typeof(rna)!=='object') rna = {}

    // noble queen codex
    this.name = rna.name || 'queen'
    this.in   = { theNameOf:false }
    this.do   = rna.do   || lordKeepInMind
    this.love = rna.love || lordNameOfKing
    this.f    = rna.f    || this.do

}
function lordKeepInMind (that, memory) {

    let keep = this.in.theNameOf || this

    keep.in.mind = [].concat(
        keep.in.mind || [],
        [{ do:that, with:memory }]
    )

    return this
}
function lordDelegate (queen, rna) {
    if (queen && this.in.love[queen]) this.in.love[queen].f(rna)
    return this
}
function lordTakeTheQueen (dna) {

    let king  = this;
    let queen = new AppQueen(dna)
    let when  = queen.name

    king.in.love[when] = queen.love(king)

    return this
}
function lordNameOfKing (king) {
    console.log('i love', this)
    this.in.theNameOf = king
    this.do = king.do
    return this
}

//* -------------------------------------------- Reporter
function QueenReporter (name) {
    this.name    = name || 'report'
    this.Report  = overlordReporterConsole
    this.Profile = overlordReporterProfile
    this.f = (rna)=>{
        if (rna) this.Report(rna)
        else     this.Profile()
        return this
    }
}
function overlordReporterConsole (rna) {
    console.log(this.name+' ::', rna)
    return this
}
function overlordReporterProfile () {

    console.log(this)
    let king = this.in.theNameOf || this

    console.group(this.name)
    console.log(this.in)
    console.log(this.in.mind)
    console.log(this.in.love)
    console.groupEnd()

    return this
}
/**/

//* -------------------------------------------- Mutate
function QueenMutate (name) {
    this.name = name || 'mutate'
    this.do   = overlordReporterConsole;
}
function lordMutateRibosome (rna) {

    let rna_structure = {
        when:        'classname',
        has:         'event',
        do:          'mutate',
        addClass:    'classname',
        removeClass: 'classname',
        toggleClass: 'classname',
        for:         'classname',
        wait:        0, // ms
        than:        (rna)=>false
    }

    let protein = {
        type: rna.type ||'mutate',
        el:   rna.el   || false,
        tel:  rna.tel  || false
    };

    // find el
    if (!protein.el) {
        //let find_el = rna.forel
    }

}

//app.do({when:'trigger',has:'click',do:'mutate',addClass:'nigger'});

/* end of APP research */