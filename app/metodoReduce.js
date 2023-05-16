function calcularValorTotalDeLivrosDisponiveis(livros){
    // pega o valor do livro e vai iterando , começando pelo indice 0.
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}

