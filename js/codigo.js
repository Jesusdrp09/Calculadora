let uno = document.getElementById("1");
let dos = document.getElementById("2");
let tres = document.getElementById("3");
let cuatro = document.getElementById("4");
let cinco = document.getElementById("5");
let seis = document.getElementById("6");
let siete = document.getElementById("7");
let ocho = document.getElementById("8");
let nueve = document.getElementById("9");
let cero = document.getElementById("0");
let suma = document.getElementById("+");
let resta = document.getElementById("-");
let multiplicacion = document.getElementById("x");
let division = document.getElementById("/");
let punto = document.getElementById(".");
let igual = document.getElementById("=");
let ANS = document.getElementById("ANS");
let AC = document.getElementById("AC");
let DEL = document.getElementById("DEL");
let H1 = document.getElementById("numero1");
let operacion = document.getElementById("operacion");
let H2 = document.getElementById("numero2");

let numero1 = 0;
let numero2 = 0;
let resultado = 0;

uno.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 1;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 1;
    }else{
        H2.innerHTML += 1;
    }
});
dos.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 2;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 2;
    }else{
        H2.innerHTML += 2;
    }
});
tres.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 3;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 3;
    }else{
        H2.innerHTML += 3;
    }
});
cuatro.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 4;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 4;
    }else{
        H2.innerHTML += 4;
    }
});
cinco.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 5;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 5;
    }else{
        H2.innerHTML += 5;
    }
});
seis.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 6;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 6;
    }else{
        H2.innerHTML += 6;
    }
});
siete.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 7;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 7;
    }else{
        H2.innerHTML += 7;
    }
});
ocho.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 8;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 8;
    }else{
        H2.innerHTML += 8;
    }
});
nueve.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 9;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 9;
    }else{
        H2.innerHTML += 9;
    }
});
cero.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = 0;
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += 0;
    }else{
        H2.innerHTML += 0;
    }
});

punto.addEventListener("click", ()=>{
    if(H1.textContent.valueOf() == "Escribe algo"){
        H1.innerHTML = ".";
    }else if(operacion.innerText.valueOf() == ""){
        H1.innerHTML += ".";
    }else{
        H2.innerHTML += ".";
    }
});

AC.addEventListener("click", ()=>{
    H1.innerHTML = "";
    operacion.innerHTML = "";
    H2.innerHTML = "";
    numero1 = 0;
    numero2 = 0;
});

DEL.addEventListener("click", ()=>{
    if(H2.innerText.valueOf() != ""){
        H2.innerHTML = H2.innerHTML.substring(0, H2.innerHTML.length-1);
    }else if(operacion.innerText.valueOf() != ""){
        operacion.innerText = "";
        numero1 = 0;
    }else{
        H1.innerHTML = H1.innerHTML.substring(0, H1.innerHTML.length-1);
    }
});

suma.addEventListener("click", ()=>{
    if(numero1 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        numero1 = H1.innerText;
        operacion.innerHTML = "+";
    }else if(numero1 != 0 & numero2 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        operacion.innerHTML = "+";
    }  
});

multiplicacion.addEventListener("click", ()=>{
    if(numero1 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        numero1 = H1.innerText;
        operacion.innerHTML = "x";
    }else if(numero1 != 0 & numero2 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        operacion.innerHTML = "x";
    }  
});

resta.addEventListener("click", ()=>{
    if(numero1 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        numero1 = H1.innerText;
        operacion.innerHTML = "-";
    }else if(numero1 != 0 & numero2 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        operacion.innerHTML = "-";
    }  
});

division.addEventListener("click", ()=>{
    if(numero1 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        numero1 = H1.innerText;
        operacion.innerHTML = "&divide;";
    }else if(numero1 != 0 & numero2 == 0 & H1.textContent.valueOf() != "Escribe algo"){
        operacion.innerHTML = "&divide;";
    }  
});

igual.addEventListener("click", ()=>{
    if(numero1 != 0 & H1.textContent.valueOf() != "Escribe algo" & operacion.innerText != ""
        & H2.innerText != ""){
            numero2 = H2.innerText;
            if(operacion.innerText == "+"){
                resultado = parseFloat(numero1) + parseFloat(numero2);
                H1.innerText = resultado;                
                operacion.innerText = "";
                H2.innerText = "";
            }else if(operacion.innerText == "-"){
                resultado = parseFloat(numero1) - parseFloat(numero2);
                H1.innerText = resultado;                
                operacion.innerText = "";
                H2.innerText = "";
            }else if(operacion.innerText == "x"){
                resultado = parseFloat(numero1) * parseFloat(numero2);
                H1.innerText = resultado;                
                operacion.innerText = "";
                H2.innerText = "";
            }else if(operacion.innerText.valueOf() == "÷"){
                resultado = parseFloat(numero1) / parseFloat(numero2);
                H1.innerText = resultado;                
                operacion.innerText = "";
                H2.innerText = "";
            }
            numero1 = 0;
            numero2 = 0;
        }
});

ANS.addEventListener("click", ()=>{
    if(operacion.valueOf() != "" & H2.innerText.valueOf() != "" & H1.innerText.valueOf() != ""){
        H1.innerText = "";
        H2.innerText = "";
        operacion.innerText = "";
        numero1 = 0;
        numero2 = 0;
    } else if(H1.innerText == ""){
        H1.innerText += resultado;
    }else if(H2.innerText == "" & operacion.innerText != ""){
        H2.innerText += resultado;
    }
})