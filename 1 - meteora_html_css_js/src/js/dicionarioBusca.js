var produtosNaBusca = []

function dicionarioSugestoes(registrosDosProdutos) {
    const dicionarioDeSugestoes = new Map()
    
    registrosDosProdutos.forEach(linha => {
        const chaveProduto = linha.codigo
        const listaDeSugestoes = new Array()

        const palavrasDaLinha = linha.produto + " " +
            linha.descricao + " " +
            linha.classes + " " +
            linha.vendedor + " " +
            linha.option_1_variacao
        
        const palavrasEncontradas = palavrasDaLinha.split(/[,.!\s]/)
        
        palavrasEncontradas.forEach(palavra =>{
            if (palavra.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ]{3,}/)) {
                listaDeSugestoes.push(palavra.toLowerCase())
            }
        })
        
        dicionarioDeSugestoes.set(chaveProduto, listaDeSugestoes)
    })

    return dicionarioDeSugestoes
}


function reviraDicionario(termo) {
    const dic = dicionarioSugestoes(produtosListados)
    
    const exibirSugestao = []
    const produtos = []
    
    dic.forEach((registro, chave) => {
        var palavrasDoProduto = registro
        
        palavrasDoProduto.forEach(palavra =>{
            if (palavra.match(termo)) {
                if (produtos.indexOf(chave) == -1) {
                    produtos.push(chave)
                }
                if (exibirSugestao.indexOf(palavra) == -1) {
                    exibirSugestao.push(palavra)
                }
            }
        })

    })
    
    return [exibirSugestao, produtos]
}

function listarTresSugestoes (termo) {
    const elementoQueRecebeSugestao = document.getElementById("sugestaoBusca")
    elementoQueRecebeSugestao.innerHTML = ``

    const sugestoes = reviraDicionario(termo)[0]
      
    sugestoes.forEach(sugestao => {
        elementoQueRecebeSugestao.innerHTML += `
            <li class='sugestao'>${sugestao}</li>
            `
    })

    const criarClickSeleciona = document.querySelectorAll('.sugestao')
    
    criarClickSeleciona.forEach(item => item.addEventListener('click', () => {
        campoDigitacao = document.getElementById('campoPesquisa')
        var valorClicado = item.textContent
        campoDigitacao.value = valorClicado
        listarProdutosComTermoBuscado(valorClicado)
    }))
    
        
    if (elementoQueRecebeSugestao.innerHTML != ``) {
        abreSugestao()
    }
}

function fechaSugestao(){
    const elementoQueRecebeSugestao = document.getElementById("sugestaoBusca")
    elementoQueRecebeSugestao.classList.remove('ativa')
    elementoQueRecebeSugestao.classList.add('inativa')
}

function abreSugestao(){
    const elementoQueRecebeSugestao = document.getElementById("sugestaoBusca")
    elementoQueRecebeSugestao.classList.remove('inativa')
    elementoQueRecebeSugestao.classList.add('ativa')
}

function listarProdutosComTermoBuscado(termo) {
    fechaSugestao()
    const dic = dicionarioSugestoes(produtosListados)
    const produtos = reviraDicionario(termo)[1]

    produtos.forEach(codigoListado => {
        var testeNoDic = dic.get(codigoListado)
        testeNoDic.forEach(palavra =>{
            if (palavra.indexOf(termo) != -1) {
                if (produtosNaBusca.indexOf(codigoListado)) {
                    produtosNaBusca.push(codigoListado)
                }
            }    
        })
        
    })
}