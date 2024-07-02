let resposta = document.getElementById('resposta')

function op(){
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)

    let soma = num1+num2
    let sub = num1-num2
    let multi = num1*num2
    let div = num1/num2

    if ((op == 'A') && (op == 'a')){
        resposta.innerHTML = num1+" + "+num2+" = "+soma
    }else if ((op == 'S') && (op == 's')){
        resposta.innerHTML = num1+" - "+num2+" = "+sub
    }else if ((op == 'M') && (op == 'm')){
        resposta.innerHTML = num1+" x "+num2+" = "+multi
    }else if((op == 'D') && (op == 'd')){
        resposta.innerHTML = num1+" / "+num2+" = "+div
    }

}