var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener ("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    

    var errores = validarPaciente(paciente);
    console.log(errores);

    if(errores.length > 0){
        exhibirMensajesError(errores);
        return;
    }
    
    adicionarPacienteTabla(paciente);
    form.reset();

    var mensajeErrores = document.querySelector("#mensajes-errores");
    mensajeErrores.innerHTML = "";

});

function adicionarPacienteTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

function capturarDatosPaciente(form){
    //Capturar los datos del usuario

    var paciente ={
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value)
}
    return paciente;
}

function construirTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

    function construirTd(dato,clase){
        var td = document.createElement("td");
        td.classList.add(clase);
        td.textContent = dato;
        return td;
    }
    

    function validarPaciente(paciente){
        var errores = []

        if(paciente.nombre.length == 0){
            errores.push("Nombre no puede estar vacio");
        }

        if(paciente.peso.length == 0){
            errores.push("Peso no puede estar vacio");
        }

        if(paciente.altura.length == 0){
            errores.push("Altura no puede estar vacio");
        }

        if(paciente.gordura.length == 0){
            errores.push("El %gordura no puede estar vacio");
        }

        if(!validarAltura(paciente.altura)){
            errores.push("Altura Incorrecta");
        }

        if(!validarPeso(paciente.peso)){
            errores.push("Peso Incorrecto");
        }

    return errores;
}

function exhibirMensajesError(errores){
    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";

    errores.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}
