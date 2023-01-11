
import MemoryGame from "./MemoryGame.mjs";
import Player from "./Player.mjs";
import Timer from "./Timer.mjs";

const timer = new Timer();
const memoryGame = new MemoryGame();
const player = new Player();

let cartasViradas = [];

let modalGameOver = document.getElementById('modalgameover');
let cards = document.getElementsByClassName('card');

function cardPosition() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.left = i % 8 * 165 + 'px';
        cards[i].style.top = i < 8 ? 5 + 'px' : 250 + 'px';
    }
}

function initializeCards() {
    let newCards = [];
    newCards = memoryGame.newCards();
    console.log(newCards);
    let cardFront, cardBack;
    for (let i = 0; i < cards.length; i++) {
        cardFront = cards[i].querySelector('.front');
        cardBack = cards[i].querySelector('.back');
        cardFront.classList.remove('virar-carta', 'match');
        cardFront.style.background = "url('" + newCards[i].src + "')";
        cardFront.setAttribute('id', newCards[i].id);
        cardBack.classList.remove('virar-carta', 'match');
        cards[i].addEventListener('click', mostrarCarta, false);
    }
}

function mostrarCarta() {
    player.clickSoundPlay();
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
                memoryGame.addMatch();
                cartasViradas = [];
                if (memoryGame.matches === 8) {
                    gameOver();
                }
            } else {
                memoryGame.addError();
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

function placar() {
    document.getElementById('numero-erros').innerHTML = memoryGame.errors;
}

function matchMsg() {
    player.matchSoundPlay();
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

function mute() {
    player.mute();
}

function next(){
    player.next();
}

function startGame() {
    
    cartasViradas = [];

    memoryGame.start();
    timer.start();
    placar();

    player.btnMute.addEventListener("click", mute, false);
    player.btnNext.addEventListener("click", next, false);

    initializeCards();
    modalGameOver.querySelector('img').style.visibility = 'hidden';
    modalGameOver.style.visibility = 'hidden';
    modalGameOver.removeEventListener('click', startGame, false);
    
}

cardPosition();
startGame();
