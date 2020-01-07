function apiFuncaOne (dna) {
    console.log('apiFuncaOne:', dna)
    return dna
}

function apiFuncaTwo (dna) {
    console.group('apiFuncaTwo combined')
        console.log('apiFuncaTwo:', dna)
        apiFuncaOne(dna)
    console.groupEnd()
    return
}

export { apiFuncaOne, apiFuncaTwo }
