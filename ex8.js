let resposta1 = document.getElementById('resposta1')
let resposta2 = document.getElementById('resposta2')
let resposta3 = document.getElementById('resposta3')
let resposta4 = document.getElementById('resposta4')
let resposta5 = document.getElementById('resposta5')
let resposta6 = document.getElementById('resposta6')
let resposta7 = document.getElementById('resposta7')

function resultado(){
    let tomate = Number(document.getElementById('tomate').value)
    let cebola = Number(document.getElementById('cebola').value)
    let aipim = Number(document.getElementById('aipim').value)
    let batata = Number(document.getElementById('batata').value)
    let cenoura = Number(document.getElementById('cenoura').value)
    let chuchu = Number(document.getElementById('chuchu').value)

    let prectomate = tomate * 5.35
    let preccebola = cebola * 3.32
    let precaipim = aipim * 2.87
    let precbatata = batata * 4.43
    let preccenoura = cenoura * 3.59
    let precchuchu = chuchu * 1.79
    let prectotal = precaipim + precbatata + preccebola + preccenoura + precchuchu + prectomate

    resposta1.innerHTML = "Tomate R$"+prectomate.toFixed(2)+" x"+tomate
    resposta2.innerHTML = "Cebola R$"+preccebola.toFixed(2)+" x"+cebola
    resposta3.innerHTML = "Aipim R$"+precaipim.toFixed(2)+" x"+aipim
    resposta4.innerHTML = "Batata inglesa R$"+precbatata.toFixed(2)+" x"+batata
    resposta5.innerHTML = "Cenoura R$"+preccenoura.toFixed(2)+" x"+cenoura
    resposta6.innerHTML = "Chuchu R$"+precchuchu.toFixed(2)+" x"+chuchu
    resposta7.innerHTML = "Preço total: R$"+prectotal.toFixed(2)
    resposta1.style.transition = "0.5s"
    resposta1.style.fontSize = "1.4rem"
    resposta2.style.transition = "0.5s"
    resposta2.style.fontSize = "1.4rem"
    resposta3.style.transition = "0.5s"
    resposta3.style.fontSize = "1.4rem"
    resposta4.style.transition = "0.5s"
    resposta4.style.fontSize = "1.4rem"
    resposta5.style.transition = "0.5s"
    resposta5.style.fontSize = "1.4rem"
    resposta6.style.transition = "0.5s"
    resposta6.style.fontSize = "1.4rem"
    resposta7.style.transition = "0.5s"
    resposta7.style.fontSize = "1.4rem"
}