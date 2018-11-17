//*/ app6001

/*/ definition
    Noble objects
    - are objects
    - is something
    - do something
//*/

//*/ app avant garde

var app = { is:{} }
app.do = function APIcommander (dna) {
    this.nucleus = this.nucleus || []
    return dna !== false ? this.nucleus.push(dna) : false
}

//*/

//*/ app core

function appKing(app) {
    //*/ service workers
    //*/ blastula
    for ( chromosome in app ) this[chromosome] = app[chromosome];
    this.is.king = true;
    //*/
}

app = new appKing(app); // app coronation

//*/

/*/ lord mutate

function lordMutate(app) {
    // blastula
    for ( chromosome in app ) this[chromosome] = app[chromosome];
    this.is.lord = true;
}

//*/

//*/ some

app.text = 'text';

app.nb = function CODEXcommander (dna) {
    this.codex = this.codex || []
    return this.codex.push(dna)
}

function zz() {
    this.zzz=true
}
app.zz = new zz();

//*/

//*/ initial testing

testing = {};
testing.checklist = [];
testing.checklist.push( false || 'chosen one' );

//*/ t
testing.checklist.push(
    app
    && typeof(app.is) === 'object'
    && typeof(app.do) === 'function'
    || 'broken life'
);

//*/ t
app.do(3);app.do('bs');app.do(false);
testing.checklist.push(
    app.nucleus.join('') === '3bs' || 'broken nucleus'
);


//*/

testing.report = function () {
    let report = this.checklist.filter( x=> x !== true )
    console.group('ʕ⊙ᴥ⊙ʔ testing report')
        console.table(report)
        console.table(app, ["Value","name","length"])
    console.groupEnd();
}

testing.report()


//*/ EOF
