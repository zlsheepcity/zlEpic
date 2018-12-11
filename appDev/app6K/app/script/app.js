const DNA = { name:'wild', do:(protein)=>false };
var app = new AppKing({name:'app'});
var q = {name:'mutate'};
app.take(q);
app.do(1).do(2).do(3);
app.Welcome();
app.do(5).do(6).do(7);


app.do(1).do(2).do(3);
app.take(q).love.mutate.do(4);
var app2 = new AppKing({name:'app2'});
app2.Welcome();


app.take( new QueenMutate() );
app.do({when:'trigger',has:'click',do:'mutate',addClass:'nigger'});


function AppKing (dna) {

    this.do   = lordKeepInMind;
    this.doit = lordDelegator;
    this.take = lordTakeTheQueen;

    this.Welcome = lordWelcome;

           // ʕ⊙ᴥ⊙ʔ
         dna = dna||{};
        for(favor in dna)
    this[favor] = dna[favor];

}
function AppQueen (dna) {

    this.do = lordKeepInMind;

           // ʕ⊙ᴥ⊙ʔ
         dna = dna||{};
        for(favor in dna)
    this[favor] = dna[favor];

}
function lordKeepInMind (that) {
    // store data in array

    this.mind = [].concat( this.mind||[], [that] );
    return this;

}
function lordDelegator (order) {

    let it = order.do||'report';
    if (this.love[it]) this.love[it].do(order);
    return this;

}
function lordTakeTheQueen (dna) {
    // update command list

    let queen = new AppQueen(dna);
    let name  = queen.name;
    this.love = Object.assign( this.love||{} , {[name]:queen} );
    return this;

}
function lordWelcome () {
    this.take( new QueenReporter() );
    this.do = this.doit;
    for ( let everything in this.mind ) this.do(this.mind[everything]);
    return this;

}



function QueenReporter () {
    this.name = 'report';
    this.do   = lordDevConsole;
}
function lordDevConsole (rna) {

    console.log(this.name+' ::', rna);
    return this;

}


function QueenMutate () {
    this.name = 'mutate';
    this.do   = lordDevConsole;
}
