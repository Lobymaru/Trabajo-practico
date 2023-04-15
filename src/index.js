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

function nextPage() {

  let nombre = document.getElementById("campoNombre").value;
  let apellido = document.getElementById("campoApellido").value;
  let mail = document.getElementById("campoMail").value;
  let nacimiento = document.getElementById("campoNacimiento").value;
  let pais = document.getElementById("campoPais").value;
  let ciudad = document.getElementById("campoCiudad").value;
  let calle = document.getElementById("campoCalle").value;
  let telefono = document.getElementById("campoTelefono").value;

  for (let i = 0; i < pages.length; i++) {
    pages[i].style.left = String(parseInt(pages[i].style.left) - 100) + "%";
  }

  document.getElementById("recivoNombre").innerHTML = "Nombre: " + apellido + " " + nombre;
  document.getElementById("recivoNacimiento").innerHTML = "Fecha de Nacimiento: " + nacimiento;
  document.getElementById("recivoCorreo").innerHTML = "Direccion de Correo Electronico: " + mail;
  document.getElementById("recivoPais").innerHTML = "Nacionalidad: " + pais;
  document.getElementById("recivoDomicilio").innerHTML = "Direccion: " + calle + ", " + ciudad;
  document.getElementById("recivoTelefono").innerHTML = "Telefono: " + telefono;

}

function prevPage() {
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.left = String(parseInt(pages[i].style.left) + 100) + "%";
  }
}

// Si se presiona fuera del modal, cerrar el modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Creacion y manipulacion del PDF
function createRecipe() {

  html2canvas(document.getElementById("recivo")).then(function (canvas) {  //Funcion que toma una captura del elemento html indicado y la convierte en una imagen
      var img = canvas.toDataURL("image/png");  //Indicamos el tipo de imagen de la captura
      var doc = new jsPDF({
        orientation: "l",
        unit: "cm",
        format:"a6"
      });  //Creamos el documento PDF
      doc.addImage(img, "JPEG", 0, 0);  //Agregamos la imagen al documento PDF indicando el tipo y los margenes X e Y
      doc.save("comprobante.pdf")  //Guardamos el PDF generado
    });

  
  /*doc.text("Gracias por reservar el Metal Gear: Peace Walker! \nguarde este recivo para reclamar su reserva el día\ndel lanzamiento", 10, 10);
  doc.text("Nombre: " + apellido + " " + nombre + "\nFecha de Nacimiento: " + nacimiento + "\nE-mail: " + mail, 10, 35);*/



}