// Formula para saber se o numero faz parte da sequencia Fibonacci
// 5n²+4 ou 5n²-4

function fibonacci(n){
    const condicao1 = (5*(n*n))+4;
    const condicao2 = (5*(n*n))-4;
    return raizPerfeita(condicao1) || raizPerfeita(condicao2);
}

function raizPerfeita(x){
    const raizQuadrada = Math.sqrt(x);
    return Number.isInteger(raizQuadrada)
}
function main(n){
    const result = fibonacci(n);
    if (result){
        console.log(`${n} pertence a sequencia Fibonacci.`);
    }
    else{
        console.log(`${n} nao pertence a sequencia Fibonacci.`);
    }
}
main(20);

