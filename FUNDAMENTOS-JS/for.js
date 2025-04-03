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

let numero= 2
if (numero > 0)
    console.log("Positivo")
else if(numero < 0)
    console.log("Negativo")
else
console.log("Zero")

let idade = 20

if (idade <= 12)
    console.log("Crianca")
else if(idade<=17)
    console.log("Adolescente")
else if(idade<=59)
    console.log("Adulto")
else
    console.log("Idoso")


let numeroSecreto= Math.floor(Math.random()*10 )+1
while(true){
    let palpite =parseInt(prompt("Adivinhe O numero(1-10:"))
    if (palpite ===numeroSecreto){
        console.log("Aceertou!!")
        break
    }
      
    else
    console.log("Errou tente novamente!!")
}

let senhacorreta = 1234
let senha 
do {
    senha= prompt("Digite a senha:")
} while (senha !== senhacorreta)
    console.log("acesso permitdo") 



for (let i = 1 ; i <=10; i++){
    console.log(`i = ${i}`)
}

 