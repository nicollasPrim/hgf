let resposta = document.getElementById('resposta')

function resultado() {
    let tipo = document.getElementById('tipo').value;
    let litros = (document.getElementById('litros').value);

    if (tipo == 'G'){ 
        if (litros <= 20){
            desconto = 0.03; 
        } else {
            desconto = 0.05; 
        }
        precoLitro = 5.30; 
    } else if (tipo == 'A'){
        if(litros <= 20){
            desconto = 0.02; 
        } else{
            desconto = 0.04; 
        }
        precoLitro = 3.90; 
    }else{
        resposta.innerHTML = "Tipo de combustível inválido, digite 'G' para gasolina ou 'A' para álcool."
    }

    let valorSemDesconto = litros * precoLitro;
    let valorComDesconto = valorSemDesconto * (1 - desconto);

    resposta.innerHTML = "Tipo de Combustível: "+tipo+ ", "
    resposta.innerHTML += "Quantidade de Litros: "+litros+ ", "
    resposta.innerHTML += "Preço por Litro: R$"+precoLitro.toFixed(2)+ ", "
    resposta.innerHTML += "Valor Total (sem desconto): R$"+valorSemDesconto.toFixed(2)+ ", "
    resposta.innerHTML += "Valor Total (com desconto): R$"+valorComDesconto.toFixed(2)
}