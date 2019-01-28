// ------------------------ Description app6001
/*
    Noble objects
    - are objects
    - has name and role
    - has is.something
    - has do({something})
    - code blastula ʕ⊙ᴥ⊙ʔ

    List of noble objects
    - king
    - lord
    - queen
    - MODEL

*/ // last review: 2018.11.19


// ------------------------ Initialization


//*/// ʕ⊙ᴥ⊙ʔ Noble Blastula - app avant garde
var DNA = { name:'wild', role:false, do:(rna)=>false, is:{} };
var app = DNA;
app.do  = function StoreRequest (rna) {
    this.seed = this.seed || [];
    if (rna) this.seed.push (rna);
    return this
};
//*///


//*/// ʕ⊙ᴥ⊙ʔ Noble Blastula - app launcher
app = new AppKing (app,{name:'app'}); // 'coronation'
app//setup                            //  2018.11.19
    .Delegator( new lordReport() )
    .Delegator( new lordStatus() )
    .Delegator( new lordMutate() )
    .Welcome()
;// .End(setup)
//*///

app//dev
    .report('ʕ⊙ᴥ⊙ʔ Welcome King')
;// .end





// ------------------------ Core functions


function AppKing (dna,rna) {

           // ʕ⊙ᴥ⊙ʔ
         dna = dna||DNA;
        for(favor in dna)
    this[favor] = dna[favor];

//..tion Description (codex)

    this.is.your      ='king'
    this.role         ="King of noble objects and functions";
    this.name         = rna.name || dna.name || this.is.your ;
    this.seed         = this.seed || [];
    this.team         = {};
    this.chamber      = {};
    this.el           = this.do;
    this.report       = this.do;

//..tion PUB API

    this.Delegator = function DelegateTo (lord) {
        lord.king            = this;
        lord.is.overlord     = lord.king[lord.name] && true || false;
        this.team[lord.name] = lord;
        if (lord.is.overlord) this[lord.name] = this.team[lord.name].do;
        return this;
    }
    this.Welcome   = function RestartProcedure (rna) {
        this//WelcomeProcess
            .WelcomeTeam()
            .Ribosome()
        ;
        return this;
    }
    this.Queen     = function TouchQueen (Queen) {
        //if (Queen.is.king) return this.report('- touch queen ').report(Queen);
        if ( typeof(Queen)==='string' ) return this.report('- touch queen ' + Queen);
        Queen.king = this;
        this.chamber[Queen.name] = Queen;
        return Queen.Welcome(Queen.king);
    }

//..tion Service workers

    this.WelcomeTeam = function ActivationProcedure (codex) {
        for(let anyone in this.team) {
            let lord = this.team[anyone];
            if (lord.is.lord) this.WelcomeLord(lord)
        }
        this.king.report('-x- queen welcome');
        return this;
    }
    this.WelcomeLord = function ActivationProcedure (lord) {
        this[lord.name] = this.do;
        this
            .Delegator(lord)
            .report({hi:lord.name,the:'lord'});
        return this;
    }
    this.Ribosome    = function DecodeRequest (codex) {
        this.king.report('-x- some ribosome');
        return this;
    }

//..tion Pending

    this.SilentMeeting = function ActivateDelegators (codex) {
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

    this.do   = this.do; // belive in avant garde
    this.king = this;
    let ready = this.is.your ; this.is[ready] = true ;

//..tion End
}
function LordTemplate (dna,rna) {

           // ʕ⊙ᴥ⊙ʔ
         dna = dna||DNA;
        for(favor in dna)
    this[favor] = dna[favor];

//..tion Description (codex)

    this.is.your      ='lord'
    this.role         ="task delegator";
    this.name         = rna.name || dna.name || this.is.your;

//..tion Service workers

    //xoxox

//..tion Pending

    //xoxox

//..tion Summary (codex)

    this.do   = this.do;
    this.king = this.king || false;
    let ready = this.is.your ; this.is[ready] = true ;

//..tion end
}




function lordStatus(dna,rna) {
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


//*/// EOF
