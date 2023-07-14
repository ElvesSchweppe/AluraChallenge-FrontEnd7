let facilidadesListadas = []
const jsonFacilidades = './json/facilidades.json'

getProdutos()

async function getProdutos() {
    const res = await fetch(jsonFacilidades)
    facilidadesListadas = await res.json()
    
    exibirFacilidade(facilidadesListadas)
};


const elementoQueRecebeFacilidade = document.getElementById('insert-facilidades')
function exibirFacilidade(facilidades) {
    
    facilidades.forEach(facilidade => {
        elementoQueRecebeFacilidade.innerHTML += `
        <div class="col ajuste-col">
            <article class="card mb-3 ajuste-card-facilidades">
                <div class="row g-0">
                    <div class="col-3 ajuste-icone-facilidades">
                        <img src="${facilidade.icone}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-9">
                        <div class="card-body">
                            <h5 class="card-title ajuste-card-title-facilidades">${facilidade.facilidade}</h5>
                            <p class="card-text">${facilidade.descricao}</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>  
    `
    })
}
