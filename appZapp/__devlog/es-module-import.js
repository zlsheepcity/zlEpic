import toUpperCase from './es-module-lib.js'
import { name, action } from './es-module-func.js'

let test = toUpperCase('test'+!action())
console.log('Import module test: ', test)
