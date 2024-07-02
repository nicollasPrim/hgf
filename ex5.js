let resposta = document.getElementById('resposta')

function res(){
    let f = Number(document.getElementById('f').value)

    let fpc = (f - 32) / 1.8

    resposta.innerHTML = "O valor de farenheit para celsius é: "+fpc
    resposta.style.transition = "0.8s"
    resposta.style.fontSize = "1.5rem"
}