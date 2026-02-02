let botao = document.getElementById("botao-js");
let mensagem = document.getElementById("mensagem-js");

botao.addEventListener("click", function () {
    mensagem.innerText = "Você clicou no botão!";
});
