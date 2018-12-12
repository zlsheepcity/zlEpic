const DNA = { name:'wild', do:(that)=>false, in:{state:false} };
var app = new AppKing('app');

app.do('report',{msg:'it’s ok'});

//app.take( new QueenReporter() );


function AppKing (dna) {

    let app = 'AppKing'
    let rna = dna

    if (typeof(rna)==='string') rna = { name:rna }
    if (typeof(rna)!=='object') rna = { name:app }

    this.name = rna.name
    this.in   = { love:{}, mind:[] }
    this.do   = rna.do   || lordKeepInMind

    // public
    this.use  = rna.use  || lordTakeTheQueen;
    this.love = rna.love || lordDelegator;

/*
    this.take = lordTakeTheQueen;
    this.love = lordDelegator;
    this.keep = lordKeepInMind;
    this.do   = this.keep;

    this.Welcome = lordWelcomeKing;
*/
}
function AppQueen (roxana, dna) {

    this.name = roxana || 'roxana';
    this.do   = lordKeepInMind;
    this.in   = { theNameOfKing:false };
    this.love = lordNameOfKing;
    //this.f    = dna || (that)=>false;

}
function lordKeepInMind (that, memory) {

    let  keep = this.in.theNameOf || this;
    keep.in.mind = [].concat(
        keep.in.mind ||[],
        [{ do:that, with:memory }]
    );

    return this;
}
function lordTakeTheQueen (dna) {

    this.in.love  = this.in.love||{};

    let king  = this;
    let name  = dna.name;
    let queen = new AppQueen(name, dna);

    king.in.love[name] = queen.love(king);

    return this;

}
function lordNameOfKing (king) {
    console.log('app',app.in.theNameOf);
    console.log('i',this);
    this.in.theNameOf = king;
    console.log('i',this);
    console.log('app',app.in.theNameOf);
    this.do = king.do;
    return this;
}


function lordDelegator (order) {

    let it = order.do||'report';
    if (this.love[it]) this.love[it].do(order);
    return this;

}
function lordWelcomeKing () {

    this.take( new QueenReporter() );
    this.do = this.love;
    for ( let everything in this.mind ) this.do(this.mind[everything]);
    return this;

}


function QueenReporter (dna) {

           // ʕ⊙ᴥ⊙ʔ
         dna = dna||DNA;
        for(favor in dna)
    this[favor] = dna[favor];

    this.name    = 'report';
    this.f       = lordDevConsole;
    this.Profile = lordDevProfile;
}
function lordDevConsole (rna) {

    if (rna) console.log(this.name+' ::', rna);
    else this.Profile( this.in.theNameOf || this );
    
    return this;

}
function lordDevProfile (noble) {
    console.group('Profile of ' + noble.name);
    console.log({
        name: noble.name,
        inTheNameOf: noble.in.theNameOf
    });
    console.log(noble.in.mind);
    console.log(noble.in.love);
    console.groupEnd();
    return this;
}



function QueenMutate () {
    this.name = 'mutate';
    this.do   = lordDevConsole;
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
