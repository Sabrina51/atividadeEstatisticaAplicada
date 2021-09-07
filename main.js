// 1 verificar a quantidade de numeros
// 2 colocar em rol
// 3 media
// 4 mediana (impar e par)
// 5 MODA

var domElementoConjuntoNumero = document.querySelector('#conjunto_numeros')
var conjuntoNumero = []

function adicionar() {
    if (domElementoConjuntoNumero.value < 0 || domElementoConjuntoNumero.value > 9999 || domElementoConjuntoNumero.value === "") {
        alert('[ERRO] Caixa em branco ou número inválido!')
    } else {
        var numero = Number(domElementoConjuntoNumero.value)
        conjuntoNumero.push(numero)
        console.log(conjuntoNumero)

        var domConjunto = document.getElementById('conjunto')
        domConjunto.innerHTML = `{${conjuntoNumero}}`
        
    }
    domElementoConjuntoNumero.value = ''
    domElementoConjuntoNumero.focus();
}

console.log(conjuntoNumero)


function calcular() {
    var domResultato = document.querySelector('#resultados')
    if (conjuntoNumero.length === 0 || conjuntoNumero.length < 2) {
        alert('[ERRO] Adicione dois ou mais números ao conjunto!')
    } else {
        //VERIFICANDO QUANTIDADE DE NUMEROS
        var quantidadeNumero = conjuntoNumero.length;

        domResultato.innerHTML +=`<p>O conjunto tem ${quantidadeNumero} numeros</p>`

        //PONDO OS VALORES EM ORDEM CRESCENTE "ROL"
        var crescente = conjuntoNumero.sort((a, b) => a - b)
        domResultato.innerHTML +=`<p>Em ROL {${crescente}}</p>`

        //SOMANDO DOS VALORES DO VETOR
        var somaNumeros = (a, b) => a + b;
        var soma = conjuntoNumero.reduce(somaNumeros)
        domResultato.innerHTML +=`<p>A soma dos valores é ${soma}</p>`

        //CALCULANDO A MEDIA
        domResultato.innerHTML +=`<p>A média aritmética é ${soma/quantidadeNumero}</p>`

        //CALCULANDO AMPLITUDE TOTAL (max - min)
        var indice = conjuntoNumero.length - 1
        var amplitude = crescente[indice] - crescente[0]
        domResultato.innerHTML +=`<p>A amplitude total é ${amplitude}</p>`

        if (conjuntoNumero.length % 2 !== 0) {
            //MEDIANA SE FOR IMPAR (numero + 1 / 2)
            indiceImpar = (quantidadeNumero - 1) / 2;
            var medianaImpar = conjuntoNumero[indiceImpar]
            domResultato.innerHTML +=`<p>A mediana é ${medianaImpar}</p>`
        } else {
            //MEDIANA SE FOR PAR (indice 1 = (numero / 2) + o indice 2 = (numero / 2) + 1)
            indicePar = quantidadeNumero / 2 - 1; //no codigo foi decrementado 1 por conta do indice começar em 0
            var medianaPar = (conjuntoNumero[indicePar] + conjuntoNumero[indicePar + 1]) / 2
            domResultato.innerHTML +=`<p>A mediana é ${medianaPar}</p>`
        }

        //VERIFICANDO A MODA (número que mais se repete no conjunto)
        var modaConjunto = [];
        var modaFuncao = conjuntoNumero.filter(function (elemento, i) {
            if (conjuntoNumero.indexOf(elemento) !== i) {
                modaConjunto.push(elemento)
            }
            return conjuntoNumero.indexOf(elemento == i)
        })

        domResultato.innerHTML +=`<p>A MODA é ${modaConjunto}</p>`
        var moda = [];
        var modaFuncao1 = modaConjunto.filter(function (elemento, i) {
            if (modaConjunto.indexOf(elemento) !== i) {
                moda.push(elemento)
            }
            return modaConjunto.indexOf(elemento == i)
        })

        domResultato.innerHTML +=`<p>A MODA é ${moda}</p>`
    }
}

function limpar(){
    alert('limpar')
}