// -------------------- Description app6001
/*
    Noble objects
    - are objects
    - has name
    - this.is.something
    - this.do({something})
    - code blastula ʕ⊙ᴥ⊙ʔ

    List of noble objects
    - king, `window.king`
    - lord, delegator as `king.lord()`
    - queen

    Others
    - block commenter iioiii
*/


// -------------------- Initialization


//*/// app blastula avant garde ʕ⊙ᴥ⊙ʔ
var app = { name:'app', is:{} };
app.do = function APIcommander (dna) {
    this.nucleus = this.nucleus || [] ;
    return dna !== false ? this.nucleus.push(dna) : false
};
//*///


//*/// app coronation
app = new appKing(app);
app // setup // v2018.11.18
   .Delegator( new lordReport() )
   .Delegator( new lordStatus() )
   .Delegator( new lordMutate() )
   .Welcome()
; //*/// end setup




// -------------------- Core functions

function appKing(dna) {

    //*/// noble blastula ʕ⊙ᴥ⊙ʔ
    for ( nucleod in dna ) this[nucleod] = dna[nucleod];
    this.name =  this.name || 'yourmaster';
    this.is   =  this.is   || {};
    this.do   =  this.do   || function(dna){return this};
    //*///

    //*/// I'm the King
    this.is.king = false; // not yet
    this.description = "King of noble objects";
    this.status = function (dna) {return true};
    this.report = function (msg) {return this};
    this.mutate = function (dna) {return dna};
    this.lords  = {};
    //*///

    //*///
    this.Welcome = function Init () {
        this.SilentMeeting();
        return this;
    }
    //*///

//# service workers

    // lords services

    this.Delegator = function AssignDelegators (lord) {
        lord.king = this;
        this.lords[lord.name] = lord;
        return this;
    }

    this.SilentMeeting = function ActivateDelegators (rules) {
        const meet = this.lords;
        let   count_them = 0;
        for ( let name in meet ) if (meet[name].is.lord) {
            this[name] = meet[name].do;
            meet[name].is.active = true;
            count_them++;
        }
        //*/// begin reporting
        this.king.report('ʕ⊙ᴥ⊙ʔ '+count_them+' app delegators');
        for ( let name in meet ) if (meet[name].is.active) {
            this.king.report('- app.'+name+'()');
        }
        //*///
    }
    

//# summary

    //*/// --- ʕ⊙ᴥ⊙ʔ
    this.do      = this.do; // APIcommander
    this.king    = this;
    this.is.king = true;
    //*///
}


// lords


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

    this.status = function TestResult (target) {

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
        console.group('ʕ⊙ᴥ⊙ʔ Status report');
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
//# initialization

    //*/ noble blastula ʕ⊙ᴥ⊙ʔ
    for ( nucleod in dna ) this[nucleod] = dna[nucleod];
    this.name = 'mutate';
    this.is   =  this.is   || {};
    this.do   =  this.do   || function(dna){return this};
    //*/

//# summary

    //*/// --- ʕ⊙ᴥ⊙ʔ
    this.is.lord = true;
    //*///
}


//*/ initial testing

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
app.do(3);app.do('bs');app.do(false);
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

console.log('- testing.report()');


//*/ EOF
