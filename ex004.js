//SP – R$67.836,43
//RJ – R$36.678,66
//MG – R$29.229,88
//ES – R$27.165,48
//Outros – R$19.849,53


// 100% = 180.759,98
// xsp= 67.836,43/
// xsp= 37,528%

// x= (valorEstado/180759.98)*100

const list= [   
    {
        estado: "SP",
        valor: 67836.43
    },
    {
        estado: "RJ",
        valor: 36678.66
    },
    {
        estado: "MG",
        valor: 29229.88
    },
    {
        estado: "ES",
        valor: 27165.48
    },
    {
        estado: "OUTROS",
        valor: 19849.53
    }
]

function calculaPercentual(valorEstado){
    const valorTotal = calculaValorTotal();
    return (valorEstado/valorTotal)*100;

}

function calculaValorTotal(){
    let valorTotal=0;

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        valorTotal += element.valor;
    }
    return valorTotal;
}

function main() {
    
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const valorPercentual = calculaPercentual(element.valor);
        console.log(`${element.estado}-> valor percentual: ${valorPercentual}`) 
          
    }
}
main();