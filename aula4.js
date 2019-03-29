//Oper\ador this - traz o titulo da pagina

alert(this.document.title);

//delete - para remover um elemento

Pessoa={
  nome:"João Gabriel",
  email:"jojobagato@gamil.com",
  endereço:"Rua Ceu dos Anjos, 90"
      }

alert("O nome é "+(Pessoa.nome));

delete Pessoa.nome; /*para deletar */
alert("O nome é "+(Pessoa.email));

//Operador in - para verificar se a propriedade existe

alert("nome" in Pessoa);
alert("endereço" in Pessoa);

//Condiçao while - enquanto for verdadeiro executa

var i=0;
while (i<3) {
  alert(i);
  i++;
}

var texto="";
var i=0;
while (i<=3) {
  texto=texto+i;
  i++;
}
alert(texto);

var texto="";
var i=3;
while (i>=0) {
  texto=texto+i;
  i--;
}
alert(texto);
