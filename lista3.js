//LISTA 3
//EXERCICIO 1

var mes=prompt("Entre com um numero");
switch (mes) {
  case "1":
  alert("Janeiro");
  break;
  case "2":
  alert("Fevereiro");
  break;
  case "3":
  alert("Março");
  break;
  case "4":
  alert("Abril");
  break;
  case "5":
  alert("Maio");
  break;
  case "6":
  alert("Junho");
  break;
  case "7":
  alert("Julho");
  break;
  case "8":
  alert("Agosto");
  break;
  case "9":
  alert("Setembro");
  break;
  case "10":
  alert("Outubro");
  break;
  case "11":
  alert("Novembro");
  break;
  case "12":
  alert("Dezembro");
  break;

  default:
  alert("Insira um numero de 1 a 12 equivalente a um mes");
}

  //EXERCICIO 2

  var ano=prompt("Há quanto tempo voce fuma?");
  var cigarro=prompt("Quantos cigarros voce fuma por dia?");
  var carteira=prompt("Quanto custa um maço de cigarro?");
  var total=(carteira/20)*cigarro;
  var total1=(ano*365)*total;

  alert("Voce ja gastou " +total1 + " reais");

//EXERCICIO 3

var amelia=prompt("Insira a idade de Amelia:");
var joaquim=prompt("Insira a idade de Joaquim");

if (amelia>joaquim) {
  alert("Amélia é a mais velha!");
}
else if (joaquim>amelia) {
  alert("Joaquim é o mais velho!");
}

//EXERCICIO 4


var num=Math.random(1)*14;
var num1=Math.round(num);
alert(num1);

var restotres=num1%3;
var restocinco=num1%5;

if (restotres==0) {
  alert("O valor aleatorio é multiplo de 3");
}
else if (restocinco==0) {
  alert("O valor aleatorio é multiplo de 5");
}
else {
  alert("O valor nao é multiplo de 3 e nem 5");
}



//EXERCICIO 5
var n1=prompt("Digite o primeiro valor: ");
var n2=prompt("Digite o segundo valor: ");
var n3=prompt("Digite o terceiro valor: ");

if((n1==n2)&&(n2==n3)){
  alert("TRIANGULO EQUILATERO");
}else if ((n1==n2)||(n1==n3)||(n2==n3)) {
  alert("TRIANGULO ISOCELES");
}else {
  alert("TRIANGULO ESCALENO");
}
