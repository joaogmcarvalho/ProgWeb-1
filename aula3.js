//Aula 3 - Função = Function, Função Retorno= Function Return, Condicionais(If e Else)

//eu definindo os valores
function somar(x,y) {
	document.write("A soma de X e Y é:\n"+(x+y));
}
somar(10,30);

// passando os valores pelo prompt
function somar(x,y){
	document.write("<br>A soma de X e Y é:\n"+(x+y));
}
var x=parseInt(prompt("Entre com o valor de X: "));
var y=parseInt(prompt("Entre com o valor de Y: "));
somar(x,y);

//subtração
function sub(a,b){
	document.write("<br>A subtração de A e B é: "+(a-b));
}
var a=prompt("Entre com valor de a: ");
var b=prompt("Entre com valor de b: ");
sub(a,b);

//multiplicação
function mult(a,b){
	document.write("<br>A multiplicação de A e B é: "+(a*b));
}
var a=prompt("Entre com o valor de A: ");
var b=prompt("Entre com o valor de B: ");
mult(a,b);

//divisao
function div(a,b){
	document.write("<br>A divisao de A e B é: "+(a/b));
}
var a=prompt("Entre com o valor de de A: ");
var b=prompt("Entre com o valor de de B: ");
div(a,b);

//resto da divisao
function resto(a,b){
	document.write("<br>O resto da  divisao de A e B é: "+(a%b));
}
var a=prompt("Entre com o valor de de A: ");
var b=prompt("Entre com o valor de de B: ");
resto(a,b);


//Usando o metodo Function Return
function dividir(g,h){
	return g/h
}
var g=prompt("Entre com o valor de de G: ");
var h=prompt("Entre com o valor de de H: ");
document.write("<br>A divisao de G e H é: "+dividir(g,h));

//multiplicação com funçao Retorno
function multiplicar(x,y){
	return x*y
}
var x=prompt("Entre com o valor de de X: ");
var y=prompt("Entre com o valor de de Y: ");
document.write("<br>A multiplicação de X e Y é: "+multiplicar(x,y));

//subtração com funçao Retorno
function subtrair(x,y){
	return x-y
}
var x=prompt("Entre com o valor de de X: ");
var y=prompt("Entre com o valor de de Y: ");
document.write("<br>A multiplicação de X e Y é: "+subtrair(x,y));

//subtração com funçao Retorno
function resto2(x,y){
	return x%y
}
var x=prompt("Entre com o valor de de X: ");
var y=prompt("Entre com o valor de de Y: ");
document.write("<br>A multiplicação de X e Y é: "+resto2(x,y));

//soma com funçao Retorno
function parseIntsoma2(x,y){
	return x+y
}
var x=prompt("Entre com o valor de de X: ");
var y=prompt("Entre com o valor de de Y: ");
document.write("<br>A multiplicação de X e Y é: "+parseIntsoma2(x,y));
