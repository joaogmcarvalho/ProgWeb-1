//método de confirmação

confirm("Tem certeza que quer sair hoje?");

/*Operador ternário é representado pela expressão;
variavel=condição?verdadeiro:falso*/

var $idade=prompt("Qual a sua idade?");
var $x=($idade>=18?"Maior de idade":"Menor de idade");
alert("Você é:\u00A0" + $x);

//método Math - para executar os comandos dos operadores
//abs - para transformar o numero negativo em positivo

var $valor=Math.abs(-25);
alert("O resultado é:\u00A0" + $valor);
document.write("O resultado é:\u00A0" + $valor);

//max - para mostrar o maior valor
var $valor=Math.max(12,36);
alert("O maior valor é:\u00A0" + $valor);
document.write("<br>O maior valor é:\u00A0" + $valor);

//min - para mostrar o menor valor
var $valor2=Math.min(12,36);
alert("O menor valor é:\u00A0" + $valor2);
document.write("<br>O menor valor é:\u00A0" + $valor2);

//pow - para potencia
var $valor3=Math.pow(12,2);/*o 1° valor é o que vai ser elevado e o 2° é a potencia*/
document.write("<br>O valor da potencia é:\u00A0" + $valor3);

//round - para arredondar matematicamente
var $valor4=Math.round(5.4);
alert("O valor arredondado é:\u00A0" +$valor4);
document.write("<br>O valor arredondade é:\u00A0" + $valor4);

//ceil - arredonda obrigatoriamente para cima indepedente do valor
var $valor5=Math.round(5.9);
alert("O valor arredondado é:\u00A0" +$valor5);
document.write("<br>O valor arredondade é:\u00A0" + $valor5);

//floor - arredonda obrigatoriamente para baixo indepedente do valor
var $valor6=Math.floor(5.9);
alert("O valor arredondado é:\u00A0" +$valor6);
document.write("<br>O valor arredondade é:\u00A0" + $valor6);

//random - para trabalhar com valores aleatórios
var $valor7=Math.random()*80;
alert("O valor aleatório é:\u00A0" +$valor7);
document.write("<br>O valor aleatório é:\u00A0" + $valor7);

//sqrt - para raiz quadrada
var $valor8=Math.sqrt(49);
alert("O valor da raiz é:\u00A0" + $valor8);
document.write("<br>O valor da raiz é:\u00A0" + $valor8);

//cbrt - para raiz cubica
var $valor9=Math.cbrt(8);
alert("O valor da raiz cubica é:\u00A0" + $valor9);
document.write("<br>O valor da raiz cubica é:\u00A0" + $valor9);

//Operadores de comparação
//Operador igual se usa 2 sinais de == (verifica somente os dados )

var x=6;
var y="6";
alert(x==y);

//operador de identidade igual ===(verificas se os tipos de dados sao iguais)
var x=6;
var y="6";
alert(x===y);

//operador diferente != (so verifica se os dados sao diferentes)
var a=6;
alert("O valor é diferente?\u00A0"+(a!=6));

//operador de identidade diferente !==
var b=6;
alert("O valor é diferente?\u00A0"+(b!=="6"));

//operador maior >
var c=prompt("Entre com um valor:");
alert("O valor é maior que 20?\u00A0"+(c>20));

//operador menor <
var d=prompt("Entre com um valor:");
alert("O valor é menor que 20?\u00A0"+(c<20));

//operador de maior e igual >=
var e=prompt("Entre com um valor:");
alert("O valor é maior e igual a 20?\u00A0"+(e>=20));

//operador de menor e igual <=
var f=prompt("Entre com um valor:");
alert("O valor é menor e igual a 20?\u00A0"+(f<=20));

//operadores logicos - and = &&, or = ||, not = !

//exemplo de and = &&
var g=4;
alert("O valor é:\u00A0"+((g>=1)&&(g<=10)));

var g=prompt("Entre com um valor");
alert("O valor é:\u00A0"+((g>=1)&&(g<=10)));

//exemplo de or = ||
var h=4;
alert("O valor é:"+((h>=1)||(h<=5)));

/*Exercicios
1.Ler dois valores a partir do prompt, calcular e imprimir na tela:

a)A soma deste valores;
b)O produto deles;
c)O quociente deles;
d)A diferença deles;

2.Elabore um programa em JS que calcule a media aritimetica de duas notas e exiba o resultado na tela.

3.Desenvolva um programa em JS em que a variavel 1 receba o valor 5, a variravel 2 receba 3 e avariavel 3 receba o resultado da subtração 
de var 1 e var 2 e mostre a frase "Resultado da subtração é:" na tela e concatenando com o valor do resultado.