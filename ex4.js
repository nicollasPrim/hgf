let resposta = document.getElementById('resposta')

function resultado(){
    let m = (1.27 + 0.873 + 0.792 + 0.559+ 0.672 + 0.714 + 0.623) / 2    
    let ps = (3*60) / 15 
    let p3 = m*ps
    let r3 = p3*14.95
    let r22 = r3*22
    let p22 = p3*22
    resposta.innerHTML = "Média de comida vendida em 3 horas: "+p3.toFixed(2)+", "
    resposta.innerHTML += "Média de receita em 3 horas: "+r3.toFixed(2)+", "
    resposta.innerHTML += "Média de receita em 22 dias: "+r22.toFixed(2)+", "
    resposta.innerHTML += "Média de peso de comida em 3 horas: "+p22.toFixed(2)+", "
}