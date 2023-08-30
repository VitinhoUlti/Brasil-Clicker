let real = window.document.getElementById("real")
let imagem = window.document.getElementById("imagem")
let pontos = 0
let n = pontos+1
let b = 0

function dou(){
    let click = document.getElementById("clicker")
    if(pontos<10){
        window.alert("tu é pobre kkkk, precisa de 10 conto pra comprar")
    }
    else{
    n = pontos+1
    pontos = n
    b = b+0.5
    pontos = pontos-11
    real.textContent = pontos;
    click.style.display = 'none';
    }
}

function juli(){
    let juliet = document.getElementById("juliet")
    if(pontos<20){
        window.alert("tu é pobre kkkk, precisa de 20 conto pra comprar")
    }
    else{
    n = pontos+1
    pontos = n
    b = b+1
    pontos = pontos-21
    real.textContent = pontos;
    juliet.style.display = 'none';
    }
}

function coxi(){
    let coxinha = document.getElementById("coxinha")
    if(pontos<20){
        window.alert("tu é pobre kkkk, precisa de 30 conto pra comprar")
    }
    else{
    n = pontos+1
    pontos = n
    b = b+2
    pontos = pontos-31
    real.textContent = pontos;
    coxinha.style.display = 'none';
    }
}

function conto(){
    let conto = document.getElementById("conto")
    if(pontos<20){
        window.alert("tu é pobre kkkk, precisa de 200 conto pra comprar")
    }
    else{
    n = pontos+1
    pontos = n
    b = b+200
    pontos = pontos-201
    real.textContent = pontos;
    conto.style.display = 'none';
    }
}

function brasil(){
    let real = window.document.getElementById("real")
    if(b<=0){
       let n = pontos+1
       pontos = n 
    }
    else if(b==0.5){
        n = pontos+1.5
        pontos = n
    }
    else if(b==1){
        n = pontos+2
        pontos = n
    }
    else if(b==1.5){
        n = pontos+2.5
        pontos = n
    }
    else if(b==2){
        n = pontos+3
        pontos = n
    }
    else if(b==2.5){
        n = pontos+3.5
        pontos = n
    }
    else if(b==3){
        n = pontos+4
        pontos = n
    }
    else if(b==3.5){
        n = pontos+4.5
        pontos = n
    }
    else if(b>=200){
        n = pontos-200
        pontos = n
    }
    real.textContent = pontos
}