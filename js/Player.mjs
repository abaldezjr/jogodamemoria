
import Music from "./Music.mjs";

export default class Player {

    constructor() {

        this.backgroundMusic = new Music("Background Music", "./audio/bg_music.mp3");
        this.determinacao = new Music("Determinação", "./audio/determinacao.m4a");
        this.thomasPercy = new Music("Thomas e Percy", "./audio/Musica-do-Thomas-e-do-Percy.m4a");
        this.locomotivasChegando = new Music("As locomotivas chegando", "./audio/As-Locomotivas-Chegando.m4a");
        this.tudoPrecisaAmigos = new Music("Tudo que você precisa é de amigos!", "./audio/Tudo-que-voce-precisa-e-de-amigos.m4a");
        this.montanhaAzul = new Music("Pedreira da Montanha Azul", "./audio/Pedreira-da-Montanha-Azul.m4a");
        this.trensDiesel = new Music("O dia dos trens a diesel", "./audio/O-Dia-dos-Trens-a-Diesel.m4a");
        this.thomasAmigos = new Music("Thomas e seus amigos", "./audio/Tema-de-Thomas-e-Seus-Amigos.m4a");
        this.thomasLider = new Music("Thomas é o líder", "./audio/Thomas-e-o-lider.m4a");
        this.thomasClicClac = new Music("Thomas Clic Clac", "./audio/Thomas-Clic-Clac.m4a");

        this.musics = [this.backgroundMusic, this.determinacao,
        this.thomasPercy, this.locomotivasChegando,
        this.tudoPrecisaAmigos, this.montanhaAzul, this.trensDiesel,
        this.thomasAmigos, this.thomasLider, this.thomasClicClac];

        this.musicIndex = 0;

        this.playerView = document.getElementById('bg-music');
        this.clickSound = document.getElementById('click-sound');
        this.btnMute = document.getElementById('mute');
        this.btnNext = document.getElementById('next');
        this.matchSound = document.getElementById("match-sound");
        
        this.clickSound.volume = 0.5;

    }

    mute() {
        if (this.playerView.volume == 0) {
            this.playerView.volume = 1;
            this.btnMute.src = "./img/jogo/on.png";
        } else {
            this.playerView.volume = 0;
            this.btnMute.src = "./img/jogo/off.png";
        }
    }

    next(){
        this.playerView.src = this.musics[this.musicIndex].src;
        this.playerView.play();
        this.musicIndex++;
        if (this.musicIndex >= this.musics.length) {
            this.musicIndex = 0;
        }
    }

    clickSoundPlay() {
        this.clickSound.play();
    }

    matchSoundPlay() {
        this.matchSound.play();
    }

}