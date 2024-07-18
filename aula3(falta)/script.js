function aqClique(){
    alert("Concluido com sucesso!")
}

function abrir(){
    alert("Hello moto")
}
function pergunta(){
    var nome
    nome = prompt("Informe o seu nome: ")    
    alert("Seja bem-vindo "+nome)

    if(nome=="Irineu")
        alert("ESCREVE O NOME POHA ")
    else
    alert("Seja bem vindo "+nome)
    
}

function contar(){
    cliques.innerText = parseInt(cliques.innerText) + 1
}