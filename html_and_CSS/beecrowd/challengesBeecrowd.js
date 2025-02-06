var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Pegando o valor de entrada como ponto flutuante
var A = parseInt(lines[0]); // Primeiro número (linha 0)
var B = parseInt(lines[1]); // Segundo número (linha 1)

const SUM = A + B;

console.log("SOMA = " + SUM);
