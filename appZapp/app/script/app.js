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


//*  -------------------------------------------- PENDING


function AppKing2(dna) {

    // ---------------------------------------------- Profile

    let king = this

    king.name           = 'appKing'
    king.description    = 'interface controlled by content'
    king.actions        = ['report','mutate']
    king.has            = {}


    function blastula(dna) {
        return typeof(dna)==='object' ? dna :
               typeof(dna)==='string' ? {name:dna}
                                      : {dna:dna}
    }

    // inject DNA
    Object.assign(king, profile, blastula(dna))

    // ---------------------------------------------- Shortcut delegation

    function overlordDelegator (name) {
        return function appKingDelegation (rna) {
            return king.do(name, rna)
        }
    }
    king.actions.map((name)=>king[name]=overlordDelegator(name))

    // ---------------------------------------------- Lords


    // keep command in memory, execute later
    function lordKeepInMemory (that, data) {
        this.memory = [].concat(
            this.memory || [],
            [{ do:that, with:data }]
        )
    }

    // read and execute memory
    function lordMemoryFlashback () {
        this.memory = this.memory || []
        this.memory.forEach((memory)=>lordDoit(memory.do,memory.with), this)
        this.memory = []
    }

    // take the queen function as new command
    function lordTakeTheQueen (queen, f) {
        this.has[queen] = f
    }

    // find & run command
    function lordDoit (queen, todo) {
        if ( !queen || typeof(this.has[queen]) === 'undefined' ) return this
        if ( typeof(this.has[queen])==='function' ) this.has[queen](todo)
        return this
    }

    // ---------------------------------------------- Queens

    function QueenReporter (report = false) {

        function ribosome (mRNA) { return {
            name: 'protein-reporter',
            msg:  typeof(mRNA)     === 'string' ? mRNA :
                  typeof(mRNA.msg) === 'string' ? mRNA.msg :
                  '',
            data: typeof(mRNA.data) === 'array' ? mRNA.data : []
        }}

        let king = Object.assign({},this)
        let protein = ribosome(report)

        // queen action

        if ( mRNA === false )      console.table(king, ['Value', 'name', 'length'])
        if ( protein.msg )         console.log( protein.msg )
        if ( protein.data.length ) protein.data.map((o)=>console.log(o))

        return protein
    }

    // ---------------------------------------------- Welcome

    // initialization of appKing
    function lordWelcomeKing (options) {


    }

}


function AppKing3(DNA) {

    let king = this

    king.name           = 'appKing'

    function blastula(dna) {
        return typeof(dna)==='object' ? dna :
               typeof(dna)==='string' ? {name:dna}
                                      : {dna:dna}
    }

    // ---------------------------------------------- Lords

    king.team = {

        // shortcut delegation:
        // app.command(x) → app.do(command,x)
        Delegation: function overlordDelegator (qName) {
            return  function appKingDelegation (mRNA) {
                return king.do(qName, mRNA)
            }
        },

        // keep command in memory, execute later
        MemoryKeeper: function lordKeepInMemory (that, thing) {
            let memory = new function MemoryActionFor (that, thing) {
                //{ that, thing } = { that || false, thing || false }
                Object.assign( this, {that,thing} )
                this.remember = function MemoryRestore () {}
            }
            /*let doRemember = function actionToExecuteLater (that, memory) {
                
            }*/
            king.memory = [].concat(
                king.memory || [],
                [{ qName, mRNA }]
            )
        },

        // read and execute memory
        MemoryFlashbak: function lordMemoryFlashback () {
            king.memory = king.memory || []
            king.memory.forEach((mem)=>king.do(mem.queen, mem.todo), this)
            king.memory = []
        },

        // take the queen function as new command
        QueenTaker: function lordTakeTheQueen (queen, f) {
            king.has[queen] = f
        },

        // find & run command
        DoIt: function lordDoit (qName, mRNA) {
            if ( !queen || typeof(king.has[queen]) === 'undefined' ) return king
            if ( typeof(king.has[queen])==='function' ) king.has[queen](todo)
            return king
        }

    }

}


/* EOF app.js */
