let resposta = document.getElementById('resposta')

function resultado(){
    let v1 = Number(document.getElementById('v1').value)
    let v2 = Number(document.getElementById('v2').value)
    let v3 = Number(document.getElementById('v3').value)
    let numeros = [v1, v2, v3]

    let maior = Math.max(...numeros)
    let menor = Math.min(...numeros)
    
    resposta.innerHTML = "O maior número é "+maior+" e o menor é "+menor
    resposta.style.fontSize = "1.7rem"
    resposta.style.transition = "0.5s"
}

