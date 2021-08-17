const nome = document.getElementById("nome");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
let imc = 0;

const resultado = document.getElementById("resultado");

const calcular = document.getElementById("calcular");


function calculando() {
    if(peso.value !== "" && altura.value !== ""){
        imc = parseFloat(peso.value.replace(',', '.')) / parseFloat(altura.value.replace(',', '.')*2); 
    
        //conversão de string para número
        //mesmo que coloquemos o input como number, devemos colocar o parse para a conversão de String para numero    
        if(imc < 18.5){
            resultado.innerHTML = nome.value + " seu IMC é " + imc.toFixed(2) + " e você está abaixo do peso ideal";
        }
        else if(imc >= 18.5 && imc <= 29.9 ){
            resultado.innerHTML = nome.value + " seu IMC é " + imc.toFixed(2) + " e você está com o peso ideal. Parabéns!!!";
        }
        else if(imc >= 25 && imc <= 29.9 ){
            resultado.innerHTML = nome.value + " seu IMC é " + imc.toFixed(2) + " e você está acima do peso ideal";
        }
        else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML = nome.value + " seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau I";
        }
        else if(resultado >= 35 && imc <= 39.9){
            resultado.innerHTML = nome.value + " seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau II"; 
        }
        else{
            resultado.innerHTML = nome.value + " seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau III";
        }
    }
    else{
        alert("Preencha todos os campos")
    }
}

calcular.addEventListener("click", calculando)