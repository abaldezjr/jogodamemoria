const memoria = new Memoria();
const player = new Player();

let erros = 0, matches = 0, cartasViradas = [],
    indiceMusica = segundo = minuto = hora = 0, intervalo;

let modalGameOver = document.getElementById('modalgameover'),
    cards = document.getElementsByClassName('card'),
    playerView = document.getElementById('bg-music'),
    clickSound = document.getElementById('click-sound'),
    btnMudo = document.getElementById('mudo'),
    btnProxima = document.getElementById('proxima'),
    matchSound = document.getElementById("match-sound"),
    lblHora = document.getElementById("hora"),
    lblMinuto = document.getElementById("minuto"),
    lblSegundo = document.getElementById("segundo");


function desenhar() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.left = i % 8 * 165 + 'px';
        cards[i].style.top = i < 8 ? 5 + 'px' : 250 + 'px';
    }
}

function embaralhar(velhoArray) {
    let novoArray = [];

    while (novoArray.length !== velhoArray.length) {
        let i = Math.floor((Math.random() * velhoArray.length) + 0);
        if (novoArray.indexOf(velhoArray[i]) < 0) {
            novoArray.push(velhoArray[i]);
        }
    }
    return novoArray;
}

function inicializarCards() {
    let cartas = [];
    cartas = embaralhar(memoria.escolherCartas());
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
    document.getElementById("click-sound").play();
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
    modalGameOver.querySelector('img').style.visibility = 'visible';
    modalGameOver.addEventListener('click', startGame, false);
}

function relogio() {
    if (segundo == 60) {
        minuto++;
        segundo = 0;
    }

    if (minuto == 60) {
        hora++;
        segundo = minuto = 0;
    }

    if (hora < 10) {
        lblHora.innerHTML = "0" + hora;
    } else {
        lblHora.innerHTML = hora;
    }

    if (segundo < 10) {
        lblSegundo.innerHTML = "0" + segundo;
    } else {
        lblSegundo.innerHTML = segundo;
    }

    if (minuto < 10) {
        lblMinuto.innerHTML = "0" + minuto;
    } else {
        lblMinuto.innerHTML = minuto;
    }
    segundo++;
}

function parar() {
    clearInterval(intervalo);
}

function placar() {
    document.getElementById('numero-erros').innerHTML = erros;
}

function matchMsg() {
    matchSound.play();
    let divMatchSign = document.getElementById('imgmatchsign');
    divMatchSign.style.visibility = 'visible';
    divMatchSign.querySelector('img').style.visibility = 'visible';
    divMatchSign.querySelector('img').style.top = 50 + 'px';
    divMatchSign.querySelector('img').style.opacity = 0;
    setTimeout(() => {
        divMatchSign.style.visibility = 'hidden';
        divMatchSign.querySelector('img').style.visibility = 'hidden';
        divMatchSign.querySelector('img').style.top = 0 + 'px';
        divMatchSign.querySelector('img').style.opacity = 1;
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
    matches = erros = segundo = minuto = hora = 0;
    cartasViradas = [];
    intervalo = window.setInterval(() => relogio(), 1000);

    clickSound.volume = 0.5;
    btnMudo.addEventListener("click", mudo, false);
    btnProxima.addEventListener("click", proxima, false);

    inicializarCards();
    modalGameOver.querySelector('img').style.visibility = 'hidden';
    modalGameOver.style.visibility = 'hidden';
    modalGameOver.removeEventListener('click', startGame, false);
}

desenhar();
startGame();
