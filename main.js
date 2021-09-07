// 1 verificar a quantidade de numeros
// 2 colocar em rol
// 3 media
// 4 mediana (impar e par)
// 5 MODA

//PRINTANDO O CONJUNTO
var conjuntoNumero = [1, 5, 4, 7, 6, 2, 1, 5, 4, 4, 85];

//VERIFICANDO QUANTIDADE DE NUMEROS
var quantidadeNumero = conjuntoNumero.length;

console.log(`O conjunto é {${conjuntoNumero}}`)

console.log(`O conjunto tem ${quantidadeNumero} numeros`)

//PONDO OS VALORES EM ORDEM CRESCENTE "ROL"
var crescente = conjuntoNumero.sort((a, b) => a - b)
console.log(`Em ROL {${crescente}}`)

//SOMANDO DOS VALORES DO VETOR
var somaNumeros = (a, b) => a + b;
var soma = conjuntoNumero.reduce(somaNumeros)
console.log(`A soma dos valores é ${soma}`)

//CALCULANDO A MEDIA
console.log(`A média aritmética é ${soma/quantidadeNumero}`)

//CALCULANDO AMPLITUDE TOTAL (max - min)
var indice = conjuntoNumero.length - 1
var amplitude = crescente[indice] - crescente[0]
console.log(`A amplitude total é ${amplitude}`)

if (conjuntoNumero.length % 2 !== 0) {
    //MEDIANA SE FOR IMPAR (numero + 1 / 2)
    indiceImpar = (quantidadeNumero + 1) / 2;
    var medianaImpar = conjuntoNumero[indiceImpar]
    console.log(`A mediana é ${medianaImpar}`)
} else {
    //MEDIANA SE FOR PAR (indice 1 = (numero / 2) + o indice 2 = (numero / 2) + 1)
    indicePar = quantidadeNumero / 2 - 1; //no codigo foi decrementado 1 por conta do indice começar em 0
    var medianaPar = (conjuntoNumero[indicePar] + conjuntoNumero[indicePar + 1]) / 2
    console.log(`A mediana é ${medianaPar}`)
}

//VERIFICANDO A MODA (número que mais se repete no conjunto)
var modaConjunto = [];
var modaFuncao = conjuntoNumero.filter(function (elemento, i) {
    if (conjuntoNumero.indexOf(elemento) !== i) {
        modaConjunto.push(elemento)
    }
    return conjuntoNumero.indexOf(elemento == i)
})

console.log(`A MODA é ${modaConjunto}`)
var moda = [];
var modaFuncao1 = modaConjunto.filter(function (elemento, i) {
    if (modaConjunto.indexOf(elemento) !== i) {
        moda.push(elemento)
    }
    return modaConjunto.indexOf(elemento == i)
})

console.log(`A MODA é ${moda}`)