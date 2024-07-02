let resposta = document.getElementById('resposta')

function resultado(){
    let v = Math.PI * (2.5*2.5) * 22
    let fd = 55 * 16
    let fm = fd * 30
    let vt = v * fm
    resposta.innerHTML = "O volume de produção foi de "+vt.toFixed(2)

    
}