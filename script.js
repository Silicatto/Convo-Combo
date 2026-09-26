let falas = {};
falas = {
    fala1: 'Cool! Mine is mathematics.',
    fala2: 'Thank you very much!',
    fala3: "It's this way.",
    fala4: 'A crab!',
    fala5: 'You might know!',
    fala6: "I will check on that."
};

let respostaCorreta = 'fala1'

function verify(fala){
    if (fala == respostaCorreta){
        $("#talk").text("Cool! Mine is mathematics.")
        $("#talk2").text("Correct!");
    }
    else{
        $("#talk").text("")
        $("#talk2").text("Wrong!");
    }
}