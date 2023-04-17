/*--------------Control del Modal-------------*/

// Obtener el modal
var modal = document.getElementById("modal-precompra");

// Obtener el boton que abre el modal
var btn = document.getElementById("btn-precompra");

//Obtener el boton para cancelar la precompra
var btn_cancel = document.getElementById("cancelar");

// Obtener las paginas del modal como arreglo
var pages = document.getElementsByClassName("modal-precompra");

// Cuando se haga click en el boton, abrir el modal
function openModal() {
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.left = String(100 * i) + "%";
  }
  modal.style.display = "inline-block";
}

// Funcion que cierra el modal (y limpia los campos del formulario cuando se implemente)
function closeModal() {
  modal.style.display = "none";
}

// Si se presiona fuera del modal, cerrar el modal
window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


// Movimiento de las paginas del modal

function nextPage() {

    // Captura los valores de los campos del formulario
    let nombre = $("#campoNombre").val();
    let apellido = $("#campoApellido").val();
    let mail = $("#campoMail").val();
    let nacimiento = $("#campoNacimiento").val();
    let pais = $("#campoPais").val();
    let ciudad = $("#campoCiudad").val();
    let calle = $("#campoCalle").val();
    let telefono = $("#campoTelefono").val();

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.left = String(parseInt(pages[i].style.left) - 100) + "%"; // Desplaza a la izquierda las paginas del modal 
    }

    // Inserta los valores de los campos en la pagina final del formulario, donde se encuentra el recibo
    document.getElementById("reciboNombre").innerHTML = "Nombre: " + apellido + " " + nombre;
    document.getElementById("reciboNacimiento").innerHTML = "Fecha de Nacimiento: " + nacimiento;
    document.getElementById("reciboCorreo").innerHTML = "Direccion de Correo Electronico: " + mail;
    document.getElementById("reciboPais").innerHTML = "Nacionalidad: " + pais;
    document.getElementById("reciboDomicilio").innerHTML = "Direccion: " + calle + ", " + ciudad;
    document.getElementById("reciboTelefono").innerHTML = "Telefono: " + telefono;

}

    // Se desplaza a la pagina anterior
function prevPage() {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.left = String(parseInt(pages[i].style.left) + 100) + "%";
    }
}



/*------------------Gestion del PDF-----------------*/


// Creacion y manipulacion del PDF
function createRecipe() {

    html2canvas(document.getElementById("recibo")).then(function (canvas) {  //Funcion que toma una captura del elemento html indicado y la convierte en una imagen
      var img = canvas.toDataURL("image/png");  //Indicamos el tipo de imagen de la captura
      var doc = new jsPDF({
        orientation: "l",
        unit: "cm",
        format: "a6"
      });  //Creamos el documento PDF
      doc.addImage(img, "JPEG", 0, 0);  //Agregamos la imagen al documento PDF indicando el tipo y los margenes X e Y
      doc.save("comprobante.pdf")  //Guardamos el PDF generado
    });
  }



/*------------------Gestion de las Validaciones--------------------*/


// Reglas de validaciones

$("#formularioWizard01").validate({   // Reglas de validaciones para la primera pagina
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        mail: {
            required: true,
            email: true
        },
        nacimiento: {
            required: true,
            dateISO: true
        }
    }
})

$("#formularioWizard02").validate({  // Reglas de validaciones para la segunda pagina
    rules: {
        ciudad: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        calle: {
            required: true,
            minlength: 3,
            maxlength: 30
        },
        telefono: {
            required: true,
            minlength: 3,
            maxlength: 30,
            digits: true
        }
    }
})

//Validaciones
$("#siguienteUno").click(function () {          // Valida la primera pagina

    if ($("#formularioWizard01").valid() == false) {   // Si se encuentra algun error, sale de la funcion
        return
    }

    nextPage();
})

$("#siguienteDos").click(function () {      // Valida la segunda pagina

    if ($("#formularioWizard02").valid() == false) {  //Si se encuentra algun error, sale de la funcion
        return
    }

    nextPage();
})

