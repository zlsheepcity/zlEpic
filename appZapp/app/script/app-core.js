/*# App Initialization
    2019.4.5
*/

//*  -------------------------------- DNA Model

const DNA = {
    name: 'app',
    queens: [
        'report',
        'takeit',
        'mutate',
        'onload',
        'wayway'
        ]
}

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
        read.map((o)=>king.log(o.for, o.dna))
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

    // queen list from DNA

    if (dna && dna.queens)
        dna.queens.map( (Q)=>{ king[Q] = king.Dolater(Q) } )

    // Primary Queens

    function lordTakeTheQueen ({name, f}) {
        king.has[name] = f
        if ( king.isHere ) king.Wedding(name)
        return king
    }
    king.takeit  = lordTakeTheQueen

}

var app = new AppKing(DNA)

app.mutate('xxx')
app.wayway('xxx')
app.mutate('yyy')

app.takeit({name:'report', f:console.log})

app.Welcome()

app.mutate('zzz')

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