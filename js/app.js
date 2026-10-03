function alterarStatus(numero){
    verificarStatus(numero);
}

function verificarStatus(numero){
    let jogo = document.getElementById(`game-${numero}`);
    if(jogo.classList.contains('dashboard__item__button--return')) return false;
    else return true;
}