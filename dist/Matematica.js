"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = exports.subtrair = exports.somar = void 0;
let versao = "1.0";
function somar(x, y) {
    return x + y;
}
exports.somar = somar;
function multiplicar(x, y) {
    return x * y;
}
exports.multiplicar = multiplicar;
function subtrair(x, y) {
    return x - y;
}
exports.subtrair = subtrair;
//ou
exports.default = { somar, subtrair, multiplicar, versao };
// module.exports = {somar,subtrair,multiplicar};
// ou
// module.exports.soma = somar;
