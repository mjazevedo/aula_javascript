/*

var nome = " Matheus Azevedo";
//alert("Bem-Vindo" + nome);

var nome = " Matheus Azevedo";
var n1 = 5;

var frase = "Japão é o melhor time do mundo!"

n2 = 3;

//alert(nome + " tem" + idade + " anos");

//alert(idade + idade2);


//console.log(idade + idade2);

console.log(n1*n2);
console.log(nome);

console.log(frase);
console.log(frase.replace("Japão" , "Brasil"))

//alert(frase.replace("Japão" , "Brasil"));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase())

*/

//var lista = ["maça" , "pêra" , "laranja"];

//console.log(lista[1]);
//alert(lista[1]);

//lista.push("uva");
//lista.pop();

//console.log(lista.reverse());

//console.log(lista.toString());

//console.log(lista[0]);
//console.log(lista.toString()[0]);

//console.log(lista.join(" - "));

/*
var frutas = [{nome: "maça", cor:"vermelha"} , {nome: "uva", cor:"roxa"}];
console.log(fruta);
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var idade = 18;

var idade = prompt("Qual a sua idade ?")

if(idade >= 18){
  alert("Maior de idade!")
}
else{
  alert("Menor de idade!")
};
*/

/*
var count = 0;

while(count <= 5){
  console.log(count);
  //alert(count);
  count++;
}
*/

/*
var count = 0;
for(count = 0; count <=5; count++){
  //alert(count);
  console.log(count);
}
*/

/*
var d = new Date();
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
alert(d.getMilliseconds());
*/

/*
function soma(n1, n2) {
  return n1 + n2;
};
*/

/*
function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}

alert(soma(5,10));


console.log(soma(5, 10));
alert(setReplace("Vai Japão" , "Japão" , "Brasil"));
*/

/*
function validaIdade(idade){
  var validar;
  if(idade>=18){
    validar = true;
  }else{
    validar = false;
  }
  
  return validar;
}

var idade = prompt("Qual sua idade ?")
console.log(validaIdade(idade));
*/


function clicou(){

  //elemento.innerHTML = "<b>Obrigado por clicar!</b>";
  document.getElementById("agradecimento").innerHTML = "<br>Obrigado por clicar!</b>";
  console.log(document.getElementById("agradecimento"));
  //alert("Obrigado por clicar!");
};


function redirecionar(){
  window.open("https://web.digitalinnovation.one/home"); //abre outra aba
  window.location.href = "http://digitalinnovation.one/home"; //abre na mesma aba
};

function trocar(elemento){
  //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
  //alert("Trocar texto");
  elemento.innerHTML = "Obrigado por passar o mouse!";
}

function voltar(elemento){
  //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
  elemento.innerHTML = "Passe o mouse aqui!";
}

function load() {
  alert("página carregada");
}

function funcaoChange(elemento){
  console.log(elemento.value);
} 