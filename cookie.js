let pontos = 0
function brasil(){
    let real = window.document.getElementById("real")
    let n = pontos+1
    pontos = n
    real.textContent = pontos
    if(pontos>=100){
    window.alert("kkkkkk troxão, clicou 100 vezes sem nem ter oque comprar")
}
}
