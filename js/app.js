function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    if (verificarStatus(botao,imagem)) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
    } else {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
    }
}

function verificarStatus(botao,imagem){
    if(botao.classList.contains('dashboard__item__button--return') && imagem.classList.contains('dashboard__item__img--rented')) return false;
    else return true;
}