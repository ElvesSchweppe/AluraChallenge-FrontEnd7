let produtosListados = []
const jsonProdutos = './json/produtos.json'

getProdutos()

async function getProdutos() {
    const res = await fetch(jsonProdutos)
    produtosListados = await res.json()
    
    exibirCardProduto(produtosListados)
};

const elementoQueRecebeCardProduto = document.getElementById('insert-produtos')
function exibirCardProduto(listaDeProdutos) {
    elementoQueRecebeCardProduto.innerHTML = ``  
    
    if (listaDeProdutos.length == 0) {
        elementoQueRecebeCardProduto.innerHTML += `
        <div class="ajuste-card-nenhumProduto">
            <article class="card">
                <div class="card-body">
                    <h5 class="card-title">NENHUM PRODUTO ENCONTRADO</h5>
                    <p class="card-text">Infelizmente não encontramos nenhum Produto.</p>
                </div>
            </article>
        </div>  
        `
    } else {
        listaDeProdutos.forEach(produto => {
            elementoQueRecebeCardProduto.innerHTML += `
            <div class="col ajuste-col" value="${produto.categoria}">
                <article class="card ajuste-card-produtos">
                    <img src="${produto.imagem}" class="card-img-top ajuste-card-img" alt="${produto.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.produto}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <h5>R$ ${produto.preco}</h5>
                    </div>
                    <div class="card-footer ajuste-footer-produtos">
                        <a class="btn btn-primary ajuste-btn-produtos" id="${produto.codigo}" name="verMais" data-bs-toggle="modal" data-bs-target="#modal-produto">Ver mais</a>
                    </div>
                </article>
            </div>  
            `
        })
        listaDeProdutos.forEach(produto => {
            adicionarClickModal(produto.codigo)
        })
    }
    
}

function adicionarClickModal(idDoElementoBotao){
    var elemento = document.getElementById(idDoElementoBotao)
    elemento.addEventListener('click', (evento) => {
        evento.preventDefault();

        exibirModalProduto(idDoElementoBotao)})
}

