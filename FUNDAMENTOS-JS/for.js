let contador = 1

while( contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}


for (let i = 1; i <= 10 ; i++){
    console.log(`i e igual a ${i}`)
}
      
const notas =[6.9,8.7,9.0,10,5.4,10]
for(let i = 0;i< notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}

function getInteiroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 

while( opcao != -1){
        opcao = getInteiroAleatorio(-1,10)
        console.log(`opcao escolhida = ${opcao}`)
}
console.log('ate a a proxima ')