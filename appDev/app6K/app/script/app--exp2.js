// ------------------------ Description app6002
/*
    Noble objects
    - are objects
    - has name and role
    - has is.something
    - has do({something})
    - code blastula ʕ⊙ᴥ⊙ʔ

    List of noble objects
    - router as king
    - libs as lord
    - templates as queen
    - models with CAPSNAMES

*/ // last review: 2018.11.27


// ------------------------ Initialization

//*/// ʕ⊙ᴥ⊙ʔ Noble Blastula - app avant garde
var DNA = { name:'wild', role:false, do:(rna)=>false, is:{} };
//var app = Object.assign({}, DNA);
/*
app.do  = function StoreRequest (that) {
    this.seed = [].concat( this.seed||[], [that] );
    let delegator =
        typeof(that) === 'string'
        ? this
        : false;
    return delegator
        // Ordered usage: app.do('order')(DNA)
        ? (dna)=>delegator.do( Object.assign({delegator:that}, dna) )
        // Free usage:    app.do(DNA)
        : this
};
*/

function AppKing (name, dna) {

           // ʕ⊙ᴥ⊙ʔ
         dna = dna||DNA;
        for(favor in dna)
    this[favor] = dna[favor];

//..tion Description (codex)

    this.name = name || 'king' ;
    this.seed = this.seed || [];
    this.team = this.team || {};
    this.do = function (that) {
        let delegator = typeof(that)==='string';
        let situation = this.is.ready || false;
        let decide_what_to_do_with  =
            situation && delegator ? 'Delegate' :
            situation              ? 'Ribosome' :
            delegator              ? 'RequestDelegation' :
                                     'Keep' ;
        return this[decide_what_to_do_with](this,that);
    }
    

//..tion Service workers

    this.Delegate = function FindAndDelegate (king,lord) {
        let delegator = king.team[lord] || king;
        return delegator.do;
    }
    this.Keep = function PushIntoSeed (dna,request) {
        dna.seed = [].concat( dna.seed||[], [request] );
        return dna;
    }
    this.RequestDelegation = function UpdateRequest (dna,name) {
        return (that)=>dna.do( Object.assign({delegator:name}, that) )
    }

}
var app = new AppKing('app');


/* REMOVED

function DNA__AppModel(name) {
    this.name = name;
    this.is   = this;
    this.role = false;
    this.do   = (rna)=>false;
}
const DNA = new DNA__AppModel('DNA');

var app = { name:'wild', role:false, do:(rna)=>false, is:{} };

*/
