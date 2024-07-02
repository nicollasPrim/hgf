let resposta = document.getElementById('resposta')

function resultado(){
    let prod1 = Number(document.getElementById('prod1').value)
    let prod2 = Number(document.getElementById('prod2').value)
    let prod3 = Number(document.getElementById('prod3').value)

    console.log(prod1, prod2, prod3)

    let precprod1 = prod1 * 25
    let precprod2 = prod2 * 40
    let precprod3 = prod3 * 12

    console.log(precprod1, precprod2, precprod3)

    let precfinal = precprod1 + precprod2 + precprod3
    let prec35 = precfinal + (precfinal * 35/100)
    let prec25 = precfinal + (precfinal * 25/100)
    let prec15 = precfinal + (precfinal * 15/100)

    console.log(precfinal, prec35, prec25, prec15)

    if(precfinal < 50){
        resposta.innerHTML = "Preço total (mais porcentagem adicional de 35%): "+prec35
    }else if ((precfinal >= 50) && (precfinal < 100)){
        resposta.innerHTML = "Preço total (mais porcentagem adicional de 25%): "+prec25
    }else{
        resposta.innerHTML = "Preço total (mais porcentagem adicional de 15%): "+prec15
    }

}