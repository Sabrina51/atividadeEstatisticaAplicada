var conjuntoNumero = [10,9,9,7,5,8,6,9,10,7];

        //VERIFICANDO QUANTIDADE DE NUMEROS
        var quantidadeNumero = conjuntoNumero.length;
        console.log(`O conjunto tem ${quantidadeNumero} numeros.`)

        //PONDO OS VALORES EM ORDEM CRESCENTE "ROL"
        var crescente = conjuntoNumero.sort((a, b) => a - b);
        console.log(`ROL: {${crescente}}.`)

        //SOMA DOS VALORES DO VETOR
        var somaNumeros = (a, b) => a + b;
        var soma = conjuntoNumero.reduce(somaNumeros);
        console.log(`A soma dos valores: ${soma}.`)

        //CALCULANDO A MEDIA
        console.log(`Média: ${soma/quantidadeNumero}.`)
        
        //AMPLITUDE TOTAL
        var indice = conjuntoNumero.length - 1;
        var amplitude = crescente[indice] - crescente[0];
        console.log(`Amplitude total: ${amplitude}.`)

        if(conjuntoNumero.length%2 !== 0){
        //MEDIANA SE FOR IMPAR (numero + 1 / 2)
        indiceImpar = quantidadeNumero + 1 / 2; 
        var medianaImpar = conjuntoNumero[indiceImpar];
        console.log(`Mediana: ${medianaimpar}.`)
        } else {
        //MEDIANA SE FOR PAR (indice 1 = (numero / 2) + o indice 2 = (numero / 2) + 1)
        indicePar = quantidadeNumero / 2 - 1 ;  //no codigo foi decrementado 1 por conta do indice começar em 0
        var medianaPar = (conjuntoNumero[indicePar] + conjuntoNumero[indicePar + 1]) / 2;
        console.log(`Mediana - ${medianaPar}.`)
        }

        //VERIFICANDO A MODA
        var modaConjunto = [];
        var moda = conjuntoNumero.filter(function(elemento, i){
            if (conjuntoNumero.indexOf(elemento) !== i){
                modaConjunto.push(elemento)
            }
            return conjuntoNumero.indexOf(elemento == i)
        })

        console.log(modaConjunto)
