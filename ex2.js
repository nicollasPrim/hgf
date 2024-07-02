let resposta = document.getElementById('resposta')

function resultado(){
    let lado = Number(document.getElementById('lado').value)
    let altura = Number(document.getElementById('altura').value)

    let area = (lado * altura) / 2

    if (area < 0){
        resposta.innerHTML = "Valores inválidos, tente novamente!"
    }
    else{
        resposta.innerHTML = "O valor da area da base é "+area+"m2!"
    }

}