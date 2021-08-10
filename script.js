const nome = document.getElementById("nome")
const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const imc = 0.0

const resultado = document.getElementById("resultado")

const calcular = document.getElementById("calcular")


function calculando() {
    if(peso.value !== "" && altura.value !== ""){
        imc = parseFloat(peso.value) / parseFloat(altura.value*2) //conversão de string para número
        //mesmo que coloquemos o input como number, devemos colocar o parse para a conversão de String para numero    
        if(imc <= 18.5){
            resultado.textContent = nome + "seu IMC é " + imc + " e você está abaixo do peso" 
        }
        else if(imc >= 25 && imc <= 29.9 ){
            resultado.textContent = nome + "seu IMC é " + imc + " e você está abaixo do peso" 
        }
        else if(imc >= 30 && imc <= 34.9){
            resultado.textContent = nome + "seu IMC é " + imc + " e você está abaixo do peso" 
        }
        else if(resultado >= 35 && imc <= 39.9){
            resultado.textContent = nome + "seu IMC é " + imc + " e você está abaixo do peso" 
        }
        else{
            resultado.textContent = nome + "seu IMC é " + imc + " e você está com obesidade grau III"
        }
    }
    else{
        alert("Preencha todos os campos")
    }
}

calcular.addEventListener("click", calculando)