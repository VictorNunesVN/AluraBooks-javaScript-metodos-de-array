const botoes = document.querySelectorAll(".btn")

// aqui o forEach pega cada botao e faz o addEventListener()
botoes.forEach(btn => btn.addEventListener('click',filtarLivros))

function filtarLivros(){
    // verifica qual botão está sendo clicado ( aquele do addEventListener)
    const elementoBtn = document.getElementById(this.id)
    // pega o valor da categoria do botao (elementoBtn)
    const categoria = elementoBtn.value

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

    exibirOsLivrosNaTela(livrosFiltrados)
    console.log(elementoBtn)
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveis(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML= 
    `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}



