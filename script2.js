
function chamada(){
    alert("Bem vindo ao nosso site!");
}

function alterarTexto(){
    //Procura o elemento pelo id 
    document.getElementById("titulo").innerHTML =
    "Sua empresa mais conectada!";
}

function mudarCor(){
    document.getElementById("titulo2").style.color = "red";
    document.getElementById("titulo2").style.fontSize = "50px";
    document.getElementById("titulo2").style.background = "yellow";
}

function esconder(){
    document.getElementById("mensagem").style.display = "none";
}

function mostrar(){
    document.getElementById("mensagem").style.display = "block";
}

function entradaDados(){
    let nome = prompt("Digite seu nome: ");
    alert("Olá "+nome+".");
}

function saudar(){
    //Pegar o valor digitado no campo
    let nome = document.getElementById("nome").value;
    //let idade = document.getElementById("idade").value;
    
    //Exibe o resultado na própria pagina
    document.getElementById("resultado").innerHTML =
    "Olá "+nome+"! Seja bem vindo!";
}
