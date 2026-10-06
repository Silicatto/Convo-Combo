var respostaCorreta;
var falasAtuais;
var url = new URLSearchParams(window.location.search);
var temaEscolhido = url.get("tema");
var pontos = 0;

var TEMPO_INICIAL = 5 * 60;
var tempo = TEMPO_INICIAL;
var intervalo = null;
var jogoPausado = false;

// Mostra o tempo restante no formato m:ss
function mostrarTempo() {
    var minutos = Math.floor(tempo / 60);
    var segundos = tempo % 60;

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    $("#timer").text(minutos + ":" + segundos);
}

// Liga o timer (continua de onde o "tempo" estiver)
function iniciarTimer() {
    if (intervalo !== null || tempo <= 0) {
        return; // já está rodando ou o tempo acabou
    }

    intervalo = setInterval(function() {
        tempo--;
        mostrarTempo();

        if (tempo <= 0) {
            pararTimer();
        }
    }, 1000);
}

// Desliga o timer sem mexer no tempo restante
function pararTimer() {
    clearInterval(intervalo);
    intervalo = null;
}

// Só inicia o timer se estiver na tela do jogo
if (document.getElementById("timer")) {
    mostrarTempo();
    iniciarTimer();
}

function criarCartas(falas) {

    let chaves = Object.keys(falas);

    // Garante que a resposta correta esteja nas cartas
    let cartas = ['fala3'];

    // Retira a fala3 para não escolhê-la novamente
    let outrasFalas = chaves.filter(function(chave) {
        return chave != 'fala3';
    });

    // Embaralha as outras falas
    outrasFalas.sort(function() {
        return Math.random() - 0.5;
    });

    // Pega mais 5 falas aleatórias
    cartas = cartas.concat(outrasFalas.slice(0, 5));

    // Embaralha as 6 cartas
    cartas.sort(function() {
        return Math.random() - 0.5;
    });

    // Coloca as falas nas cartas
    $(".textoCarta").each(function(index) {

        $(this).text(falas[cartas[index]]);

        $(this).siblings("img").attr(
            "onclick",
            "verificar_fala('" + cartas[index] + "')"
        );

    });
}

function tema(tema){
    switch (tema){
        case 'school':
            let falasSchool = {};

            falasSchool = {
                fala1: "Hello, what's your favorite subject?",
                fala2: "Hi, mine is Biology, what about yours?",
                fala3: 'Cool! Mine is mathematics.',
                fala4: 'Hey, can you borrow a pen?',
                fala5: 'Of course, here it is.',
                fala6: "Thank you, I'll give it back soon!",
                fala7: 'Hello, Do you know where class 203 is?',
                fala8: "Oh Hi, it's in the next corridor!",
                fala9: 'Thank you very much!'
            };

            $('#primeiraFala').text(falasSchool.fala1);
            $('#segundaFala').text(falasSchool.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasSchool;
            criarCartas(falasSchool);
            break;

        case 'city':
            let falasCity = {};

            falasCity = {
                fala1: 'Hi, Where is the park?',
                fala2: "Hello, it's this way.",
                fala3: 'Thank you!',
                fala4: 'Hello, Do you know a good restaurant?',
                fala5: 'Yes, Neil Dinners is a good one!',
                fala6: 'Thank you, I will check on that.',
                fala7: "Hi, it's very nice here, isn't it?",
                fala8: 'Yes, it’s very chill.',
                fala9: "But is dangerous at night, don't go to that streets in these hours."
            };

            $('#primeiraFala').text(falasCity.fala1);
            $('#segundaFala').text(falasCity.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasCity;
            criarCartas(falasCity);
            break;
            
        case 'beach':
            let falasBeach = {};

            falasBeach = {
                fala1: 'The sun looks lovely today!',
                fala2: 'It does! Let’s go to the beach?',
                fala3: 'Of course, it’s a perfect day for it!',
                fala4: 'Look! A crab!',
                fala5: 'Those are some big pincers!',
                fala6: 'I think he’s cute tho!',
                fala7: 'These beach foods are too pricy!',
                fala8: 'It’s better to bring food from home!',
                fala9: 'Let’s do it next time!'
            };

            $('#primeiraFala').text(falasBeach.fala1);
            $('#segundaFala').text(falasBeach.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasBeach;
            criarCartas(falasBeach);
            break;

        case 'house':
            //Cria o dicionário
            let falasHouse = {};

            //Adiciona as falas ao dicionário
            falasHouse = {
                fala1: 'Mom! Where are my shoes?',
                fala2: 'You might know!',
                fala3: 'But how do i know if i’m asking?',
                fala4: 'Dad, what do we have for dinner?',
                fala5: 'Potatoes and beans.',
                fala6: 'Again?',
                fala7: 'I want to buy a house here, do you recommend it?',
                fala8: 'I don’t know, I heard some bad things about this house.',
                fala9: 'Ok, i will check on that.'
            };

            //Faz a primeira e segunda fala aparecerem na tela
            $('#primeiraFala').text(falasHouse.fala1);
            $('#segundaFala').text(falasHouse.fala2);
            //Define a resposta correta e as falas atuais
            respostaCorreta = 'fala3';
            falasAtuais = falasHouse;
            criarCartas(falasHouse);
            break;
    
            //parte pro medium

         case 'movies':
            let falasMovies = {};

            falasJob = {
                fala1: "Have you watched any good films recently?",
                fala2: "Yes, I saw a great sci-fi movie last weekend.",
                fala3: "What did you like about it?",
                fala4: "The visual effects and the story were amazing.",
                fala5: "I'll watch it this week then.",
                fala6: "What kind of movies do you prefer?",
                fala7: "I really enjoy thrillers and mystery films.",
                fala8: "Don't you find them too stressful sometimes?",
                fala9: "Not at all, I love the suspense and twists.",
                fala10: "Everyone has their own taste, I suppose.",
                fala11: "What did you think of that horror film?",
                fala12: "Honestly, I found it quite predictable.",
                fala13: "Really? I thought the ending was intense.",
                fala14: "Maybe I've seen too many horror movies.",
                fala15: "That could be the reason, actually.",
            };

            $('#primeiraFala').text(falasJob.fala1);
            $('#segundaFala').text(falasJob.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasJob;
            criarCartas(falasJob);
            break;

        case 'food':
            let falasFood = {};

            falasJob = {
                fala1: "What's your favourite type of cuisine?",
                fala2: "I really enjoy Italian food, especially pasta.",
                fala3: "Have you ever tried making it from scratch?",
                fala4: "Yes, but it takes a lot of time.",
                fala5: "The result is certainly worth the effort though.",
                fala6: "Are you a fan of spicy food?",
                fala7: "I like it, but only in small amounts.",
                fala8: "I can't handle too much heat at all.",
                fala9: "You should try milder versions first.",
                fala10: "That's good advice, I'll do that.",
                fala11: "Have you ever tried any exotic dishes?",
                fala12: "Yes, I tried some interesting dishes during my travels.",
                fala13: "Were they tasty or strange?",
                fala14: "Some were delicious, others were quite unusual.",
                fala15: "That's part of the adventure, I think.",
            };

            $('#primeiraFala').text(falasJob.fala1);
            $('#segundaFala').text(falasJob.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasJob;
            criarCartas(falasJob);
            break;

        case 'sports':
            let falasSports = {};

            falasJob = {
                fala1: "What sport do you do regularly?",
                fala2: "I play volleyball twice a week.",
                fala3: "Do you enjoy swimming?",
                fala4: "Yes, I go swimming on weekends too.",
                fala5: "That's a great combination for fitness.",
                fala6: "Would you ever try extreme sports?",
                fala7: "No, I prefer safer activities like cycling.",
                fala8: "I find the adrenaline rush addictive.",
                fala9: "To each their own, safety comes first for me.",
                fala10: "That's completely understandable.",
                fala11: "How often do you exercise each week?",
                fala12: "I go to the gym about four times.",
                fala13: "Do you do more cardio or weights?",
                fala14: "I mix both, it's more balanced.",
                fala15: "That sounds like a solid routine.",
            };

            $('#primeiraFala').text(falasJob.fala1);
            $('#segundaFala').text(falasJob.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasJob;
            criarCartas(falasJob);
            break;

        case 'animals':
            let falasAnimals = {};

            falasJob = {
                fala1: "Do you have any pets at home?",
                fala2: "Yes, I have a dog and two cats.",
                fala3: "That must be a lot of work.",
                fala4: "It is, but they bring a lot of joy.",
                fala5: "Yeah, that makes it all worth it.",
                fala6: "What's your favourite wild animal?",
                fala7: "I love elephants, they're so intelligent.",
                fala8: "They also have great memory, don't they?",
                fala9: "Yes, and they show empathy too.",
                fala10: "I'd love to see them in nature one day.",
                fala11: "Are you afraid of any animals?",
                fala12: "I'm terrified of snakes, they scare me.",
                fala13: "Really? I find them quite fascinating.",
                fala14: "I know it's irrational, but I can't help it.",
                fala15: "Many people feel that way about them.",
            };

            $('#primeiraFala').text(falasJob.fala1);
            $('#segundaFala').text(falasJob.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasJob;
            criarCartas(falasJob);
            break;
            
        case 'job':
            let falasJob = {};

            falasJob = {
                fala1: "You've been receiving a lot of packages lately.",
                fala2: "I've developed a habit of browsing online stores at night.",
                fala3: "Aren't you worried about buying useless things?",
                fala4: "You're right, I often fall for the advertising.",
                fala5: "Maybe you should set a monthly spending limit.",
                fala6: "That's smart, but self-control isn't easy.",
                fala7: "I can help you review your cart before checkout.",
                fala8: "I have no idea what to buy for my friend's birthday.",
                fala9: "What are their main interests or hobbies?",
                fala10: "They love photography, but already have all the gear.",
                fala11: "Perhaps a workshop or experience would be better.",
                fala12: "That's a wonderful idea, maybe a photography course.",
                fala13: "Experiences often create more lasting memories.",
                fala14: "You're right, I'll book something.",
                fala15: "I'm trying to support local shops more often.",
                fala16: "That's admirable, though it's not very convenient.",
                fala17: "True, I sometimes visit several stores to find things.",
                fala18: "Have you discovered any good local markets?",
                fala19: "There's one on Saturdays, but it's closed in winter.",
                fala20: "You could also order online from local artisans.",
                fala21: "I'll look into that, it sounds like a great idea."
            };

            $('#primeiraFala').text(falasJob.fala1);
            $('#segundaFala').text(falasJob.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasJob;
            criarCartas(falasJob);
            break;
        
        case 'tech':
            let falasTech = {};

            falasJob = {
                fala1: "I'm increasingly concerned about digital privacy.",
                fala2: "You're not the only one, data collection is out of control.",
                fala3: "What steps have you taken to protect yourself?",
                fala4: "I use encryption and review app permissions carefully.",
                fala5: "Still, I feel our data is constantly being exploited.",
                fala6: "That's because most platforms profit from our information.",
                fala7: "Stronger privacy laws would definitely help.",
                fala8: "I've decided to use social media much less.",
                fala9: "What made you come to that decision?",
                fala10: "I realised it was harming my mental health.",
                fala11: "That's very smart, most people end up ignoring that.",
                fala12: "Constant comparison makes me feel uncomfortable.",
                fala13: "Have you noticed any benefits since reducing usage?",
                fala14: "Definitely, I feel a lot calmer and more focused.",
                fala15: "Our company recently had a serious security breach.",
                fala16: "That's alarming, was any data stolen?",
                fala17: "Fortunately, our encryption prevented any major damage.",
                fala18: "Did you find out how the attack happened?",
                fala19: "It was a phishing email sent to an employee.",
                fala20: "Better training could prevent this in the future.",
                fala21: "We're implementing that immediately."
            };

            $('#primeiraFala').text(falasTech.fala1);
            $('#segundaFala').text(falasTech.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasTech;
            criarCartas(falasTech);
            break;

        case 'Music':
            let falasMusic = {};

            falasMusic = {
                fala1: "I've been listening to a lot of classical music lately.",
                fala2: "What attracts you to that genre?",
                fala3: "I love the complexity of the pieces.",
                fala4: "Do you prefer older or more modern composers?",
                fala5: "I'm more drawn to the older ones.",
                fala6: "That music really touches the soul, doesn't it?",
                fala7: "Exactly, it's much more than simple entertainment.",
                fala8: "I've been learning to play the piano for two years.",
                fala9: "That's impressive, what inspired you to start?",
                fala10: "I've always loved the instrument's range of sounds.",
                fala11: "What's the hardest part about learning?",
                fala12: "Using both hands independently is difficult.",
                fala13: "Regular practice is essential for improving.",
                fala14: "Yes, I'm learning to be patient with that.",
                fala15: "I've started producing my own electronic music.",
                fala16: "That sounds fascinating, what software do you use?",
                fala17: "I'm using a professional program with many features.",
                fala18: "Have you explored sound design yet?",
                fala19: "I'm slowly learning, but it's quite complex.",
                fala20: "The possibilities are endless once you master it.",
                fala21: "I'm enjoying the journey, even when it's difficult."
            };

            $('#primeiraFala').text(falasMusic.fala1);
            $('#segundaFala').text(falasMusic.fala2);

            respostaCorreta = 'fala3';
            falasAtuais = falasMusic;
            criarCartas(falasMusic);
            break;
    }
}
tema(temaEscolhido);

function verificar_fala(fala){
    if (jogoPausado) {
        return; // não deixa jogar enquanto estiver pausado
    }

    if (fala == respostaCorreta){
        $("#talk").text(falasAtuais[respostaCorreta]);
        $("#talk2").text("Correct!");
        $("#balao1").css('background-color', 'green');
        $("#balao1").css('color', 'white');
        pontos += 15;
        $("#pts").text(pontos);
    }
    else{
        $("#talk").text(falasAtuais[fala]);
        $("#talk2").text("Wrong!");
        $("#balao1").css('background-color', 'darkred');
        $("#balao1").css('color', 'white');
        pontos -= 15;
        $("#pts").text(pontos);
    }
}

// ===================== TELA DE PAUSE =====================

// Pausa o jogo: escurece a tela, para o timer e bloqueia os botões
function pausar() {
    if (jogoPausado) {
        return;
    }

    jogoPausado = true;
    pararTimer();

    // desativa as cartas e o botão de pause
    $(".cartas button, .pause button").prop("disabled", true);

    $("#telaPause").css("display", "flex").hide().fadeIn(200);
}

// RESUME: volta a jogar com o mesmo tempo e os mesmos pontos
function despausar() {
    jogoPausado = false;

    $(".cartas button, .pause button").prop("disabled", false);
    $("#telaPause").fadeOut(200);

    iniciarTimer();
}

// RESTART: zera pontos e timer e começa uma nova rodada
function reiniciar() {
    pararTimer();

    tempo = TEMPO_INICIAL;
    pontos = 0;
    $("#pts").text(pontos);
    mostrarTempo();

    // limpa o balão de resposta
    $("#talk").text("");
    $("#talk2").text("");
    $("#balao1").css({ "background-color": "", "color": "" });

    // embaralha as cartas de novo
    tema(temaEscolhido);

    despausar();
}

// QUIT: volta para a tela de dificuldade sem salvar nada
function sair() {
    pararTimer();

    var nivel = url.get("nivel");
    var niveisValidos = ["easy", "medium", "hard"];

    if (niveisValidos.indexOf(nivel) !== -1) {
        window.location.href = nivel + ".html";
    } else if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "dificuldades.html";
    }
}

// Liga os botões da tela de pause
$(document).on("click", "#btnResume", despausar);
$(document).on("click", "#btnRestart", reiniciar);
$(document).on("click", "#btnQuit", sair);
