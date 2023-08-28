let real = window.document.getElementById("real")
let imagem = window.document.getElementById("imagem")
let pontos = 0
let n = pontos+1
let b = 0

function dou(){
    if(pontos<10){
        window.alert("tu é pobre kkkk, precisa de 10 conto pra comprar")
    }
    else{
    n = pontos+1
    pontos = n
    b = b+1
    pontos = pontos-11
    real.textContent = pontos
    }
}

function brasil(){
    let real = window.document.getElementById("real")
    if(b<=0){
       let n = pontos+1
       pontos = n 
    }
    else if(b>=1){
        n = pontos+2
        pontos = n
    }
    real.textContent = pontos 
    if(pontos>=100){
    window.alert("kkkkkk troxão, clicou 100 vezes sem nem ter oque comprar")
}
}