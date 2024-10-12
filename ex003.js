const dados = require ("./dados.json");

function calculaMedia(){
    let soma = 0;
    let count = 0;

    dados.forEach(dia => {
        if (dia.valor !== 0) {
            soma += dia.valor;
            count++;
        }
    });
    return soma / count; 
}

function calcula(){
    const media = calculaMedia();
    let valorMaior=0;
    let valorMenor=0;
    let numeroDias=0;

    for (let i = 0; i < dados.length; i++) {
        const element = dados[i];
        if (valorMaior<element.valor) {
            valorMaior=element.valor;
        }
        if (valorMenor>element.valor) {
            valorMenor=element.valor;
        }
        if (element.valor>media) {
            numeroDias++;   
        }
    }
    return {valorMaior,valorMenor,numeroDias};
}

function main(){
    const result= calcula();
    console.log(`• O menor valor de faturamento ocorrido em um dia do mês: ${result.valorMenor}\n
    • O maior valor de faturamento ocorrido em um dia do mês: ${result.valorMaior}\n
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${result.numeroDias} `)
}

main();