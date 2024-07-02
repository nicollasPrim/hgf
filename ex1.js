let resposta = document.getElementById('resposta')

function resultado(){
    let altura = Number(document.getElementById('altura').value)
    let lado = Number(document.getElementById('lado').value)

    let area = (lado*lado)+(altura*altura)
    if (area > 0){
        resposta.innerHTML = "A area da piramide é "+area+"m2!"
    }
    else{
        resposta.innerHTML = "Valores inválidos! Digite novamente"
    }
}