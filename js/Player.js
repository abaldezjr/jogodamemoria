class Player {

    constructor() {
        
        this.backgroundMusic = new Musica("Background Music", "./audio/bg_music.mp3");
        this.determinacao = new Musica("Determinação", "./audio/determinacao.m4a");
        this.thomasPercy = new Musica("Thomas e Percy", "./audio/Musica-do-Thomas-e-do-Percy.m4a");
        this.locomotivasChegando = new Musica("As locomotivas chegando", "./audio/As-Locomotivas-Chegando.m4a");
        this.tudoPrecisaAmigos = new Musica("Tudo que você precisa é de amigos!", "./audio/Tudo-que-voce-precisa-e-de-amigos.m4a");
        this.montanhaAzul = new Musica("Pedreira da Montanha Azul", "./audio/Pedreira-da-Montanha-Azul.m4a");
        this.trensDiesel = new Musica("O dia dos trens a diesel", "./audio/O-Dia-dos-Trens-a-Diesel.m4a");
        this.thomasAmigos = new Musica("Thomas e seus amigos", "./audio/Tema-de-Thomas-e-Seus-Amigos.m4a");
        this.thomasLider = new Musica("Thomas é o líder", "./audio/Thomas-e-o-lider.m4a");
        this.thomasClicClac = new Musica("Thomas Clic Clac", "./audio/Thomas-Clic-Clac.m4a");

        this.musicas = [this.backgroundMusic, this.determinacao,
        this.thomasPercy, this.locomotivasChegando,
        this.tudoPrecisaAmigos, this.montanhaAzul, this.trensDiesel,
        this.thomasAmigos, this.thomasLider, this.thomasClicClac];

    }  

}