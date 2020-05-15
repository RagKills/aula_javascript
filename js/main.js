

/*
var nome = "Rafael Lopes";
var idade = 26;
var idade2 = 10;  //não precisa declarar o tipo de string
var frase = "Japão é o melhor time do mundo"
var lista = ["uva", "pera", "laranja"];
//var fruta = {nome:"maça", cor:"vermelha"} //dicionário
var fruta = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxo"}] //lista de dicionário


//console.log(fruta); //exibe a variável
//console.log(fruta.nome); //nome da variável. o item desejado
//lista.push("banana"); //push serve para adicionar algo a lista criada
//lista.pop(); //retira o ultimo item da lista
//console.log(lista);
//console.log(lista.length); //mostra o tamanho da lista
//console.log(lista.reverse()); //inverte a ordem da lista
//console.log(lista.toString()); //mostra a lista em forma de texto
//console.log(lista.join(" - ")); //permite adicionar algum elemento entre os itens da lista


//alert(nome + " tem " + idade + " anos.")
//alert(idade + idade2);
console.log(nome + " tem " + idade + " anos."); //pode usar diversos tipos de conta
console.log(frase.replace("Japão", "Brasil")); //usado para alterar uma palavra da variável por outra coisa
console.log(frase.toLocaleLowerCase()); //deixa td no minúsculo e o toUppercase deixa td maiúsculo
*/

/*var idade = prompt("Qual a sua idade?"); //pede para o usuário digitar uma informação
if(idade > 18)  //condição
{ 
    alert("maior de idade");
}
else 
{
    alert("menor de idade");
}*/

/*var count = 0;
while (count <= 5)
{
    console.log(count);
    count = count + 1; //pode também usar count++
}*/

/*var count;
for(count=0; count <=5; count++) //determina condição para um acontecimento
{
    console.log(count);
}*/

/*var d = new Date();  //informar a data atual
console.log(d);
console.log(d.getMonth()+1); //o month começa do zero, então tem q colocar +1, get serve para exibir algo específico
console.log(d.getMinutes());*/

/*function soma(n1, n2)
{
    return n1 + n2;
}
console.log(soma(5, 3));*/

/*function botao()
{
    document.getElementById("agradecimento").innerHTML = "Thanks for click"; //permite a interação com o html e a inserção de qualquer coisa
}*/

function botao()
{
    document.getElementById("agradecimento").innerHTML = "Thanks for click"; 
}

function redirecionar()
{
    window.open ("https://facebook.com");  //abre um link em nova guia
    //window.location.href = "https://facebook.com";  //abre um link na mesma guia
}

/*function trocar()
{
    document.getElementById("mousemove").innerHTML = "Thanks for passar o rato"; //no html, ao passar o mouse chama a função definida que irá retornar uma mensagem com o comando onmousemove
}*/
function trocar(elemento)  //define  o elemento podendo usar várias vezes sem ter q criar uma função para cada linha do html
{
   elemento.innerHTML = "Thanks for passar o rato";
}

function voltar(elemento)
{
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){  //informa que a página foi carregada usando o onload
    console.log("Página carregada");
}

function mudar(elemento){  //registra o valor selecionado usando o onchange no html
    console.log(elemento.value);
}
