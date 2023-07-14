acompanharDigitacao()

function acompanharDigitacao() {
    const campoDigitacao = document.getElementById('campoPesquisa')

    campoDigitacao.addEventListener('keypress', (eventoEnter) =>{
        keyEnter = eventoEnter.key
        if (keyEnter == 'Enter') {
            eventoEnter.preventDefault()
            pesquisaTextual(eventoEnter)   
        }
    })

    campoDigitacao.addEventListener('keyup', (evento) =>{
        if(evento.key != 'Enter') {
            var valorDigitado = evento.target.value
            if (valorDigitado.length >= 3) {
                pesquisaTextual(evento)
            } else {
                fechaSugestao()
            }
        }
    })
}

function pesquisaTextual(evento) {
    var digitado = evento.target.value
    var tecla = evento.key
    const campoDigitacao = document.getElementById('campoPesquisa')

    if (tecla == 'Enter') {
        const produtos = reviraDicionario(digitado)[1]
        fechaSugestao()
        filtrarPorCodigo(produtos, digitado)
        mostrarFiltro()
        campoDigitacao.value = ""
        const botoesCategorias = document.querySelectorAll('.filtro')
        exibirTodasCategorias(botoesCategorias)
        
    } else {
        if (tecla == 'Escape') {
            campoDigitacao.value = ""
            fechaSugestao()
        } else {
            listarTresSugestoes(digitado.toLowerCase())
        }
    }  
}

const botaoBuscar = document.getElementById('botaoBuscar')
botaoBuscar.addEventListener('click', ()=> {
    const campoDigitacao = document.getElementById('campoPesquisa')
    var valorDigitado = campoDigitacao.value
    const botoesCategorias = document.querySelectorAll('.filtro')
    exibirTodasCategorias(botoesCategorias)


    if (valorDigitado != '') {
        const produtos = reviraDicionario(valorDigitado)[1]
        fechaSugestao()
        filtrarPorCodigo(produtos, valorDigitado)
        mostrarFiltro()
        campoDigitacao.value = ""
    }

})