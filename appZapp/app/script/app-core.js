/*# App Initialization
    2019.4.5
*/

//*  -------------------------------- King Description

function AppKing (dna) {

    /* Король управляет ключевыми функциями интерфейса — королевами. Если королева отсутствует, король заменяет её дежурной королевой, во избежание ошибок. Когда королева готова к работе, король откладывает её задачи до момента полной загрузки.  */

    let king = this
    king.has = { /* nothing */ }
    king.log = console.log

    /* Лорды — вспомогательные функции — помогают королю в управлении */

    // command router

    function lordDelegator (responsible) {
        return function DoItNow (dna) {
            let queenIsHere = 'function' === typeof(king[responsible])
            let delegation  = queenIsHere ? king[responsible] : king.Dolater(responsible)
            return delegation(dna)
        }
    }
    king.do = lordDelegator

    // register queen-library

    function lordTakeTheQueen ({name, f}) {
        king.has[name] = f
        if ( king.isHere ) king.Wedding(name)
        return king
    }
    king.take  = lordTakeTheQueen

    // save task for later execution

    function lordDoLater (responsible) {
        king.mind = king.mind || []
        return function KeepInMind (dna) {
            king.mind.push({dna,for:responsible})
            return king
        }
    }
    king.Dolater = lordDoLater

    // it`s time for execution

    function lordRememba () {
        king.mind = king.mind || []
        let read  = king.mind.splice(0, king.mind.length)
        read.map((o)=>king[o.for](o.dna))
    }
    king.Rememba  = lordRememba

    // attach queen-function to app

    function lordWedding (queen) {
        let brides = queen ? [queen] : Object.keys(king.has)
        brides.map( (name)=>{ king[name] = king.has[name] } )
        return king
    }
    king.Wedding = lordWedding

    /* Приглашение короля на коронацию обычно происходит через несколько миллисекунд после полной загрузки. К этому времени лорды и королевы уже устаканились и готовы выполнять приказы. */

    function lordWelcomeKing () {
        king.isHere = true
        king.Wedding()
        king.Rememba()
    }
    king.Welcome = lordWelcomeKing

    // queen list

    let queens = [
        'report',
        'onload',
        'mutate',
        'zzzimg',
        'wayway',
        'waydot',
        'pathDance'
    ]
    queens.map( (Q)=>{ king[Q] = king.Dolater(Q) } )

}

// -------------------------------- King & First Queens

var app = new AppKing()

app.take({name:'report', f:console.log})
app.take({name:'onload',
    f: function queenOnload (dna) {
        if (typeof(dna)==='function') dna();
    }
})



/* Samples

app.mutate(dna)
app.report(dna)
app.wayway({
    el,
    do: {
            'actionName': f
        }
    offset
    })

app.do(f)(x)
app.do('zoomer')()

app.wayway(el,f)

app.do('take')({name:wayway, f})

*/
