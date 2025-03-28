// PAR NOME VALOR
const saudacao = 'opa' //contexto léxico 1 

function exec() {
    const saudacao = 'tamo junto rapaziada' //contexto léxico 2
    return saudacao
}

//OBJETOS SAO GRUPOS ANINHADOS DE PARES NOME/VALOR
const cliente = {
    nome: 'pedro',
    idade: 18,
    peso: 121,
    endereco: {
        logradouro: 'rua joaquim santana',
        numero: 2
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)