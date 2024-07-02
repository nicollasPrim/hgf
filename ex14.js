let resposta = document.getElementById('resposta')

function resultado() {
    let vendas = Number(document.getElementById('vendas').value);

    let salarioFixo = 1800.00;

    if (vendas <= 10000){
        comissao = vendas * 0.03;
    }else if (vendas > 10000 && vendas <= 30000){
        comissao = vendas * 0.05;
    }else {
        comissao = vendas * 0.08;
    }

    let salarioTotal = salarioFixo + comissao;

    resposta.innerHTML = "Salário fixo: R$"+salarioFixo.toFixed(2)+", "
    resposta.innerHTML += "Comissão: R$"+comissao.toFixed(2)+", "
    resposta.innerHTML += "Salário total: R$"+salarioTotal.toFixed(2)+", "
}