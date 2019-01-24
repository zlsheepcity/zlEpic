/* -------------------------------------------
    css class mutator
    2019.1.24
------------------------------------------- */

function el_class_mutator(rna) {

    // Merge template and function properties

    let protein = {
        el: false,  // element to change
        addClass: false,
        removeClass: false,
        toggleClass: false
    }

    protein = Object.assign( protein, rna )

    // Ribosome actions:

    // 1. Allow multi el
    // 2. Allow to use dot ".classname" value
    // 3. Allow to use space separated multiclass value

    if ( !protein.el ) return false // i can`t
    if ( !protein.el.length ) protein.el = [protein.el] // [1]

    

    let ops = ['addClass','removeClass','toggleClass']
    for ( let opi in ops )
        if ( typeof(protein[ops[opi]]) === 'string' )
            protein[ops[opi]] = protein[ops[opi]].replace(".","").split(" ") // [2], [3]

    // Mutation steps
    console.log(protein.el)

    for ( let eli=0; eli<protein.el.length; eli++ ) {

        let cel = protein.el[eli]
        console.log('cel:', cel)

        if ( protein.addClass && protein.addClass.length )
            for ( let i in protein.addClass )
                cel.classList.add(protein.addClass[i])

        if ( protein.removeClass && protein.removeClass.length )
            for ( let i in protein.removeClass )
                cel.classList.remove(protein.removeClass[i])

        if ( protein.toggleClass && protein.toggleClass.length )
            for ( let i in protein.toggleClass )
                cel.classList.toggle(protein.toggleClass[i])

    }

    return protein

}

// zapp init

zapp.mutate = el_class_mutator

// demo .target

var mtag, ptag

window.onload = function DemoLoad (e){
    mtag = document.querySelector('.target')
    ptag = document.querySelectorAll('.target')
    el_class_mutator({
        el: ptag,
        addClass:".addme",
        toggleClass:'toga1 toga2',
        removeClass:['rem1']
    })
    console.log(mtag, ptag)
}


/* EOF css class mutator */
