const fs =  require('fs');
//criando e colocando dados na linha 0 
fs.writeFileSync('input.txt', '200 30', 'utf8');

//lendo arquivo
var input = fs.readFileSync('input.txt', 'utf8');

//quebrando e colocando em uma array por linhas (20 e 30 estarão no mesmo índice do array)
var lines = input.split('\n');

// Se a primeira linha contém vários números separados por espaço:
var numbers = lines[0].split(' ').map(Number);
// map cria um novo array


var A = numbers[0];
var B = numbers[1];

const SOMA = A + B;

console.log("SOMA = "+SOMA);