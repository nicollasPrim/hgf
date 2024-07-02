let vsn = document.getElementById('vsn')

function resultado(){
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)

    if (idade < 16){
        vsn.innerHTML = "O usuario, " + nome + " tem " + idade + " anos de idade, ou seja, não pode votar!"
    }
    else if ((idade >= 16) && (idade < 18)){
        vsn.innerHTML = "O usuario, " + nome + " tem " + idade + " anos de idade, ou seja, o voto é facultativo!"
    }
    else if ((idade >= 18) && (idade < 70)){
        vsn.innerHTML = "O usuario, " + nome + " tem " + idade + " anos de idade, ou seja, o voto é obrigatório!"
    }
    else if (idade <= -1){
        vsn.innerHTML = "Idade inválida"
    }

    vsn.style.transition = "0.8s"
    vsn.style.fontSize = "1.5rem"
}