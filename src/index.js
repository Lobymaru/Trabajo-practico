// Obtener el modal
var modal = document.getElementById("modal-precompra");

// Obtener el boton que abre el modal
var btn = document.getElementById("btn-precompra");

//Obtener el boton para cancelar la precompra
var btn_cancel = document.getElementById("cancelar");

// Obtener las paginas del modal como arreglo
var pages = document.getElementsByClassName("modal-precompra");

// Cuando se haga click en el boton, abrir el modal
btn.onclick = function() {
    for(let i = 0; i < pages.length; i++){
        pages[i].style.left = String(100 * i) +"%";
    }
    modal.style.display = "inline-block";
}

// Funcion que cierra el modal (y limpia los campos del formulario cuando se implemente)
function closeModal() {
  modal.style.display = "none";
}

function nextPage(){
    for (let i = 0;i < pages.length; i++){
        pages[i].style.left = String(parseInt(pages[i].style.left) - 100) + "%";
    }
}

function prevPage(){
    for (let i = 0;i < pages.length; i++){
        pages[i].style.left = String(parseInt(pages[i].style.left) + 100) + "%";
    }
}

// Si se presiona fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}	