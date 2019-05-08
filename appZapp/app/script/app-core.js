/*# App Core
    Last revision: 2019.5.8
*/

//*  -------------------------------- King Description

function AppKing (dna) {

    /* Король Апп. Управляет ключевыми функциями интерфейса — королевами. Если королева отсутствует, король заменяет её дежурной королевой, во избежание ошибок. Когда королева готова к работе, король откладывает её задачи до момента полной загрузки.  */

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
        let brides  = queen ? [queen] : Object.keys(king.has)
        let wedding = (bride) => {
            king[bride] = king.has[bride]
            if (typeof(king[bride].Welcome)==='function') king[bride].Welcome()
        }
        brides.map(wedding)
        return king
    }
    king.Wedding = lordWedding

    // рабочие - простые функции живущие под прикрытие короля

    king.workers = {}

    /* Приглашение короля на коронацию обычно происходит через несколько миллисекунд после полной загрузки. К этому времени лорды и королевы уже устаканились и готовы выполнять приказы. */

    function lordWelcomeKing () {
        king.isHere = true
        king.Wedding()
        king.Rememba()
        return king
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
        'morphy'
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

// EOF app core
