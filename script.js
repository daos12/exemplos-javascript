
//Print no console
console.log("Olá Mundo! 2");

//Tipos Primitivos

//String
let nome = "Josivaldo Junior";
console.log("Olá, "+nome+"!");

//Numerico
let idade = 19;
console.log("Tem "+idade+" anos de idade.");

//Boolean
let eMaiorIdade = idade > 18;
console.log("É maior de idade? "+ eMaiorIdade);

//null unerfined
let endereco = null;
let telefone;


//let, const e var

//let Podem mudar de valor
let altura = 1.80;
altura = "1.85";
altura = "Altão";

//const Declarar constantes
//Valores que não podem ser alterados
const pi = 3.14;
const horasDoDia = 24;

//var Como se fosse variavel global
for(var i = 0; i < 3; i++){
    let nomeVar = "Diego "+ i;
    console.log(nomeVar);
}

//Operadores

let count = 0;
count++; //Incrementa
count--; //Decrementa

console.log("E igual? ", 1 == "1");
console.log("E igual? ", 2 === "2");

//== Compara apneas o valor, ignorando o tipo
//=== Compara o valor e o tipo

console.log("E diferente? ", 1 != "1");

//Estruturas Condicionais (if,else,else if)
if(idade >= 18){
    console.log("Pode votar");
}else{
    console.log("Não pode votar");
}

let nota = 85;
if(nota >= 90){
    console.log("Aprovado com Excelência (A))");
}else if(nota >= 80){
    console.log("Aprovado (B)");
}else if(nota >= 70){
    console.log("Aprovado (C)");
}else if(nota >= 60){
    console.log("Aprovado (D)");
}else{
    console.log("Reprovado (E)");
}

//Condições com operadores lógicos
let temCartao = false;
let saldoPositivo = false;

//&& - E = Ambos são verdadeiros
if(temCartao && saldoPositivo){
    console.log("Você pode comprar!");
}else{
    console.log("Você não pode comprar!");
}

//|| - OU = Pelo menos um deve ser verdadeiro
if(temCartao || saldoPositivo){
    console.log("Você pode comprar!");
}else{
    console.log("Você não pode comprar!");
}


//Switch case
let diaSemana = 2;
switch(diaSemana){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    default:
        console.log("Dia inválido");
}

//Ternário
console.log("E igual?", 1 == "1" ? "Igual":"Diferente");


//Estruturas de repetição
for(let i = 0; i < 5; i++){
    console.log("Contagem no for: "+ i);
}

while(count < 5){
    console.log("Contagem no while: "+ count);
    count++;
}

do{
    console.log("Contagem no do-while: "+ count);
    count++;
}while(count < 5);

//Funções
function saudacao(nome){
    console.log("Olá "+nome);
}

saudacao(nome);

//Array (Lista)
let frutas = ["Maçã","Banana","Laranja"];
console.log("Array de frutinhas: ", frutas);

//Acessar elemento pelo índice
console.log("Primeira Fruta: ",frutas[0]);

frutas[1] = "Uva";

frutas.push("Abacaxi"); //Add no final
console.log("Depois do Push: ", frutas);

frutas.pop(); //Remove do final
console.log("Removendo com pop: ", frutas);

frutas.unshift("Morango"); //Add no início
console.log("Depois do unshift: ", frutas);

frutas.shift();//Remove do inicio
console.log("Depois do shift: ", frutas);

for(let i = 0; i < frutas.length; i++){
    console.log("Fruta ",i ,":",frutas[i]);
}

//Remover por indice
//Primeiro o indice a ser deletado
//Segundo a quantidade a ser deletada
frutas.splice(2,1);
console.log("SPLICEEEEEE ", frutas);


//Tratamento
try {
    //Código qye pode dar problema
} catch (error) {
    //O que fazer se der erro
}finally{
    //Opcional
    //Código que executa sempre
    //Com erro ou não
}

