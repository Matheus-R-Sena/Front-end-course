//Função Declarativa
function soma (i, j){

    const resultado = i + j;

    return resultado;
}




//Função Armazenada

const mult = () => 4*4 ;

const pot = x => x*x;

const olaMundo = () => 'Hello World';

/* 

console.log(`soma: ${soma(5, 3)}`);
console.log(`multiplição: ${mult()}`)
console.log(`potência: ${pot(5)}`);
console.log(`olaMundo: ${olaMundo()}`);

setTimeout(() => {console.log(`\n\nOutra potência depois de 5 segundos: ${pot(2)}`)}, 1000);

*/




function imprimeArray (lista) {
    for (let i = 0; i < lista.length; i++)
    {
        console.log(lista[i]);
    }
}

function faz (x) {
  
    return x = x + 3;

}

const array01 = [1, 2, 3]
const array02 = array01.map((x) => faz(x))

imprimeArray(array01);
imprimeArray(array02);

