const botaoEnviar = document.getElementById('form__enviar')

botaoEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const emailDado = document.getElementById('form__email').value;

    exibirModalNews(emailDado);
})

function exibirModalNews(emailDado) {
    const elementoQueRecebeModal = document.getElementById('insert-modal-news')

    if (emailEhValido(emailDado)) {
        elementoQueRecebeModal.innerHTML = `
        <div class="modal-header">
            <img src="./src/assets/icone_verificado.png" style="width:32px; height:32px; margin-right: auto">
            <h5 class="modal-title" id="exampleModalLabel" style="padding-left: 20px; padding-right: 10px">E-mail cadastrado com sucesso!</h5>
            <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"><img src="./src/assets/close_opsz24.png"></button>
        </div>
        <div class="modal-body">
            Em breve você receberá novidades exclusivas da Meteora.
        </div>
        `
    } else {
        elementoQueRecebeModal.innerHTML = `
        <div class="modal-header">
            <img src="./src/assets/icone_erro.png" style="width:32px; height:32px; margin-right: auto">
            <h5 class="modal-title" id="exampleModalLabel" style="padding-left: 20px; padding-right: 10px">E-mail não cadastrado!</h5>
            <button type="button" class="btn-close close-modal" data-bs-dismiss="modal" aria-label="Close"><img src="./src/assets/close_opsz24.png"></button>
        </div>
        <div class="modal-body">
            Verifique o e-mail informado e tente novamente.
        </div>
        `
    }
}

function emailEhValido(emailDado) {
    let RegExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailDado.match(RegExEmail)) {
      return true;
    } else {
      return false;
    }
}