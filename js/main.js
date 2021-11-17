
function desenha() {
    let cards = document.getElementsByClassName("card");
    for (let i in cards) {
        cards[i].style.left = i % 8 * 165 + "px";
        cards[i].style.top = i < 8 ? 5 + "px" : 250 + "px";
    }
}

function startGame() {
    desenha();
}

startGame();