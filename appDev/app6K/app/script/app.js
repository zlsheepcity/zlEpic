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


/*  --------------------------------------------
    BFQ product system
    2019.1.23
--------------------------------------------  */

function BFQ_Calculator(bfq) {
    let calculation = Math.floor(bfq.b * bfq.f) * bfq.q
    return parseFloat(calculation).toFixed(2)
}
function BFQ_Usecase(bfq) {
    let start = BFQ_Calculator({b:bfq.b,f:bfq.f,q:bfq.q})
    let end = BFQ_Calculator({
        b:bfq.b + ( bfq.bx * bfq.bs ),
        f:bfq.f + ( bfq.fx * bfq.fs ),
        q:bfq.q + ( bfq.qx * bfq.qs )
    })
    //console.log('START: ', start);
    console.log('+'+bfq.bs+' +'+bfq.fs+' +'+bfq.qs+': ', end)
}
function BFQ_Demo() {
    console.group('BFQ research demo');
    const b = 10
    const f = 0.10
    const q = 1.0
    const bx = 10
    const fx = 0.05
    const qx = 0.2
    let bfqStarter = []
    bfqStarter.push({b:b,f:f,q:q,sum:BFQ_Calculator({b:b,f:f,q:q})})

    // start
    console.log('Start values:')
    console.table(bfqStarter)

    // b
    console.log('B values:')
    let bfqBrand = []
    for ( let i=1; i<=10; i++ ) {
        let x = b + ( bx * i )
        bfqBrand.push({b:x,f:f,q:q,sum:BFQ_Calculator({b:x,f:f,q:q})})
    }
    console.table(bfqBrand)

    // f
    console.log('F values:')
    let bfqFunctionality = []
    for ( let i=1; i<=10; i++ ) {
        let x = f + ( fx * i )
        bfqFunctionality.push({b:b,f:x,q:q,sum:BFQ_Calculator({b:b,f:x,q:q})})
    }
    console.table(bfqFunctionality)

    // q
    console.log('Q values:')
    let bfqQuality = []
    for ( let i=1; i<=10; i++ ) {
        let x = q + ( qx * i )
        bfqQuality.push({b:b,f:f,q:x,sum:BFQ_Calculator({b:b,f:f,q:x})})
    }
    console.table(bfqQuality)

    // usecases
    console.log('+6')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:2,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:1,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:4,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:1,qs:4})

    console.log('+12')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:4,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:2,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:8,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:2,qs:8})

    console.log('+24')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:8,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:12,fs:6,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:12,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:6,qs:12})

    console.log('+6')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:2,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:3,fs:2,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:3,fs:1,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:3,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:3,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:1,qs:3})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:2,qs:3})

    console.log('+12')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:4,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:4,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:2,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:6,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:6,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:2,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:4,qs:6})

    console.log('+24')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:8,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:10,fs:8,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:10,fs:6,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:10,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:10,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:6,qs:10})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:8,qs:10})

    console.groupEnd()
}

BFQ_Demo()


/* end of BFQ product system */
