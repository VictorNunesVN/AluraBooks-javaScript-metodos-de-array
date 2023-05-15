const botoes = document.querySelectorAll(".btn")

// aqui o forEach pega cada botao e faz o addEventListener()
botoes.forEach(btn => btn.addEventListener('click',filtarLivros))

function filtarLivros(){
    // verifica qual botão está sendo clicado ( aquele do addEventListener)
    const elementoBtn = document.getElementById(this.id)
    // pega o valor da categoria do botao (elementoBtn)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    console.log(elementoBtn)
  
}



