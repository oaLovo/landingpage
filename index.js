var setaParaDireita = window.document.getElementById("setaEsquerda");
var Leonardo = window.document.getElementById("Leonardo");
var Samantha = window.document.getElementById("Samantha");
var Bruna = window.document.getElementById("Bruna");
var setaParaEsquerda = window.document.getElementById("setaDireita");

function rolarParaDireita() {
  Leonardo.style = "display:none";
  Bruna.style = "display:flex";
  setaParaDireita.style = "display:flex";
  setaParaEsquerda.style = "display:none";
}
function rolarParaEsquerda() {
  Leonardo.style = "display:flex";
  Bruna.style = "display:none";
  setaParaDireita.style = "display:none";
  setaParaEsquerda.style = "display:flex";
}
