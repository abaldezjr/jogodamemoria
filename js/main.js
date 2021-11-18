const memoria = new Memoria();
const player = new Player();

let erros = 0, matches = 0, cartasViradas = [], indiceMusica = 0;

let modalGameOver = document.getElementById('modalgameover');
let cards = document.getElementsByClassName('card');
let playerView = document.getElementById('bg-music');
let clickSound = document.getElementById('click-sound');
let btnMudo = document.getElementById('mudo');
let btnProxima = document.getElementById('proxima');
let matchSound = document.getElementById("match-sound");

function desenhar() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.left = i % 8 * 165 + 'px';
        cards[i].style.top = i < 8 ? 5 + 'px' : 250 + 'px';
    }
}

function inicializarCards() {
    let cartas = [];
    cartas = memoria.escolherCartas();
    let cardFront, cardBack;
    for (let i = 0; i < cards.length; i++) {
        cardFront = cards[i].querySelector('.front');
        cardBack = cards[i].querySelector('.back');
        cardFront.classList.remove('virar-carta', 'match');
        cardFront.style.background = "url('" + cartas[i].src + "')";
        cardFront.setAttribute('id', cartas[i].id);
        cardBack.classList.remove('virar-carta', 'match');
        cards[i].addEventListener('click', mostrarCarta, false);
    }
}

function mostrarCarta() {
    if (cartasViradas.length < 2) {
        var faces = this.getElementsByClassName('face');
        if (faces[0].classList.length > 2) {
            return;
        }
        faces[0].classList.toggle('virar-carta');
        faces[1].classList.toggle('virar-carta');
        cartasViradas.push(this);
        if (cartasViradas.length === 2) {
            if (cartasViradas[0].childNodes[3].id === cartasViradas[1].childNodes[3].id) {
                cartasViradas[0].childNodes[1].classList.toggle('match');
                cartasViradas[0].childNodes[3].classList.toggle('match');
                cartasViradas[1].childNodes[1].classList.toggle('match');
                cartasViradas[1].childNodes[3].classList.toggle('match');
                matchMsg();
                matches++;
                cartasViradas = [];
                if (matches === 8) {
                    gameOver();
                }
            } else {
                erros++;
            }
        }
    } else {
        cartasViradas[0].childNodes[1].classList.toggle('virar-carta');
        cartasViradas[0].childNodes[3].classList.toggle('virar-carta');
        cartasViradas[1].childNodes[1].classList.toggle('virar-carta');
        cartasViradas[1].childNodes[3].classList.toggle('virar-carta');
        cartasViradas = [];
    }
    placar();
}

function gameOver() {
    modalGameOver.style.visibility = 'visible';
    modalGameOver.addEventListener('click', startGame, false);
}

function placar() {
    document.getElementById('numero-erros').innerHTML = erros;
}

function matchMsg() {
    matchSound.play();
    let imgMatchSign = document.getElementById('imgmatchsign');
    imgMatchSign.style.visibility = 'visible';
    imgMatchSign.style.top = 50 + 'px';
    imgMatchSign.style.opacity = 0;
    setTimeout(
        function () {
            imgMatchSign.style.visibility = 'hidden';
            imgMatchSign.style.top = 0 + 'px';
            imgMatchSign.style.opacity = 1;
        }, 1500);
}

function mudo() {
    if (playerView.volume == 0) {
        playerView.volume = 1;
        btnMudo.src = "./img/jogo/on.png";
    } else {
        playerView.volume = 0;
        btnMudo.src = "./img/jogo/off.png";
    }
}

function proxima() {
    playerView.src = player.musicas[indiceMusica].src;
    playerView.play();
    indiceMusica++;
    if (indiceMusica >= player.musicas.length) {
        indiceMusica = 0;
    }

}

function startGame() {
    matches = 0;
    erros = 0;
    cartasViradas = [];

    clickSound.volume = 0.5;
    btnMudo.addEventListener("click", mudo, false);
    btnProxima.addEventListener("click", proxima, false);

    inicializarCards();
    
    modalGameOver.style.visibility = 'hidden';
    modalGameOver.removeEventListener('click', startGame, false);
}

desenhar();
startGame();
