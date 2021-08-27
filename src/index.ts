// const Matematica = require('./Matematica');
import {somar,multiplicar,subtrair} from './Matematica'
import validator from 'validator'
// ou

// import * as Matematica from './Matematica'

//ou

// import Matematica from './Matematica'

let n1:number = 10;
let n2:number = 2;




console.log(`SOMA: ${somar(n1,n2)}`);
console.log(`SUBTRAÇÃO: ${subtrair(n1,n2)}`);
console.log(`MULTIPLICAÇÃO: ${multiplicar(n1,n2)}`);

console.log(validator.isEmail('ana@email.com'))