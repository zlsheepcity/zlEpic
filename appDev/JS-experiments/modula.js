export function apiFuncaOne (dna) {
    console.log('apiFuncaOne:', dna)
    return dna
}

export function apiFuncaTwo (dna) {
    console.group('apiFuncaTwo combined')
        console.log('apiFuncaTwo:', dna)
        apiFuncaOne(dna)
    console.groupEnd()
    return
}
