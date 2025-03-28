//FOREACH
var nomes = ['maria', 'josé', 'joao']

nomes.forEach(function (nome) {
    console.log(nome)
})

var canais = ['globo', 'sbt', 'Record']
canais.forEach(function (canal) {
    canais.push('RedeTv')
    console.log(canal)
})

console.log(canais)

//MAP
var numeros = [1, 2, 3,4,5]
var dobro = numeros.map(function (numero) {
    return numero * 2
})

console.log(numeros)
console.log(dobro)
//FILTTER 
var alunos = [
    { nome: 'joão', idade: 15 },
    { nome: 'josé', idade: 18 },
    { nome: 'maria', idade: 20 },
]

var alunosDeMaior = alunos.filter(function (aluno) {
    return aluno.idade >= 18
})

console.log(alunosDeMaior)
//FIND
var estudantes = [
    { nome: 'joão' },
    { nome: 'josé' },
    { nome: 'maria' }
]
var estudante = estudantes.find(function (estudante) {
    return estudante.nome === 'josé'
})
console.log(estudante)
//EVERY

var colegas = [
    { nome: 'joão', idade: 18 },
    { nome: 'maria', idade: 20 },
    { nome: 'pedro', idade: 24 },
]

var todosColegasDemaior = colegas.every(function (colega) {
    return colega.idade > 18
})
console.log(todosColegasDemaior)
//SOME
var pesoDasMalas = [12, 32, 21, 29]
var temMalaAcimaDoPeso = pesoDasMalas.some(function (pesoDaMala) {
    return pesoDaMala > 30
})
console.log(temMalaAcimaDoPeso)
//REDUCE
var number = [1, 2, 3, 4, 5]
var soma = 0
soma = number.reduce(function (soma, number) {
    return soma + number
}, 0)
console.log(soma)

var jogadores = [
    { nome: 'vicente', idade: 20 },
    { nome: 'laison', idade: 17 },
    { nome: 'emerson', idade: 15 },
]

var time = jogadores.reduce(function (arrayTime, jogador) {
    arrayTime.push(jogador.nome)
    return arrayTime
}, [])
console.log(time)
// TREINANDO  REDUCE 

let escolas = [
    {
        nome: 'josé Antonio De Oliveira',
        idade: 35,
        telefone: '85 9 9659-5927',
        endereco: {
            rua: 'Av.João Ferreira',
            numero: 12
        }
    },
    {
        nome: 'Abel Ferreira Lima',
        idade: 59,
        tefone: '859 99666-512',
        endereco: {
            rua: 'lagoa da serra',
            numero: 0,
        }
    }
]
let aulasComecaHoje = escolas.reduce(function (arrayEscolas, escolaQueIraTerAula) {
    arrayEscolas.push(escolaQueIraTerAula.nome,escolaQueIraTerAula.endereco)
    return arrayEscolas
}, [])
console.log(aulasComecaHoje)
//TREINANDO SOME

let obesos = [112, 115, 166, 90, 85, 77, 188, 155]
let pessoasAcimaDoPeso = obesos.some(function (pesoDapessoa) {
    return pesoDapessoa >= 112
})
console.log(pessoasAcimaDoPeso)

//INTERADORES INTERÁVEIS 

// ITERADOR

var bruxos = ['harry potter', 'Granger', 'Rony Weasley']

var iteradorBruxos = bruxos[Symbol.iterator]()

iteradorBruxos.next()
iteradorBruxos.next()
iteradorBruxos.next()

// LAÇO FOR OF

for (var numero of numeros){
    console.log(numero)
}

for ( var numero of numeros){
    if ( numero > 3){
        break
    }
    console.log('situação 2',numero)
}

for (var numero of numeros){
    if (numero === 2 ){
        continue
    }
    console.log('situação 3', numero)
}

// LAÇO FOR IN

var perfilDoFacebook = {
    nome: 'Vicente Gomes',
    idade: 20,
    endereco: {
        rua: 'avenida frei cirilo Fortaleza - CE',
        numero: 4797
    }
}
for ( var dados in perfilDoFacebook){
    var info =perfilDoFacebook[dados]
    console.log(info)
}
 
// for ( var bruxo of bruxos){
//     chapeuSeletor.fazerSelecaoDacasa(bruxo)
// }
// console.log(bruxo)


//METODO SET
 var map = new Map()
 function funcao(){}
 var objeto = {}

 map.set('string', 'sou uma string')
 map.set(objeto,'sou um objeto')
 map.set(funcao,'sou uma função')

 console.log(map.get('string'))
 console.log(map.get(objeto))
 console.log(map.get(funcao))

 console.log('tamanho: ' + map.size)
 console.log(map.has('string'))
 console.log(map.has('abc'))

 map.delete('string')
 console.log(map.has('string'))

 map.clear()
 console.log('tamanho> ', map.size)

 var mapa = new Map()
 mapa.set('um',1)
 mapa.set('dois',2)
 mapa.set('tres',3)

 for ( var chave of mapa.keys()){
    console.log(chave)
 }

 for (var valor of mapa.values()){
    console.log(valor)
 }
 for (var entrada of mapa.entries()){
    console.log(entrada)
 }

 // WEAKMAP

 var weakMap = new WeakMap ()
 var elemento1 = Window
 var elemento2 = document.querySelector('body')

 weakMap.set(elemento1, 'sou o elemento1')
 weakMap.set(elemento2,'sou o elemento 2')

 console.log(weakMap.get(elemento1))
 console.log(weakMap.get(elemento2))

 