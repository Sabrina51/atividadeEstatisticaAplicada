// 1 verificar a quantidade de numeros
// 2 colocar em rol
// 3 media
// 4 mediana (impar e par)
// 5 MODA

var domElementoConjuntoNumero = document.querySelector('#conjunto_numeros')
var domResultados = document.querySelector('#resultados')
var domConjunto = document.getElementById('conjunto')
var conjuntoNumero = []

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var botaoAdicionar = document.getElementById("adicionar")

        botaoAdicionar.click()
    }
})

function adicionar() {
    if (domElementoConjuntoNumero.value > 9999 || domElementoConjuntoNumero.value === "") {
        alert('[ERRO] Caixa em branco ou número inválido!')
    } else {
        var numero = Number(domElementoConjuntoNumero.value)
        conjuntoNumero.push(numero)
        domConjunto.innerHTML = `<p><strong>{${conjuntoNumero}}</strong></p>`
    }
    domElementoConjuntoNumero.value = ''
    domElementoConjuntoNumero.focus();
}

function calcular() {

    if (conjuntoNumero.length === 0 || conjuntoNumero.length < 2) {
        alert('[ERRO] Adicione dois ou mais números ao conjunto!')
    } else {

        domResultados.innerHTML = ''
        //VERIFICANDO QUANTIDADE DE NUMEROS
        var quantidadeNumero = conjuntoNumero.length;
        domResultados.innerHTML += `<p>O conjunto tem ${quantidadeNumero} numeros</p>`

        //PONDO OS VALORES EM ORDEM CRESCENTE "ROL"
        var crescente = conjuntoNumero.sort((a, b) => a - b)
        domResultados.innerHTML += `<p>Em ROL {${crescente}}</p>`

        //SOMANDO DOS VALORES DO VETOR
        var somaNumeros = (a, b) => a + b;
        var soma = conjuntoNumero.reduce(somaNumeros)
        domResultados.innerHTML += `<p>A soma dos valores é ${soma}</p>`

        //CALCULANDO A MEDIA
        domResultados.innerHTML += `<p>A média aritmética é ${soma/quantidadeNumero}</p>`

        //CALCULANDO AMPLITUDE TOTAL (max - min)
        var indice = conjuntoNumero.length - 1
        var amplitude = crescente[indice] - crescente[0]
        domResultados.innerHTML += `<p>A amplitude total é ${amplitude}</p>`

        if (conjuntoNumero.length % 2 !== 0) {
            //MEDIANA SE FOR IMPAR (numero + 1 / 2)
            indiceImpar = (quantidadeNumero - 1) / 2;
            var medianaImpar = conjuntoNumero[indiceImpar]
            domResultados.innerHTML += `<p>A mediana é ${medianaImpar}</p>`
        } else {
            //MEDIANA SE FOR PAR (indice 1 = (numero / 2) + o indice 2 = (numero / 2) + 1)
            indicePar = quantidadeNumero / 2 - 1; //no codigo foi decrementado 1 por conta do indice começar em 0
            var medianaPar = (conjuntoNumero[indicePar] + conjuntoNumero[indicePar + 1]) / 2
            domResultados.innerHTML += `<p>A mediana é ${medianaPar}</p>`
        }

        function calcularModa(valores) {
            const [repeticiones, moda] = valores.reduce((acc, val) => {
                    const nn = contar(valores, val);
                    if (nn === acc[0] && acc[1].every((item) => item !== val)) {
                        acc[1].push(val);
                    } else if (nn > acc[0]) {
                        acc = [nn, [val]];
                    }
                    return acc;
                },
                [0, []]
            );

            return {
                repeticiones,
                moda
            };
        }

        function contar(arrayElmentos, valorAContar) {
            return arrayElmentos.filter((elemento) => elemento === valorAContar).length;
        }
  
        let testModa = calcularModa(conjuntoNumero)
        domResultados.innerHTML +=`<p>A MODA é ${testModa.moda}</p>`
    }
}

function limpar() {
    domResultados.innerHTML = ''
    domConjunto.innerHTML = ''
    conjuntoNumero = []
}

function limpar_conjunto() {
    domConjunto.innerHTML = ''
    conjuntoNumero = []
}