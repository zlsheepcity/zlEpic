/* -------------------------------------------
    css class mutator
    2019.1.24
------------------------------------------- */

function el_class_mutator(rna) {

    // Merge template and function properties

    let protein = {
        el: false,
        for: false,
        find: false,
        addClass: false,
        removeClass: false,
        toggleClass: false
    }

    protein = Object.assign( protein, rna )

    // Ribosome actions:

    // 1. Allow to use for/find targets
    // 2. Allow multi el

    if ( !protein.el ) protein.el =
        typeof(protein.for )==='string' ? document.querySelectorAll('.'+protein.for) :
        typeof(protein.find)==='string' ? document.querySelectorAll(protein.find) :
        false; // [1]

    if ( !protein.el )        return false // i can`t
    if ( !protein.el.length ) protein.el = [protein.el] // [2]

    // 3. Allow to use dot ".classname" value
    // 4. Allow to use space separated multiclass value

    let ops = ['addClass','removeClass','toggleClass']
    for ( let opi in ops )
        if ( typeof(protein[ops[opi]]) === 'string' )
            protein[ops[opi]] = protein[ops[opi]].replace(".","").split(" ") // [3], [4]

    // Mutation steps

    for ( let eli=0; eli<protein.el.length; eli++ ) {

        let cel = protein.el[eli]

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
function TestMutator(e){
    let mtag = document.querySelector('.target')
    let ptag = document.querySelectorAll('.target')
    if (zapp) zapp.mutate = el_class_mutator
    el_class_mutator({
        el: ptag,
        addClass:".addme",
        toggleClass:'toga1 toga2',
        removeClass:['rem1']
    })
    zapp.mutate({for:'target', addClass:'happy'})
    console.log(mtag, ptag)
}

// demo command
window.onload = TestMutator


/* EOF css class mutator */
