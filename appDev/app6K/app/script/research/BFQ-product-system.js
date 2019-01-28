/*  --------------------------------------------
    BFQ product system
    2019.1.23
--------------------------------------------  */

function BFQ_Calculator(bfq) {
    let calculation = Math.floor(bfq.b * bfq.f) * bfq.q
    return parseFloat(calculation).toFixed(2)
}
function BFQ_Usecase(bfq) {
    let start = BFQ_Calculator({b:bfq.b,f:bfq.f,q:bfq.q})
    let end = BFQ_Calculator({
        b:bfq.b + ( bfq.bx * bfq.bs ),
        f:bfq.f + ( bfq.fx * bfq.fs ),
        q:bfq.q + ( bfq.qx * bfq.qs )
    })
    //console.log('START: ', start);
    console.log('+'+bfq.bs+' +'+bfq.fs+' +'+bfq.qs+': ', end)
}
function BFQ_Demo() {
    console.group('BFQ research demo');
    const b = 10
    const f = 0.10
    const q = 1.0
    const bx = 10
    const fx = 0.05
    const qx = 0.2
    let bfqStarter = []
    bfqStarter.push({b:b,f:f,q:q,sum:BFQ_Calculator({b:b,f:f,q:q})})

    // start
    console.log('Start values:')
    console.table(bfqStarter)

    // b
    console.log('B values:')
    let bfqBrand = []
    for ( let i=1; i<=10; i++ ) {
        let x = b + ( bx * i )
        bfqBrand.push({b:x,f:f,q:q,sum:BFQ_Calculator({b:x,f:f,q:q})})
    }
    console.table(bfqBrand)

    // f
    console.log('F values:')
    let bfqFunctionality = []
    for ( let i=1; i<=10; i++ ) {
        let x = f + ( fx * i )
        bfqFunctionality.push({b:b,f:x,q:q,sum:BFQ_Calculator({b:b,f:x,q:q})})
    }
    console.table(bfqFunctionality)

    // q
    console.log('Q values:')
    let bfqQuality = []
    for ( let i=1; i<=10; i++ ) {
        let x = q + ( qx * i )
        bfqQuality.push({b:b,f:f,q:x,sum:BFQ_Calculator({b:b,f:f,q:x})})
    }
    console.table(bfqQuality)

    // usecases
    console.log('+6')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:2,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:1,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:4,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:1,qs:4})

    console.log('+12')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:4,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:2,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:8,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:2,qs:8})

    console.log('+24')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:8,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:12,fs:6,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:12,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:6,qs:12})

    console.log('+6')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:2,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:3,fs:2,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:3,fs:1,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:3,qs:1})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:3,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:1,qs:3})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:1,fs:2,qs:3})

    console.log('+12')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:4,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:4,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:2,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:6,qs:2})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:6,qs:4})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:4,fs:2,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:2,fs:4,qs:6})

    console.log('+24')
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:8,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:10,fs:8,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:10,fs:6,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:10,qs:6})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:10,qs:8})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:8,fs:6,qs:10})
    BFQ_Usecase({b:b,f:f,q:q,bx:bx,fx:fx,qx:qx,bs:6,fs:8,qs:10})

    console.groupEnd()
}

BFQ_Demo()


/* end of BFQ product system */