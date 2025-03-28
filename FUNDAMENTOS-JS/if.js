function SeforVerdadeEuFalo(nota){
    if (nota >=7)
        console.log("Aprovado")
    else 
        console.log("reprovado")
}
SeforVerdadeEuFalo(8)
SeforVerdadeEuFalo(6)

function ComprasDoMes(compras){
    if (compras >=9&&10)
        console.log("Gastou muito este mes")
        else if(compras >=6&&5)
            console.log('gastou pouco')
        else if (compras <=4&&3)
             console.log('mao de vaca')
    else 
        console.log('nao gastou nada')
}

ComprasDoMes(11)
ComprasDoMes(7)
ComprasDoMes(6)
ComprasDoMes(4)
ComprasDoMes()