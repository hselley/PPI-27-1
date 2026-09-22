// registroVG.js
var contenido = "<tr><th>Nombre del juego</th><th>Publisher</th><th>Consola</th><th>Estado</th><th>Fecha de adquisición</th><th>Portada</th></tr>";
var estilo = 0;

function registro() {
    // Validación de los campos del formulario
    if(document.getElementById("nombre").value == false) {
        alert("Nombre vacío.");
    } else if(document.getElementById("pub").value == false) {
        alert("Publisher vacio.");
    } else if(document.getElementById("fecha").value == false) {
        alert("Fecha vacia.");
    } else if(document.getElementById("portada").value == false) {
        alert("Portada vacia.");
    }
    else {
        if(estilo%2 ==0) {
            contenido += "<tr class='renglon1'>";
        } else {
            contenido += "<tr class=\"renglon2\">";
        }
        
        // Nombre del juego
        contenido = contenido + "<td>" + document.getElementById("nombre").value + "</td>";

        // Publisher del juego
        contenido = contenido + "<td>" + document.getElementById("pub").value + "</td>";
        
        // Consola
        contenido = contenido + "<td></td>";

        // Estado del juego
        contenido = contenido + "<td></td>";

        // Fecha de adquisición del juego
        contenido = contenido + "<td>" + document.getElementById("fecha").value + "</td>";

        // Portada
        contenido = contenido + "<td>" + document.getElementById("portada").value + "</td>";

        contenido += "</tr>";
        document.getElementById("consolas").innerHTML = contenido;
        estilo++;
    }
}