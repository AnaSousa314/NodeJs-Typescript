"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Matematica = require('./Matematica');
const Matematica_1 = require("./Matematica");
const validator_1 = __importDefault(require("validator"));
// ou
// import * as Matematica from './Matematica'
//ou
// import Matematica from './Matematica'
let n1 = 10;
let n2 = 2;
console.log(`SOMA: ${Matematica_1.somar(n1, n2)}`);
console.log(`SUBTRAÇÃO: ${Matematica_1.subtrair(n1, n2)}`);
console.log(`MULTIPLICAÇÃO: ${Matematica_1.multiplicar(n1, n2)}`);
console.log(validator_1.default.isEmail('ana@email.com'));
