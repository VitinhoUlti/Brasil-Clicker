let real = window.document.getElementById("real");
let imagem = window.document.getElementById("imagem");
let click = document.getElementById("clicker");
let juliet = document.getElementById("juliet");
let coxinha = document.getElementById("coxinha");
let conto = document.getElementById("conto");
let cp = document.getElementById("cp")

let pontos = 0;
let n = pontos+1;
let b = 0;
let res = 0;
let clickv = 0;

function dou(){
    if(pontos<10){
        window.alert("tu é pobre kkkk, precisa de 10 conto pra comprar")
    }
    else{
    b = b+0.5;
    pontos = pontos-10;
    real.textContent = pontos;
    click.style.display = 'none';
    }
}

function juli(){
    if(pontos<20){
        window.alert("tu é pobre kkkk, precisa de 20 conto pra comprar")
    }
    else{
    b = b+1;
    pontos = pontos-20;
    real.textContent = pontos;
    juliet.style.display = 'none';
    }
}

function coxi(){
    if(pontos<20){
        window.alert("tu é pobre kkkk, precisa de 30 conto pra comprar")
    }
    else{
    b = b+2;
    pontos = pontos-30;
    real.textContent = pontos;
    coxinha.style.display = 'none';
    }
}

function cont(){
    if(pontos<20){
        window.alert("tu é pobre kkkk, precisa de 200 conto pra comprar")
    }
    else{
    b = b+200;
    pontos = pontos-200;
    real.textContent = pontos;
    conto.style.display = 'none';
    }
}

function cip(){
    if(pontos<10){
        window.alert("tu é pobre kkkk, precisa de 10 conto pra comprar")
    }
    else{
        clickv++
        pontos = pontos-10;
        real.textContent = pontos;
        cp.textContent = clickv;
    }
}

function renas(){
    if(pontos<=2000){
        window.alert("tu é pobre kkkk, precisa de 2000 conto pra comprar")
    }
    else{
        pontos=0;
        res = res+1;
        b = res;
        real.textContent = pontos;
        click.style.display = 'block';
        juliet.style.display = 'block';
        coxinha.style.display = 'block';
        conto.style.display = 'block';
    }
}

function brasil(){
    let pv = b+1;
    n = pontos+pv;
    pontos = n;
    real.textContent = pontos;
}