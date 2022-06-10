var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdImc.textContent = imc;

var nombrePaciente = paciente.querySelector(".info-nombre");
var nombre = nombrePaciente.textContent;

pesoEsValido = validarPeso(peso);
alturaEsValida = validarAltura(altura);

if(!pesoEsValido){
    console.log("Peso incorrecto");
    alert("Peso incorrecto de " + nombre);
    tdImc.textContent = "Peso incorrecto";
    paciente.classList.add("paciente-incorrecto")
    pesoEsValido = false
}

if(!alturaEsValida){
    console.log("Altura incorrecta");
    alert("Altura incorrecta de " + nombre);
    tdImc.textContent = "Altura incorrecta"
    paciente.classList.add("paciente-incorrecto")
    alturaEsValida = false;
}

if(pesoEsValido && alturaEsValida){
    tdImc.textContent = calcularIMC(peso,altura)
}

}

function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2)
}

function validarPeso(peso){
    if (peso >= 30 && peso < 250){
    return true;
} 
    else{
        return false;
    }

}

function validarAltura(altura){
    if (altura >= 1.50 && altura < 2.00){
        return true;
}
    else{
        return false;
    }
}