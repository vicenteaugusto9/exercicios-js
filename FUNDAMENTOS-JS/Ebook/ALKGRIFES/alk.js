let produtos = [
    {
        regata: {
            amarela: 10,
            azul: 5,
            vermelha: 10,
            preta: 15
        }
    },
    {
        polo: {
            amarela: 10,
            azul: 5,
            vermelha: 10,
            preta: 15
        }
    },
    {
        outside: {
            amarela: 10,
            azul: 5,
            vermelha: 10,
            preta: 15
        }
    },
    {
        tactel: {
            amarela: 10,
            azul: 5,
            vermelha: 10,
            preta: 15
        }
    },
    {
        kitDryFit: {
            amarela: 10,
            azul: 5,
            vermelha: 10,
            preta: 15
        },
    }

]

let vendas = produtos.reduce(function (arrayProdutos,quantidadeEmEstoque) {
    arrayProdutos.push(quantidadeEmEstoque.kitDryFit)
    return arrayProdutos
})
console.log(vendas)
