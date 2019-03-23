//Condicionais(If e Else)

//Condicionais

//Condição if

var idade=10;
if(idade<=12){
	document.write("Criança");
}

//Condiocional If usando o prompt e o else

var idade=prompt("Entre com a sua idade: ");
if(idade<=12){
	document.write("<br>Criança");
}
else if (idade<12 && idade>=16){
	document.write("<br>Adolescente");
}
else {
	document.write("<br>Adulto8");
}
