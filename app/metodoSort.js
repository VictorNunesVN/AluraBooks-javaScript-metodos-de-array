let btnOrderPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrderPorPreco.addEventListener('click',ordernarLivrosPorPreco)

function ordernarLivrosPorPreco(){
    let livrosOrdenados =  livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}