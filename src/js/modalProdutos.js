function exibirModalProduto(idDoProduto){
    const elementoQueRecebeModalProduto = document.getElementById('insert-modal-produto')
    const filtarProduto = produtosListados.filter(produto => produto.codigo == idDoProduto)
    const dadosDoProduto = filtarProduto[0]
        
    elementoQueRecebeModalProduto.innerHTML = `
        <div class="modal-header">
            <img src="./src/assets/icone_verificado.png" style="width:32px; height:32px; margin-right: auto">
            <h5 class="modal-title ajuste-modal-header" id="exampleModalLabel" style="padding-left: 12px; padding-right: 10px">Confira detalhes sobre o produto</h5>
            <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"><img src="./src/assets/close_opsz24.png"></button>
        </div>
        <div class="modal-body">
            <form class="card ajuste-modal-body">
                <div class="card-body modal-produtos-body">
                    <img src="${dadosDoProduto.imagem}" class="card-img-top modal-produtos-img" alt="${dadosDoProduto.alt}">
                    <div class="ajuste-modal-informacoes">
                        <h3 class="card-title">${dadosDoProduto.produto}</h3>
                        <p class="card-text">${dadosDoProduto.descricao}</p>
                        <hr class="separador"></hr>
                        <h5>R$ ${dadosDoProduto.preco}</h5>
                        <p class="card-text vendedor">${dadosDoProduto.vendedor}</p>
                        <hr class="separador separador-secundario"></hr>
                        <h5>${dadosDoProduto.option_1_nome}</h5>
                        <div id="opcao_1" class="ajuste-radio">                           
                            
                        </div>
                        <hr class="separador separador-secundario"></hr>
                        <h5>${dadosDoProduto.option_2_nome}</h5>
                        <div id="opcao_2" class="ajuste-radio">
                            
                        </div>

                        <div class="ajuste-footer-modal">
                            <a class="btn btn-primary ajuste-btn-produtos" id="${dadosDoProduto.codigo}">Adicionar à sacola</a>
                        </div>
                    </div>
                </div>
                
            </form>
        </div>
        `
        if (dadosDoProduto.option_1_nome != "") {
            conjuntoOpcoes1 = dadosDoProduto.option_1_variacao
            criaRadioOptions("opcao_1", conjuntoOpcoes1)
        } 
        
        if (dadosDoProduto.option_2_nome != "") {
            conjuntoOpcoes2 = dadosDoProduto.option_2_variacao
            criaRadioOptions("opcao_2", conjuntoOpcoes2)
        } 

}



function criaRadioOptions(elemento, arrayOpcoes){
    elementoQueRecebeOpcoes = document.getElementById(elemento)
    elementoQueRecebeOpcoes.innerHTML = ``

    arrayOpcoes.forEach(opcao => {
        
        var posicao = arrayOpcoes.indexOf(opcao)
        var opcaoCriada = `
            <div class="ajuste-radio-option">
                <input type="radio" id="opt_${posicao}__${elemento}" name="opt_${elemento}" value="${opcao}">
                <label for="opt_${posicao}__${elemento}">${opcao}</label>
            </div>
        `
        elementoQueRecebeOpcoes.innerHTML += opcaoCriada
    });

}