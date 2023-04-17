$(document).ready(function() {

    var page = 1;
    var arregloNombres = [];
    getNames();

    function getNames() {
        $.ajax({
            url: "https://randomuser.me/api/?results=100",
            type:"GET",
            data:"json"
        })
        .done(function (msg) {
            let array = Object.values(msg['results']);
            let listaDeNombres = document.getElementById("listaNombres");
            array.forEach(element => {
                let item = document.createElement("li");
                let name = element["name"];
                item.appendChild(document.createTextNode(name["first"]+ " " + name["last"]));         
                console.log(item);       
                listaDeNombres.appendChild(item);
            })
        })
    };

    
})


