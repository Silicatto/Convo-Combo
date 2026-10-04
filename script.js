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