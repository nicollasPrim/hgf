let resposta = document.getElementById('resposta')

function resultado(){
    let msgs = Number(document.getElementById('msgs').value)
    let pbmsg = 5
    let msgs76 = (((msgs - 75) * 0.05) * (msgs - 75)) + pbmsg
    let msgs241 = (((msgs - 240) * 0.10) * (msgs - 240)) + pbmsg

    if (msgs > 75){
        resposta.innerHTML = "Preço final = "+msgs76.toFixed(2)
    }else if (msgs > 240){
        resposta.innerHTML = "Preço final = "+msgs241.toFixed(2)
    }else{
        resposta.innerHTML = "Preço final = "+pbmsg.toFixed(2)
    }
}