var oQueExibir = 'todas'

function filtrarProdutos() {
    const botoesCategorias = document.querySelectorAll('.filtro')
    const elementoClicado = document.getElementById(this.id)
    var elementoDaCategoria = elementoClicado.getElementsByTagName('h5')[0]
    var nomeDaCategoria = elementoDaCategoria.innerHTML
    var valorCategoria = elementoClicado.id

    if (oQueExibir == valorCategoria) {
        exibirTodasCategorias(botoesCategorias)
        valorCategoria = 'todas'
        oQueExibir = 'todas'
        fecharFiltro()
    } else {
        exibirCategoria(valorCategoria, botoesCategorias)
        oQueExibir = valorCategoria
        mostrarFiltro()
    }
    
    let produtosFiltrados = oQueExibir == 'todas' ? mostrarTodos() : filtrarPorCategoria(valorCategoria, nomeDaCategoria)

    exibirCardProduto(produtosFiltrados)
}

function filtrarPorCategoria(valorCategoria, nomeDaCategoria) {
    let mensagem = 'Aqui estão os produtos disponíveis na categoria: <strong>' + nomeDaCategoria + '</strong>'
    inserirAvisoFiltro(mensagem)
    return produtosListados.filter(produto => produto.categoria == valorCategoria)
}

function filtrarPorCodigo(codigosFiltrados, termo) {
    let mensagem = 'Aqui estão os produtos encontrados na pesquisa por: <strong>' + termo + '</strong>'
    inserirAvisoFiltro(mensagem)
    const quaisCodigosExibir = (codigosFiltrados, codigo) => codigosFiltrados.indexOf(codigo) != -1
    cardFiltro = produtosListados.filter(produto =>  quaisCodigosExibir(codigosFiltrados, produto.codigo))
    exibirCardProduto(cardFiltro)
    produtosNaBusca=[]
}

function inserirAvisoFiltro(mensagem) {
    const elementoQueRecebeAviso = document.getElementById('avisoFiltro')
    elementoQueRecebeAviso.innerHTML = ``
    elementoQueRecebeAviso.innerHTML += `
        <div>
            <h5>Resultado da Busca</h5>
            <p>${mensagem}</p>
        </div>
        <button  type="" id="fecharFiltro" >Fechar Pesquisa</button>
    `
    const botaoFechar = document.getElementById('fecharFiltro')
    botaoFechar.addEventListener('click', limparFiltro)
}

function limparFiltro() {
    fecharFiltro()
    exibirCardProduto(produtosListados)
    const botoesCategorias = document.querySelectorAll('.filtro')
    exibirTodasCategorias(botoesCategorias)
}

function mostrarFiltro(){
    let filtro = document.getElementById('avisoFiltro')
    filtro.classList.remove('inativo')
    filtro.classList.add('ativo')
}

function fecharFiltro() {
    let filtro = document.getElementById('avisoFiltro')
    filtro.classList.remove('ativo')
    filtro.classList.add('inativo')
}


function mostrarTodos() {
    return produtosListados
}

function exibirTodasCategorias (categoriasExistentes) {
    categoriasExistentes.forEach(categoria =>{
        imagem = (categoria.getElementsByClassName('card-img-top')[0])
        texto = (categoria.getElementsByClassName('ajuste-card-body')[0])
        imagem.classList.remove('classeInativa')
        texto.classList.remove('classeInativa')
        imagem.classList.add('classeAtiva')
        texto.classList.add('classeAtiva')
    })
}

function exibirCategoria (valorCategoria, categoriasExistentes) {
    categoriasExistentes.forEach(card => {
        imagem = (card.getElementsByClassName('card-img-top')[0])
        texto = (card.getElementsByClassName('ajuste-card-body')[0])
        
        if (card.id == valorCategoria) {      
            imagem.classList.remove('classeInativa')
            texto.classList.remove('classeInativa')      
            imagem.classList.add('classeAtiva')
            texto.classList.add('classeAtiva')
        } else {
            imagem.classList.remove('classeAtiva')
            texto.classList.remove('classeAtiva')
            imagem.classList.add('classeInativa')
            texto.classList.add('classeInativa')
            
        }
    })
    
}
