let botao = document.getElementById("botao-js");
let mensagem = document.getElementById("mensagem-js");

let clicou = false;

botao.addEventListener("click", function () {
    if (clicou === false) {
        mensagem.innerText = "Primeiro clique!";
        clicou = true;
    } else {
        mensagem.innerText = "Você clicou novamente!";
        clicou = false;
    }
});
