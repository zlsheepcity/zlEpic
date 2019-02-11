/*  --------------------------------------------
    APP components 2019
--------------------------------------------  */




/*  --------------------------------------------
    APP research 2019 zapp
--------------------------------------------  */


//*  -------------------------------------------- APP DNA
const dnaModel = { name: 'blastula', do: lordKeep, has: {} }
const uniModel = {
    name: 'Universe',
    do: function Konigo (sorgen) { return {
        listOfCoreQueens: {
            report: QueenReporter,
            mutate: el_class_mutator
        }
    }},
    has: {
        exists: true
    },
}
function dnaMix (target,injection) {
    return Object.assign(                                    // Slices
        typeof(target)!=='object' ? {} : target,             // [0] Base pointer
        dnaModel,                                            // [1] Model DNA
        target,                                              // [2] target itself
        typeof(injection)==='string' ? { name: injection } : // [3] simple name
        typeof(injection)!=='object' ? {} : injection        // [4] full injection
    )
}

//*  -------------------------------------------- APP LORDS

function overlordDelegator (name) { // delegate straight command to do
    return function appKingDelegation(rna) {
        return this.do(name, rna)
    }
}
function lordKeep (that,memory) { // keep command in memory, execute later
    this.memory = [].concat(
        this.memory || [],
        [{ do:that, with:memory }]
    )
    return this
}
function lordTake (queenname, queen) { // take the queen function as new command
    this.has[queenname] = queen
    this.has.length = Object.keys(this.has).length - 1
    return this
}
function lordDoit (queenname, rna) { // command executor

    // support queenname as do/with object

    if ( typeof(queenname)==='object' )
        [queenname, rna] = [queenname.do, queenname.with]

    // check non-existing command

    if ( typeof(this.has[queenname])!=='function' )
        return this.report( {msg:'lordDoit has unsupported command', data:{name:queenname,rna:rna}} )

    // run this

    this.has[queenname](rna)
    return this
}
function lordWelcomeKing (options) { // initialization of appKing

    // start

    //if ( options && options.dev ) console.table(Object.assign({},this), ['Value', 'name', 'length'])
    //if ( options && options.dev && this.memory ) console.table(Object.assign({},this).memory)

    this.do = lordDoit

    // take queens

    let queenlist = Object.assign({}, uniModel.do().listOfCoreQueens, options && options.queens ? options.queens : {} )
    for (let queen in queenlist) this.take(queen, queenlist[queen])

    // Welcome procedure

    this.report('ʕ⊙ᴥ⊙ʔ Welcome, King!')
    this.report('--------------------')

        // use memory

        this.memory = this.memory || []
        this.memory.forEach((memory)=>this.do(memory), this)
        this.memory = []

    this.report('--------------------')
    this.report('ʕ⊙ᴥ⊙ʔ King is ready!')
    this.report('Profile command: '+this.name+'.report()')

    // finish

    this.exists = true
    //if ( options && options.dev ) console.table(Object.assign({},this), ['Value', 'name', 'length'])
    return this
}

//*  -------------------------------------------- APP PRIMARY QUEENS

function QueenReporter (report) {
    if ( typeof(report)==='object' && typeof(report.msg)==='string' )
         console.log( report.msg, report.data )
    else if (!report)
         console.table(Object.assign({},app), ['Value', 'name', 'length'])
    else console.log( report )
}

//*  -------------------------------------------- APP KING

function AppKing(dna) {

    dnaMix(this,dna) // ← ʕ⊙ᴥ⊙ʔ Noble Blastula

    // avant-garde requirements
    this.report = overlordDelegator('report')
    this.mutate = overlordDelegator('mutate')

    // services
    this.take   = lordTake

    // welcome king
    this.Welcome = lordWelcomeKing
    this.king = this
}

//*  -------------------------------------------- WORKFLOW

var app = new AppKing('app');
// onload→app.Welcome()

/*
    window.onload = function AppRun() {

        // APP INIT
        app.Welcome({dev:true, queens:{log:console.log}})

        // APP SAMPLES
        app.do('report','App test #1: report this message')
        app.report('App test #2: report this message')
        app.mutate({find:'html',addClass:'has-app'})

    }
*/

/* EOF app.js */
