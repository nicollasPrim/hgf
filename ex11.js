let resposta = document.getElementById('resposta')

function resultado(){
    let custoFabrica = (document.getElementById('custoFabrica').value);
    let percentualDistribuidor = (document.getElementById('percentualDistribuidor').value);


    if (isNaN(custoFabrica) && isNaN(percentualDistribuidor)){
        alert('Por favor, insira valores numéricos válidos.');
    }

    let percentualImpostos = 15; 
    let valorDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    let valorImpostos = custoFabrica * (percentualImpostos / 100);
    let precoFinal = custoFabrica + valorDistribuidor + valorImpostos;

    resposta.innerHTML = "Custo de Fábrica: R$ "+custoFabrica+", "
    resposta.innerHTML += "Percentual do Distribuidor: "+percentualDistribuidor+", "
    resposta.innerHTML += "Valor do Distribuidor: R$"+valorDistribuidor.toFixed(2)+", "
    resposta.innerHTML += "Impostos: R$"+valorImpostos.toFixed(2)+", "
    resposta.innerHTML += "Preço Final: R$"+precoFinal.toFixed(2)
}