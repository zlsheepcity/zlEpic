// ------------------------ Description app6001
/*
    Noble objects
    - are objects
    - has name
    - this.is.something
    - this.do({something})
    - code blastula ʕ⊙ᴥ⊙ʔ

    List of noble objects
    - king
    - lord
    - queen
    - MODEL

*/ // last review: 2018.11.19

/*
    History
    


*/


// ------------------------ Initialization


// ʕ⊙ᴥ⊙ʔ Noble Blastula - app avant garde
var FNA = (rna) => false;
var DNA = { name:'noble', is:{}, do:(rna)=>false };
var app = DNA;
app.do  = function StoreRequest (rna) {
    this.nucleus = this.nucleus || [];
    if (rna) this.nucleus.push (rna);
    return this
};//end


// ʕ⊙ᴥ⊙ʔ Noble Blastula - app launcher
app = new AppKing (app); // coronation
app//setup              //  2018.11.19
    .Delegator( new lordReport() )
    .Delegator( new lordStatus() )
    .Delegator( new lordMutate() )
    .Welcome()
;// .End(setup)


app//demo
    .do(77)
    .report('ʕ⊙ᴥ⊙ʔ Welcome King')
    .report()
;// .end





// ------------------------ Core functions


function AppKing (dna) {     // ʕ⊙ᴥ⊙ʔ
                           dna = dna||DNA;
                          for(favor in dna)
                      this[favor] = dna[favor];

//..tion Description (codex)

    this.name         = this.name;
    this.about        ='King of noble objects and functions';
    this.is.king      = false; // not yet
    this.el           = FNA;
    this.report       = FNA;
    this.nucleus      = dna.nucleus || [];
    this.team         = {};

//..tion PUB API

    this.Delegator = function DelegateTo (lord) {
        lord.king            = this;
        lord.is.overlord     = lord.king[lord.name] && true || false;
        this.team[lord.name] = lord;
        if (lord.is.overlord) this[lord.name] = this.team[lord.name].do;
        return this;
    }
    this.Welcome = function Init () {
        app.WelcomeTeam();
        app.Ribosome();
        return this;
    }

//..tion Service workers

    this.WelcomeTeam = function ActivationProcedure (rule) {
        for(let anyone in this.team) {
            let lord = this.team[anyone];
            if (lord.is.lord) this.WelcomeLord(lord)
        }
        return this;
    }
    this.WelcomeLord = function ActivationProcedure (lord) {
        this[lord.name] = FNA;
        this.Delegator(lord).report('- app.'+lord.name+'()');
        return this;
    }
    this.Ribosome = function ReadRequest (rule) {
        this.king.report('-x- some ribosome');
        return this;
    }

//..tion Pending

    this.SilentMeeting = function ActivateDelegators (rules) {
        const meet = this.lords;
        let   count_them = 0;
        for (let name in meet) if (meet[name].is.lord) {
            this[name] = meet[name].do;
            meet[name].is.active = true;
            count_them++;
        }
        // reporting
        this.king.report('ʕ⊙ᴥ⊙ʔ '+count_them+' app delegators');
        for ( let name in meet ) if (meet[name].is.active) {
            this.king.report('- app.'+name+'()');
        }
    }
    this.status       = (rna)=>false;

//..tion Summary (codex)

    this.is.king      = true;
    this.do           = this.do; // belive in avant garde
    this.king         = this;

//..tion end
}


// lords

function lordTemplate (dna) {    // ʕ⊙ᴥ⊙ʔ
                               dna = dna||DNA;
                              for(favor in dna)
                          this[favor] = dna[favor];

//..tion Description (codex)

    this.name         ='xoxox_template';
    this.about        ='xoxox_description';
    this.is.lord      = false; // not yet

//..tion Service workers

    //xoxox

//..tion Pending

    //xoxox

//..tion Summary (codex)

    this.is.lord      = true;
    this.do           = this.do;
    this.king         = this.king || this;

//..tion end
}




function lordStatus(dna) {
    //*/ noble blastula ʕ⊙ᴥ⊙ʔ
    for ( nucleod in dna ) this[nucleod] = dna[nucleod];
    this.name = 'status';
    this.is   =  this.is   || {};
    this.do   =  this.do   || function(dna){return this};
    //*/

    //*/// I'm the lord
    this.is.lord = false; // not yet
    this.description = "testing";
    this.status = function(target){return false};
    //*///

//# service workers

    this.status = function GetCurrentState (target) {

        const status = target || this;

        // specify usecase of

        switch (status.of) {
            case 'selftest':
                return this && true || false;
                break;
            case 'target':
                status = status.patient;
                break;
            default:
                break;
        }

        // general diagnostic

        let survival_test = true;

        survival_test = survival_test === true
            && typeof(status)      === 'object'
            && typeof(status.name) === 'string'
            && typeof(status.is)   === 'object'
            && typeof(status.do)   === 'function'
            || 'has noble problems'
        ;

        // app diagnistic

        if (status.is.king) {
            survival_test = survival_test === true
                && typeof(status.report) === 'function'
                || 'has report problems'
            ;
        }

        // return value

        if ( survival_test === true ) return true;
        else return { status: false, reason: survival_test }
    }
    //*///


//# summary

    //*/// --- ʕ⊙ᴥ⊙ʔ
    this.do      = this.status;
    this.king    = this;
    this.is.lord = true;
    //*///
}


function lordReport(dna) {
    //*/ noble blastula ʕ⊙ᴥ⊙ʔ
    for ( nucleod in dna ) this[nucleod] = dna[nucleod];
    this.name = 'report';
    this.is   =  this.is   || {};
    this.do   =  this.do   || function(dna){return this};
    //*/

    //*/// I'm the lord
    this.is.lord = false; // not yet
    this.description = "recieve or display info";
    //*///

//# service workers

    this.report = function DisplayInfo (message, order) {

        if (message) { console.log(message); return this; }

        //*/// Group reportage
        console.group('Status report');
        console.log(this);
        console.log( '- checking status ...');
        let fine = this.king.status(this);
        if (fine===true) console.log( '- ... fine' );
        else             console.log( '- (!) '+fine.reason );
        console.table(this, ["Value","name","length"])
        console.groupEnd();
        //*///

        return this;
    }
    

//# summary

    //*/// --- ʕ⊙ᴥ⊙ʔ
    this.do      = this.report;
    this.king    = this;
    this.is.lord = true;
    //*///
}


function lordMutate(dna) {
    //*/ noble blastula ʕ⊙ᴥ⊙ʔ
    for ( nucleod in dna ) this[nucleod] = dna[nucleod];
    this.name = 'mutate';
    this.is   =  this.is   || {};
    this.do   =  this.do   || function(dna){return this};
    //*/

    //*/// I'm the lord
    this.is.lord = false; // not yet
    this.description = "modify element class";
    //*///

//# service workers

    this.mutate = function ChangeClass (dna) {
        
    };

//# summary

    //*/// --- ʕ⊙ᴥ⊙ʔ
    this.do      = this.mutate;
    this.king    = this;
    this.is.lord = true;
    //*///
}


//*/// ======================================================
// pending

testing = {};
testing.checklist = [];
testing.checklist.push( false || 'chosen one' );

//*/// t
testing.checklist.push(
    app
    && typeof(app.is) === 'object'
    && typeof(app.do) === 'function'
    || 'broken life'
);
//*///

//*/// t
//app.do(3);app.do('bs');app.do(false);
testing.checklist.push(
    app.nucleus.join('') === '3bs' || 'broken nucleus'
);
//*///

//*///

testing.report = function () {
    let report = this.checklist.filter( x=> x !== true )
    console.group('ʕ⊙ᴥ⊙ʔ testing report')
        console.table(report)
        console.table(app, ["Value","name","length"])
    console.groupEnd();
}

// console.log('- testing.report()');



//*/// EOF
