function alterarStatus(id){
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    if (verificarStatus(imagem)) {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    } else {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${jogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    }
    contarJogosAlugados();
}

function verificarStatus(imagem){
    if(imagem.classList.contains('dashboard__item__img--rented')) return false;
    else return true;
}

function contarJogosAlugados(){
    let jogosAlugados = 0;
    for(let i = 1; i < 4; i++){
        let jogo = document.getElementById(`game-${i}`);
        let imagem = jogo.querySelector('.dashboard__item__img');
        if (!verificarStatus(imagem)) jogosAlugados++;
    }
    console.log(`Jogos alugados ${jogosAlugados}`)
}