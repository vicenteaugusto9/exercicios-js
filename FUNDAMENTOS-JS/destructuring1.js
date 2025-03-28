// novo recurso

const pessoa = {
    nome: 'Vicente Augusto',
    idade: 20,
    peso: 121,
    endereco: {
        logradouro: ' Rua Joaquim Santana',
        numero: 2
    }
}
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep = 'nao-existe' } } = pessoa
console.log(logradouro, numero, cep)

// const {conta:{ag,num}}=pessoa
// console.log(ag,num)