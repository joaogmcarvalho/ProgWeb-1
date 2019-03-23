//QUESTAO 1

var nota1=parseInt(prompt("Digite a nota 1:\u00A0"));
var nota2=parseInt(prompt("Digite a nota 2:\u00A0"));
var media=(nota1+nota2)/2;

var media=(media>=7?"APROVADO":"REPROVADO");
alert("Você está:\u00A0" + media);

//QUESTAO 2

var produto=parseFloat(prompt("Digite o valor do produto:\u00A0"));
var desconto=produto/100*10;
var total= produto - desconto;

alert("O valor que voce ira pagar é:\u00A0"+ total);

//QUESTAO 3

var x=parseInt(prompt("Entre com o valor de de X:"));
var y=parseInt(prompt("Entre com o valor de de Y:"));
var result;
var soma=x+y;

if (soma>=20) {
  result=soma+8;
}
else {
  result=soma-5;
}
alert("A soma é: "+result);

//QUESTAO4

var numero=prompt("Entre com um numero:");

if (numero>10) {
  alert("o valor é maior que 10 ");
}
else if (numero<10) {
  alert("o valor é menor que 10 ");
}

// QUESTAO 5
var mulher=0;
var homem=1;
var sexo=prompt("Digite 1 se for homem OU 0 se for mulher:");
var sexo=(sexo=0?"MULHER":"HOMEM");
alert("Voce é:\u00A0" + sexo);

var peso=prompt("Digite o seu peso:");
var altura=prompt("Digite sua altura:");
