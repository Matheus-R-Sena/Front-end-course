// Interpolação vs Concatenação

let nome = "João";
let idade = 26;
let hoje = new Date();
//Concatenação
console.log("Meu nome é " + nome + " e tenho " + idade + " anos");

//Interpolação

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

console.log(`Hoje é ${hoje}`);

console.log(`Podemos executar qualquer coisa dentro de um template literal ${console.log("Hello")}`);

// Operadores de comparação

let string = "4";
let num = 4;
console.log(typeof string);
console.log(string === num);
console.log(string == num);
console.log(string > num);
console.log(string < num);
console.log(string == num);
console.log(string === num);
console.log(typeof string);

console.log("O resultado é: " + 10); // "O resultado é: 10"
console.log("5" + 2);  // "52" (o número 2 virou string)
console.log(true + ""); // "true"



