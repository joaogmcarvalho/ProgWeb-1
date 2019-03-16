/*1.Ler dois valores a partir do prompt, calcular e imprimir na tela:

a)A soma deste valores;
b)O produto deles;
c)O quociente deles;
d)A diferença deles;
*/

//QUESTAO 1)A)
var n1=parseInt(prompt("Entre com n1"));
var n2=parseInt(prompt("Entre com n2"));
var resultado=n1+n2;
alert(" A soma dos numeros é:" + resultado);
document.write("<br>A soma dos numeros é:" + resultado);

//QUESTAO 1)B)
var n3=prompt("Entre com n3");
var n4=prompt("Entre com n4");
var produto=n3*n4;
alert(" A multiplicaçao dos numeros é:\u00A0" + produto);
document.write("<br>O produto da multiplicaçao é:\u00A0" + produto);

//QUESTAO 1)C)
var n5=prompt("Entre com n5");
var n6=prompt("Entre com n6");
var quociente=n5/n6;
alert(" A divisao dos numeros é:\u00A0" + quociente);
document.write("<br>O quociente da divisao é:\u00A0" + quociente);

//QUESTAO 1)D)
var n7=prompt("Entre com n7");
var n8=prompt("Entre com n8");
var dif=n7-n8;
alert(" A dif dos numeros é:\u00A0" + dif);
document.write("<br>A dif é:\u00A0" + dif);

//QUESTAO 2
var nota1=parseInt(prompt("Entre com a nota1"));
var nota2=parseInt(prompt("Entre com a nota2"));
var result=((nota1+nota2)/2);
alert(" A media das notas é:\u00A0" + result);
document.write("<br>A media das notas é:\u00A0" + result);

//QUESTAO3
var var1=5;
var var2=3;
var result=var1-var2;
document.write("<br>Resultado da subtração é:\u00A0" + result);