/*  --------------------------------------------
    APP components 2019
--------------------------------------------  */




/*  --------------------------------------------
    APP research 2019 zapp
--------------------------------------------  */


//*  -------------------------------------------- APP DNA

function dnaMix(target,injection) {
    return Object.assign(                                    // Slices
        typeof(target)!=='object' ? {} : target,             // [0] Base pointer
        { name: 'blastula', do: lordUnforgettable },         // [1] Model DNA
        target,                                              // [2] target itself
        typeof(injection)==='string' ? { name: injection } : // [3] simple name
        typeof(injection)!=='object' ? {} : injection        // [4] full injection
    )
}

//*  -------------------------------------------- APP LORDS

function lordUnforgettable( that, memory ) {
    let king = this.king || this
    king.memory = [].concat(
        king.memory || [],
        [{ do:that, with:memory }]
    )
    return king
}
function lordDelegator(name) {
    return function Delegation(rna) {
        let king = this.king || dnaMix({})
        return king.do(name, rna)
    }
}
function lordRememba( that, memory ) {
    let king = this.king || this
    king.report('Rememba reporting')
    
}


//*  -------------------------------------------- APP KING

function AppKing(dna) {

    dnaMix(this,dna) // ← ʕ⊙ᴥ⊙ʔ Noble Blastula

    // overlords-shortcuts

    this.report = lordDelegator('report')
    this.mutate = lordDelegator('mutate')
    this.onload = lordDelegator('onload')

    // lords

    // welcome king

    this.king = this
    this.Welcome = function Initialization() {
        
    }

}

var zapp = {
    // overlords
    report: (rna)=>false,
    mutate: (rna)=>false,
    onload: (rna)=>false
};


//*  -------------------------------------------- WORKFLOW

let x = new AppKing({name:'x'})
let y = new AppKing({name:'x',param:'pam-pam'})
y.do('mutate',{for:'appTarget',addClass:'is-fine'})





/* EOF app.js */
