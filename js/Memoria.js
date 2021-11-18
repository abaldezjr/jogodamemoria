class Memoria {

    constructor() {

        this.cartaAnnie = new Carta("annie", "./img/jogo/cartas/annie.png", "Annie", "PISTA DE SODOR", "Annie e Clarabel são vagões leais ao Thomas e o ajudam a levar passageiros por toda a Ilha de Sodor. Annie only carries passengers. Clarabel é um vagão 'composto'. E la tem duas seções: uma para passageiros e outra para bagagens.");
        this.cartaAshima = new Carta("ashima", "./img/jogo/cartas/ashima.png", "Ashima", "MONTANHA NILGIRI", "Ashima está sempre trabalhando nos trilhos da Montanha Nilgiri, no sudeste da Índia, onde a inclinação íngreme torna tudo mais perigoso e dificulta a subida. Então, é claro que Ashima não tem medo de nada. Decorada com decalque pintado à mão, Ashima é uma locomotiva divertida e simpática, que está sempre feliz em ajudar.");
        this.cartaAxel = new Carta("axel", "./img/jogo/cartas/axel.png", "Axel da Bélgica", "ÓTIMA FERROVIA PROGRAMA", "Axel é uma locomotiva feita para ser veloz. Seu estilo e boa aparência o tornaram famoso entre os fãs de vapor. Descolado, ele com certeza terá muitos fãs na exposição.");
        this.cartaBelle = new Carta("belle", "./img/jogo/cartas/belle.png", "Belle", "PISTA DE SODOR", "Belle é um grande e corajoso trem azul. Ela tem dois canhões de água na caldeira, que usa para apagar fogo. Belle seria opressiva se não fosse tão legal, até mesmo Cranky gosta dela!");
        this.cartaBen = new Carta("ben", "./img/jogo/cartas/ben.png", "Ben", "PISTA DE SODOR", "Ben e Bill são locomotivas gêmeas, e são totalmente idênticas. Ben passa o tempo trabalhando entre os poços de argila da Companhia de Argila Sodor China e o Cais. Ben adora aprontar e provocar as outras locomotivas da Ferrovia.");
        this.cartaCarlos = new Carta("carlos", "./img/jogo/cartas/carlos.png", "Carlos do México", "ÓTIMA FERROVIA PROGRAMA", "Carlos é uma locomotiva a vapor feliz e orgulhosa diretamente do México Sempre sorrindo, essa locomotiva é dá vida ao festival de locomotivas. Carlos já competiu e venceu no primeiro ano da competição. E agora ele continua a animar o público, participando no premio de melhor decoração de locomotiva.");
        this.cartaCharlie = new Carta("charlie", "./img/jogo/cartas/charlie.png", "Charlie", "PISTA DE SODOR", "Charlie é uma pequena locomotiva animada do continente, que gosta de se divertir muito. Ele está sempre à procura de aventuras! Mesmo sendo um pouco travesso, Charlie está sempre pronto para ajudar um amigo em apuros.");
        this.cartaDen = new Carta("den", "./img/jogo/cartas/den.png", "Den", "PISTA DE SODOR", "Den é um diesel que administra a Oficina Diesel… quando o Diesel Dez não está. Embora não seja malandro, ainda é um diesel. Ele trabalha bastante e é popular entre os diesels. Tem muita consideração e pensa bem antes de falar. E quando fala, fala bem devagar. Ele pode parecer um pouco lento, mas isto está longe de ser verdade. As locomotivas podem esperar bastante para que Den dê sua opinião, mas a espera vale a pena!");
        this.cartaDiesel = new Carta("diesel", "./img/jogo/cartas/diesel.png", "Diesel", "PISTA DE SODOR", "Diesel acredita ser superior às locomotivas a vapor. Oleoso, cheio de esquemas e pronto para causar problemas na estação, seu sorrisinho característico sinaliza que uma locomotiva a vapor está em apuros em algum lugar. No entanto, quando recebe uma chance, Diesel quer provar que é uma locomotiva muito útil também!	");
        this.cartaDiesel10 = new Carta("diesel10", "./img/jogo/cartas/diesel10.png", "Diesel10", "PISTA DE SODOR", "Diesel Dez é o mestre das travessuras em Sodor. Ele gosta de ser mais esperto do que as locomotivas a vapor, o que costuma causar confusões e atrasos. Quando ele está por perto... os apuros também estão.");
        this.cartaEmily = new Carta("emily", "./img/jogo/cartas/emily.png", "Emily", "A LOCOMOTIVA STERLING", "Emily é uma linda locomotiva verde esmeralda, com pintura brilhante e acessórios brilhantes de latão.Ela pode ser um pouco mandona e achar que sabe tudo, mas está sempre pronta para ajudar um amigo.Ela é o membro mais novo da Equipe das Locomotivas a Vapor.");
        this.cartaFrieda = new Carta("frieda", "./img/jogo/cartas/frieda.png", "Frieda da Alemanha", "ÓTIMA FERROVIA PROGRAMA", "Frieda é uma locomotiva aerodinâmica da Alemanha. Linda e forte, Frieda também vai participar das competições. Ela vai mostrar que tudo o que os meninos fazem, as meninas podem fazer melhor.");
        this.cartaEscoces = new Carta("escoces", "./img/jogo/cartas/escoces.png", "O Escocês Voador", "ÓTIMA FERROVIA PROGRAMA", "O Escocês Voador é uma das locomotivas mais famosas do mundo. Uma locomotiva grande com dois tenders, o Escocês Voador tem o recorde de ser a primeira locomotiva a fazer 100 mph. Essa locomotiva já estevem em Sodor, onde se encontrou com seu irmão Gordon. Agora, os irmãos vão competir para ver quem é o mais veloz na Grande Corrida.");
        this.cartaEtienne = new Carta("etienne", "./img/jogo/cartas/etienne.png", "Etienne da França", "ÓTIMA FERROVIA PROGRAMA", "Não há dúvidas de que eletricidade nos trilhos é o futuro e Etienne é uma locomotiva elétrica veloz, que tem recordes mundiais de velocidade na França. E agora, essa locomotiva quer continuar a ter sorte na Grande Corrida.");
        this.cartaGina = new Carta("gina", "./img/jogo/cartas/gina.png", "Gina da Itália", "ÓTIMA FERROVIA PROGRAMA", "Essa locomotiva pode ser pequena mas tem muita força. Doce e estilosa, Gina consegue carregar tanta carga quanto os meninos ou até melhor. Direto da Itália, Gina vai, com certeza, chamar muita atenção.");
        this.cartaGordon = new Carta("gordon", "./img/jogo/cartas/gordon.png", "Gordon", "A GRANDE LOCOMOTIVA", "Gordon é a locomotiva azul número quatro que puxa o expresso. Como membro sênior da família de locomotivas, ele é o mais rápido e o mais forte da equipe de Sir Topham Hatt - e ele sabe disso. Ele tem bom coração, está sempre disposto a perdoar e usa sua força superior para ajudar locomotivas menores a se livrarem de problemas.");
        this.cartaHenry = new Carta("henry", "./img/jogo/cartas/henry.png", "Henry", "A LOCOMOTIVA VERDE", "Henry é a locomotiva verde número três. Ele é uma locomotiva comprida e rápida e tem um visual de puro-sangue. Como todo puro-sangue, ele tende a ser um pouco tenso e preocupado. Mas, em qualquer dia, ele é um ótimo competidor para qualquer locomotiva.");
        this.cartaHenrieta = new Carta("henrietta", "./img/jogo/cartas/henrietta.png", "Henrietta", "PISTA DE SODOR", "Henrietta é o vagão fiel do Toby. Ela veio com Toby para a ferrovia do Sir Topham Hatt depois de quase virar um galinheiro. Agora, ela trabalha com o Toby, embora raramente esteja cheia de passageiros. Henrietta está bem feliz com sua vida na ilha.");
        this.cartaJames = new Carta("james", "./img/jogo/cartas/james.png", "James", "A LOCOMOTIVA VERMELHA", "James é a locomotiva vermelha número cinco. Ele é uma locomotiva de porte médio; suas seis rodas não são tão grandes quanto as de Gordon, mas não tão pequenas quanto as de Thomas. Ele tem uma bela pintura vermelha e cúpula de latão, e acha que é uma Locomotiva Realmente Esplêndida. Às vezes, isso leva a ideias erradas sobre o tipo certo de trabalho para uma locomotiva tão ilustre, deixando James sempre com problemas.");
        this.cartaMike = new Carta("mike", "./img/jogo/cartas/mike.png", "Mike", "PISTA DE0SODOR", "Mike é uma locomotiva forte e vermelha, que às vezes parece ser um pouco arrogante. Ele acha que pode dar ordens os dois colegas, embora nenhum deles deixa isso acontecer. Bert dá risada, mas Rex sai do trilho para provocar Mike, o que não é muito difícil. Mike prefere levar carga do que passageiros, ao contrário de Gordon, pois considera ser algo mais prático já que os produtos não reclamam. Ele tem orgulho de ser forte e parece bem confiante, mas não seria tão fácil irritá-lo se ele não tivesse um pouquinho de insegurança. Ele pode ser um pouco irritável.");
        this.cartaPercy = new Carta("percy", "./img/jogo/cartas/percy.png", "Percy", "A PEQUENA LOCOMOTIVA", "Percy é a locomotiva verde número seis. Ele é o membro mais jovem da ferrovia de Sir Topham Hatt. Ele está feliz em resfolegar pelos campos e não pensa em se aventurar pelo mundo. Percy é o melhor amigo de Thomas e seu trabalho favorito é entregar correspondências. Ele está sempre feliz em ajudar outras locomotivas que se aproveitam da sua bondade.");
        this.cartaRex = new Carta("rex", "./img/jogo/cartas/rex.png", "Rex", "PISTA DE SODOR", "Rex é uma mini locomotiva verde e divertida, com muito senso de humor. Ele é trabalhador e um líder nato dos pequenos trens (apesar do fato de Mike achar que é o líder). Rex tem muito orgulho de sua ferrovia e é um ótimo amigo, mas não consegue evitar de provocar Mike para ele parar de ser convencido. Na maioria das vezes, Mike leva numa boa, mas tem dias que ele fica bem irritado. Por sorte, Rex é bom em ajudar Mike a ver o lado divertido das coisas de novo.");
        this.cartaRyan = new Carta("ryan", "./img/jogo/cartas/ryan.png", "Ryan", "PISTA DE SODOR", "Ryan é uma locomotiva simpática, que faz de tudo para agradar e sempre busca ajudar os amigos que estão com problemas. Ryan gostaria de ser um herói, mas ele não é tão corajoso quanto gostaria e tem a tendência de entrar em pânico diante do perigo. Mas ele não desiste de tentar. Ryan é direto e sincero, mas ele tem um bom senso de humos e vive fazendo piada dos próprios problemas.");
        this.cartaThomas = new Carta("thomas", "./img/jogo/cartas/thomas.png", "Thomas", "A LOCOMOTIVA Nº 1", "Thomas é a locomotiva azul número 1. Ele é uma locomotiva pequena e audaciosa que costuma se meter em enrascadas, geralmente por ficar ansioso para fazer as coisas melhores deixadas para locomotivas maiores e mais sensatas. Mas os problemas nunca duram muito no mundo de Thomas, e logo ele está se movendo de novo, fazendo seu papel pelo pátio em seu próprio ramal. Thomas trabalha bastante e tenta se esforçar para ser uma locomotiva muito útil.");
        this.cartaToby = new Carta("toby", "./img/jogo/cartas/toby.png", "Toby", "A LOCOMOTIVA BONDE", "Toby é o trem-bonde marrom, número 7. Ele é quadradão, tanto no visual quanto no humor. Toby está sempre feliz ao trabalhar e normalmente é encontrado na linha da Pedreira juntamente com seu vagão, Henrietta.");

        this.cartas = [
            this.cartaAnnie, this.cartaAshima, this.cartaAxel, this.cartaBelle,
            this.cartaBen, this.cartaCarlos, this.cartaCharlie, this.cartaDen, this.cartaDiesel,
            this.cartaDiesel10, this.cartaEmily, this.cartaFrieda, this.cartaEscoces,
            this.cartaEtienne, this.cartaGina, this.cartaGordon, this.cartaHenry, this.cartaHenrieta,
            this.cartaJames, this.cartaMike, this.cartaPercy, this.cartaRex, this.cartaRyan,
            this.cartaThomas,this.cartaToby
        ];

    }

    escolherCartas() {
        let novoArray = [];
    
        while (novoArray.length != 16) {
            let i = Math.floor((Math.random() * this.cartas.length) + 0);
    
            if (novoArray.indexOf(this.cartas[i]) < 0) {
                let objTemp = new Carta(
                    this.cartas[i].id, 
                    this.cartas[i].src,
                    this.cartas[i].nome,
                    this.cartas[i].sobrenome,
                    this.cartas[i].bio
                );
                novoArray.push(this.cartas[i]);
                novoArray.push(objTemp);
            }
        }
        return novoArray;
    }
    
}