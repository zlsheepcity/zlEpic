// modules

console.log('----------------------------- mod 1')

import * as actor from './modula.js'

actor.apiFuncaOne('first string')
actor.apiFuncaTwo('secon string')

console.log('----------------------------- mod 2')

import * as actre from './modulb.js'

actre.apiFuncaOne('third string')
actre.apiFuncaTwo('fourt string')


// fetch promises

function callApiThen() {
  return fetch("/posts/1/")
    .then(resp => resp.json())
    .then(data => {
      console.log('----------------------------- fetch 1')
      console.log('Fetch then OK')
      console.log(data)
    }).catch(err => {
      console.log('Fetch then Err')
    });
}
callApiThen()


async function callApiAsync() {
  try {
    const resp = await fetch("/posts/1/")
    const data = await resp.json()
      console.log('----------------------------- fetch 2')
      console.log('Fetch async OK')
      console.log(data)
  } catch (e) {
      console.log('Fetch async Err')
  }
}
callApiAsync()


console.log('----------------------------- plain end')
