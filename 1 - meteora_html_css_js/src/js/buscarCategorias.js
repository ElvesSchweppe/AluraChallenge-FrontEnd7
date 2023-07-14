let categoriasListadas = []
const jsonCategorias = './json/categorias.json'

getCategorias()

async function getCategorias() {
    const res = await fetch(jsonCategorias)
    categoriasListadas = await res.json()
    
    exibirAsCategorias(categoriasListadas)
};

const elementoQueRecebeCategorias = document.getElementById('insert-categorias')
function exibirAsCategorias(categorias) {
    elementoQueRecebeCategorias.innerHTML = ``
    categorias.forEach(categoria => {
        elementoQueRecebeCategorias.innerHTML += `
        <li class="col ajuste-col filtro" id="${categoria.filtro}">
            <a href="#${categoria.filtro}" class="card ajuste-card-categoria">
                <img src="${categoria.imagem}" class="card-img-top" alt="${categoria.alt}">
                <div class="card-body ajuste-card-body">
                    <h5 id="nomeDaCategoria" class="card-title ajuste-card-title">${categoria.categoria}</h5>
                </div>
            </a>
        </li>    
        `
    })

    categorias.forEach(categoria =>{
        adicionarClickFiltro(categoria.filtro)
    })
}

function adicionarClickFiltro(idDaCategoria){
    var categoriaClicada = document.getElementById(idDaCategoria)
    categoriaClicada.addEventListener('click', filtrarProdutos)
}