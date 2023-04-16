    $("#contacto").validate({
        rules: {
            name: {
                required : true,
                minlength: 3
            },
            edad: {
                required: true,
                digits: true,
                min: 18,
                max: 100
            },
            email: {
                required: true,
                email: true
            },
            consulta: {
                required: true,
            }
        },
        messages:{
            name: {
                required: "Por favor ingrese su nombre",
                minlength: "El nombre debe tener al menos 3 caracteres"
            },
            edad: {
                required: "Por favor ingrese su edad",
                number: "Por favor ingrese su edad en numeros",
                min: "Debes ser mayor de edad para jugar este videojuego",
                max: "Debes tener menos de 100 años"
            },
            email:{
                required: "Por favor ingresa tu email",
                email: "Formato de email invalido"
            },
            consulta: {
                required: "Por favor escribanos su consulta"
            }
        }
    });


$("#btn_enviar").click(function () {          

    if ($("#contacto").valid() == false) {  
        return
    } 
    alert("Su consulta a sido enviada exitosamente");
    document.getElementById("contacto").reset();

});

